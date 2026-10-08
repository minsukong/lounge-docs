"""Read exported IA HTML; generate traceable IDs without deciding product scope."""
import csv
import hashlib
import io
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
WORKFLOW = ROOT / "docs" / "workflow"
IA = ROOT / "work" / "더라운지_IA FO_v0.2.xlsx"
SOURCES = [
    "01.FO(MO_WEB)_IA.html", "01.FO_APP_IA.html", "01.FO_WEB_IA.html",
    "01.FO_판매채널_IA.html", "03.PO_IA.html", "04.OO_IA.html",
]
ID_RE = re.compile(r"\b(?:MO|FO|PW|PO|OO|APP)-[A-Z]{3}-[A-Z][0-9]{6}\b")

class Rows(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.rows = []
        self.row = None
        self.cell = None
    def handle_starttag(self, tag, attrs):
        if tag == "tr":
            self.row = []
        elif tag in ("td", "th") and self.row is not None:
            self.cell = []
        elif tag == "br" and self.cell is not None:
            self.cell.append(" ")
    def handle_data(self, data):
        if self.cell is not None:
            self.cell.append(data)
    def handle_endtag(self, tag):
        if tag in ("td", "th") and self.cell is not None:
            self.row.append(re.sub(r"\s+", " ", "".join(self.cell)).strip())
            self.cell = None
        elif tag == "tr" and self.row is not None:
            self.rows.append(self.row)
            self.row = None

def platform_audit(lines, records):
    lines += ["", "## APP·WEB View와 ID 추출 주의", "",
              "파일 제목이나 FO 접두어 대신 각 행의 View 셀을 기준으로 구분합니다. View는 화면 구현 구분이며 API·권한·외부 앱 실행 등의 Bridge 계약 확정을 대신하지 않습니다.", "",
              "| 원본 파일 | ID가 있는 행 | 고유 ID | Native 행 / 고유 ID | WebView 행 / 고유 ID |",
              "| --- | --- | --- | --- | --- |"]
    for name in ("01.FO_APP_IA.html", "01.FO_WEB_IA.html"):
        subset = [r for r in records if r["source_file"] == name]
        groups = {view: [r for r in subset if view in [v.strip().lower() for v in r["raw_after_id"].split("|")]] for view in ("native", "webview")}
        measure = lambda rows: str(len(rows)) + " / " + str(len({r["screen_id"] for r in rows}))
        lines.append("| " + name + " | " + str(len(subset)) + " | " + str(len({r["screen_id"] for r in subset})) + " | " + measure(groups["native"]) + " | " + measure(groups["webview"]) + " |")
    lines += ["", "### APP에서 Native로 남은 행", "",
              "아래는 현재 원본의 Native 표기입니다. 원본 메뉴·기능 설명 간 차이나 실제 구현·메시지 계약은 별도로 확인합니다.", "",
              "| 원본 행 | ID | ID 앞 원본 셀 텍스트 |", "| --- | --- | --- |"]
    for r in records:
        if r["source_file"] == "01.FO_APP_IA.html" and "native" in [v.strip().lower() for v in r["raw_after_id"].split("|")]:
            context = r["raw_context"].replace("|", " / ").strip(" / ")
            lines.append("| " + r["source_row"] + " | " + r["screen_id"] + " | " + context + " |")
    lines += ["", "### View는 있으나 유효 ID를 추출하지 못한 행", "",
              "유효 ID 미추출은 기능 제외나 삭제 승인이 아닙니다. ID 공백·수식 오류와 원본 메뉴를 함께 확인하고, 과거 ID를 임의로 새 ID에 대응시키지 않습니다.", ""]
    for name in ("01.FO_APP_IA.html", "01.FO_WEB_IA.html"):
        parser = Rows()
        parser.feed((IA / name).read_text(encoding="utf-8-sig"))
        unresolved = [cells for cells in parser.rows if cells and cells[0].isdigit() and any(c.lower() in ("native", "webview") for c in cells) and not any(ID_RE.search(c) for c in cells)]
        refs = [cells[0] for cells in parser.rows if cells and cells[0].isdigit() and any("#REF!" in c for c in cells)]
        lines.append("- " + name + ": View가 있으나 유효 ID가 없는 행 " + str(len(unresolved)) + "개. 원본 행: " + (", ".join(c[0] for c in unresolved) or "없음") + ".")
        lines.append("- " + name + ": #REF! 표시 원본 행: " + (", ".join(refs) or "없음") + ".")
        by_id = {}
        for r in records:
            if r["source_file"] == name:
                by_id.setdefault(r["screen_id"], []).append(r["source_row"])
        for screen_id, rows in sorted(by_id.items()):
            if len(rows) > 1:
                lines.append("- " + name + ": 동일 ID " + screen_id + "가 원본 행 " + ", ".join(rows) + "에 존재합니다. 파일·행을 함께 보존하며 같은 화면인지 별도 확인합니다.")

def build():
    records, counts, hashes, file_ids = [], {}, {}, {}
    for name in SOURCES:
        path = IA / name
        data = path.read_bytes()
        hashes[name] = hashlib.sha256(data).hexdigest()
        parser = Rows()
        parser.feed(data.decode("utf-8-sig"))
        seen = set()
        for sequence, cells in enumerate(parser.rows, 1):
            source_row = cells[0] if cells and cells[0].isdigit() else "html-tr-" + str(sequence)
            for index, cell in enumerate(cells):
                for screen_id in sorted(set(ID_RE.findall(cell))):
                    seen.add(screen_id)
                    records.append({
                        "source_file": name, "source_row": source_row,
                        "screen_id": screen_id,
                        "raw_context": " | ".join(cells[1:index]),
                        "raw_after_id": " | ".join(cells[index + 1:]),
                        "source_sha256": hashes[name],
                    })
        counts[name] = len(seen)
        file_ids[name] = seen
    output = io.StringIO(newline="")
    fields = ["source_file", "source_row", "screen_id", "raw_context", "raw_after_id", "source_sha256"]
    writer = csv.DictWriter(output, fieldnames=fields, lineterminator="\n")
    writer.writeheader()
    writer.writerows(records)
    progress = (WORKFLOW / "progress.md").read_text(encoding="utf-8-sig")
    progress_ids = set(ID_RE.findall(progress))
    all_ids = set().union(*file_ids.values()) if file_ids else set()
    progress_only = sorted(progress_ids - all_ids)
    per_file = {}
    for name in SOURCES:
        ids = file_ids[name]
        unlisted = sorted(ids - progress_ids)
        families = {}
        for screen_id in unlisted:
            families[screen_id[:10]] = families.get(screen_id[:10], 0) + 1
        per_file[name] = (len(ids & progress_ids), unlisted, families)
    lines = [
        "# IA ID 자동 대조 결과", "",
        "로컬 HTML export의 셀 텍스트를 기계적으로 추출한 결과입니다. 고유 ID 수는 개발 화면 수·확정 범위·작업량이 아닙니다.",
        "병합 셀의 의미를 보정하거나 취소·승인 여부를 자동 판정하지 않습니다. 같은 ID라도 원본 파일·행을 함께 확인합니다.", "",
        "| 원본 파일 | 파일 내부 고유 ID 수 |", "| --- | --- |",
    ]
    lines.extend("| " + name + " | " + str(counts[name]) + " |" for name in SOURCES)
    lines += ["", "## progress 열거 ↔ 원본 파일 대조", "",
              "progress의 정확한 ID: " + str(len(progress_ids)) + "개. 와일드카드와 화면군 요약은 세지 않습니다.",
              "\"progress에 없는 ID\"는 원본에 있으나 progress에 행으로 없는 것입니다. APP·WEB 자료는 progress에서 화면군으로만 다루므로 전수가 열거되지 않습니다.", "",
              "| 원본 파일 | progress에 열거 | progress에 없는 ID | 없는 ID 화면군 |", "| --- | --- | --- | --- |"]
    for name in SOURCES:
        listed, unlisted, families = per_file[name]
        family_text = ", ".join(key + " " + str(families[key]) for key in sorted(families)) or "-"
        lines.append("| " + name + " | " + str(listed) + " | " + str(len(unlisted)) + " | " + family_text + " |")
    lines += ["", "## progress에만 있는 ID", "",
              "어느 원본 파일에서도 찾지 못한 ID입니다. 화면명·기능 확인 전까지 후보로 유지하고 삭제하지 않습니다.", "",
              "- " + (", ".join(progress_only) if progress_only else "없음"), "",
              "ID의 존재만 비교했으며 같은 ID의 화면명·기능·플랫폼 책임이 일치하는지는 별도 검토해야 합니다.", "",
              "## 교차 파일 ID", "",
              "APP·WEB·판매채널의 FO 접두어는 담당·공유 구현·동일 기능을 보증하지 않습니다.",
              "교차 파일의 동일 ID는 삭제하거나 합치지 않고 inventory에서 원본 파일·행을 확인합니다.", "",
              "## 원본 해시", "",
              "원본 갱신을 식별하기 위한 SHA-256입니다. 스크립트는 원본을 읽기만 합니다.", ""]
    lines.extend("- " + name + ": " + hashes[name] for name in SOURCES)
    platform_audit(lines, records)
    return output.getvalue(), "\n".join(lines) + "\n", counts, progress_only

if __name__ == "__main__":
    inventory, audit, counts, progress_only = build()
    (WORKFLOW / "ia-inventory.csv").write_text(inventory, encoding="utf-8-sig", newline="")
    (WORKFLOW / "ia-audit.md").write_text(audit, encoding="utf-8", newline="")
    print("IA inventory refreshed:", counts)
    print("IDs in progress but not in any IA source:", progress_only)
