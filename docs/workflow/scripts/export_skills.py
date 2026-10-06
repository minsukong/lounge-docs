"""Export tool-neutral project skills; preview by default and protect user edits."""
import argparse
import hashlib
import json
import os
from pathlib import Path

SOURCE = Path(__file__).resolve().parents[3]
LOCATIONS = {"cline": ".cline/skills", "claude-code": ".claude/skills",
             "codex": ".agents/skills", "manual": "docs/workflow/skills"}
OWNER = "lounge-workflow-export"

def digest(content):
    return hashlib.sha256(content).hexdigest()

def plan(workspace, agent):
    workspace = workspace.resolve()
    if not workspace.is_dir():
        raise ValueError("Workspace must already exist")
    sources = sorted((SOURCE / "docs/workflow/skills").glob("lounge-*/SKILL.md"))
    if len(sources) != 9:
        raise ValueError("Expected nine canonical skills")
    desired = {}
    for source in sources:
        rel = LOCATIONS[agent] + "/" + source.parent.name + "/SKILL.md"
        desired[rel] = source.read_bytes()
    try:
        docs_root = Path(os.path.relpath(SOURCE, workspace)).as_posix()
    except ValueError:
        docs_root = SOURCE.as_posix()
    config = {"docs_root": docs_root, "entry": "docs/workflow/AGENTS.md", "skills_source": "docs/workflow/skills"}
    desired["lounge-workflow.json"] = (json.dumps(config, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    manifest_path = workspace / ".lounge-skills-export.json"
    previous = {}
    if manifest_path.exists():
        previous = json.loads(manifest_path.read_text(encoding="utf-8"))
        if previous.get("owner") != OWNER or previous.get("version") != 1:
            raise ValueError("Existing export manifest is not recognized")
    managed = dict(previous.get("managed", {}))
    changes = []
    for rel, content in desired.items():
        dest = workspace / rel
        dest.resolve().relative_to(workspace)
        if dest.exists():
            current = dest.read_bytes()
            if current != content and digest(current) != managed.get(rel):
                raise ValueError("Existing user file will not be overwritten: " + str(dest))
            if current == content:
                managed[rel] = digest(content)
                continue
        changes.append((dest, content, dest.read_bytes() if dest.exists() else None))
        managed[rel] = digest(content)
    manifest = {"owner": OWNER, "version": 1, "managed": managed}
    content = (json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True) + "\n").encode("utf-8")
    if not manifest_path.exists() or manifest_path.read_bytes() != content:
        changes.append((manifest_path, content, manifest_path.read_bytes() if manifest_path.exists() else None))
    return changes

def main(forced_agent=None):
    parser = argparse.ArgumentParser()
    parser.add_argument("--workspace", required=True, type=Path)
    if forced_agent:
        parser.set_defaults(agent=forced_agent)
    else:
        parser.add_argument("--agent", required=True, choices=LOCATIONS)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()
    try:
        changes = plan(args.workspace, args.agent)
        print("Mode:", "APPLY" if args.apply else "PREVIEW (no writes)", "| Agent:", args.agent)
        for dest, content, before in changes:
            print("Update:" if before is not None else "Create:", dest, digest(content))
        if args.apply:
            for dest, content, before in changes:
                current = dest.read_bytes() if dest.exists() else None
                if current != before:
                    raise ValueError("File changed after planning: " + str(dest))
            for dest, content, before in changes:
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_bytes(content)
        print("Changed files:", len(changes))
        return 0
    except (OSError, ValueError) as error:
        print(str(error))
        return 1

if __name__ == "__main__":
    raise SystemExit(main())
