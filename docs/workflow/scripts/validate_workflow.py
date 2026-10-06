"""Validate local links, skill metadata, encoding and derived IA evidence."""
import csv
import hashlib
import re
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[3]
WF = ROOT / "docs" / "workflow"

def validate():
    errors = []
    files = list(WF.glob("*.md"))
    files += list((WF / "skills").glob("lounge-*/SKILL.md"))
    files += [ROOT / "AGENTS.md", ROOT / "docs/AGENTS.md", ROOT / "work/AGENTS.md", WF / "skills/AGENTS.md", ROOT / "docs/guides/workflow/index.md", WF / "scripts/AGENTS.md"]
    skills = list((WF / "skills").glob("lounge-*/SKILL.md"))
    if len(skills) != 9:
        errors.append("Expected nine canonical skills")
    for canonical in skills:
        if ".clinerules/" in canonical.read_text(encoding="utf-8"):
            errors.append("Tool-specific discovery dependency in canonical skill")
    for path in files:
        text = path.read_text(encoding="utf-8-sig")
        if "\ufffd" in text:
            errors.append("Replacement character: " + str(path))
        if any(0x4e00 <= ord(char) <= 0x9fff for char in text):
            errors.append("Unexpected CJK ideograph: " + str(path))
        if any(line.rstrip() != line for line in text.splitlines()):
            errors.append("Trailing whitespace: " + str(path))
        if path.name == "SKILL.md":
            match = re.match(r"---\nname: ([a-z0-9-]+)\ndescription: ([^\n]+)\n---", text)
            if not match or match.group(1) != path.parent.name:
                errors.append("Invalid skill metadata: " + str(path))
            elif len(match.group(2)) > 1024:
                errors.append("Description too long: " + str(path))
        prose = re.sub(r"(?ms)^\x60\x60\x60.*?^\x60\x60\x60[^\n]*", "", text)
        for link in re.findall(r"\]\(([^)]+)\)", prose):
            if "://" in link or link.startswith("#") or link.startswith("mailto:"):
                continue
            relative = unquote(link.split("#")[0])
            if relative and not (path.parent / relative).exists():
                errors.append("Missing link: " + str(path) + " -> " + relative)
    inventory = list(csv.DictReader((WF / "ia-inventory.csv").open(encoding="utf-8-sig", newline="")))
    keys = set()
    for row in inventory:
        key = (row["source_file"], row["source_row"], row["screen_id"])
        if key in keys:
            errors.append("Duplicate source key: " + repr(key))
        keys.add(key)
        source = ROOT / "work" / "더라운지_IA FO_v0.2.xlsx" / row["source_file"]
        if hashlib.sha256(source.read_bytes()).hexdigest() != row["source_sha256"]:
            errors.append("IA source changed since extraction: " + row["source_file"])
    if not inventory:
        errors.append("Empty IA inventory")
    return errors, len(files), len(inventory)

if __name__ == "__main__":
    errors, documents, rows = validate()
    print("Markdown files checked:", documents, "| IA records:", rows)
    if errors:
        print("\n".join(sorted(set(errors))))
        raise SystemExit(1)
    print("PASS: local links, metadata, encoding, whitespace, IA source keys and hashes")
