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
    mo_progress = sorted(item for item in progress_ids if item.startswith("MO-"))
    missing = [item for item in mo_progress if item not in file_ids[SOURCES[0]]]
    po_progress = sorted(item for item in progress_ids if item.startswith("PO-"))
    po_missing = [item for item in po_progress if item not in file_ids["03.PO_IA.html"]]
    lines = [
        "# IA ID 자동 대조 결과", "",
        "로컬 HTML export의 셀 텍스트를 기계적으로 추출한 결과입니다. 고유 ID 수는 개발 화면 수·확정 범위·작업량이 아닙니다.",
        "병합 셀의 의미를 보정하거나 취소·승인 여부를 자동 판정하지 않습니다. 같은 ID라도 원본 파일·행을 함께 확인합니다.", "",
        "| 원본 파일 | 파일 내부 고유 ID 수 |", "| --- | --- |",
    ]
    lines.extend("| " + name + " | " + str(counts[name]) + " |" for name in SOURCES)
    lines += ["", "## 기존 progress와 MO 자료 대조", "",
              "progress의 정확한 MO ID: " + str(len(mo_progress)) + "개. 와일드카드는 제외.",
              "MO 자료에서 찾지 못한 ID: " + (", ".join(missing) if missing else "없음") + ".",
              "ID의 존재만 비교했으며 같은 ID의 화면명·기능·플랫폼 책임이 일치하는지는 별도 검토해야 합니다.", "",
              "## 기존 progress와 PO 자료 대조", "",
              "progress의 정확한 PO ID: " + str(len(po_progress)) + "개.",
              "PO 자료에서 찾지 못한 ID: " + (", ".join(po_missing) if po_missing else "없음") + ".", "",
              "## 교차 파일 ID", "",
              "APP·WEB·판매채널의 FO 접두어는 담당·공유 구현·동일 기능을 보증하지 않습니다.",
              "교차 파일의 동일 ID는 삭제하거나 합치지 않고 inventory에서 원본 파일·행을 확인합니다.", "",
              "## 원본 해시", "",
              "원본 갱신을 식별하기 위한 SHA-256입니다. 스크립트는 원본을 읽기만 합니다.", ""]
    lines.extend("- " + name + ": " + hashes[name] for name in SOURCES)
    return output.getvalue(), "\n".join(lines) + "\n", counts, missing

if __name__ == "__main__":
    inventory, audit, counts, missing = build()
    (WORKFLOW / "ia-inventory.csv").write_text(inventory, encoding="utf-8-sig", newline="")
    (WORKFLOW / "ia-audit.md").write_text(audit, encoding="utf-8", newline="")
    print("IA inventory refreshed:", counts)
    print("Unmatched MO candidates:", missing)
