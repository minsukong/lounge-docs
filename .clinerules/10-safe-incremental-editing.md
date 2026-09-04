# Safe Incremental Editing

- Continue the current task, but do not rewrite an entire file in one operation.
- Split changes into small, focused edits by file and by section.
- Modify only one file per tool call.
- Prefer targeted replacements or patches over emitting a complete file.
- Keep explanations short and invoke the editing tool promptly.
- For large HTML, Markdown, JSON, or generated files, edit one bounded section at a time.
- If a change would require a very large tool payload, break it into multiple sequential edits.
- After each edit, verify the affected section before continuing.

## Resume and Edit-Failure Recovery

- After context compaction, interruption, retry, or task resumption, inspect the current target file before planning or editing. Treat the actual file as the source of truth.
- Identify which sections and files are already complete, and do not recreate or modify completed work unless verification finds a specific defect.
- Do not reread templates or broad reference documents until the current target state has been checked.
- Never retry the same failed edit with the same arguments or strategy more than once.
- If an edit fails because text was not found, multiple matches were found, or `old_text` was missing, read only the relevant bounded section once and construct a new edit using exact current text and a unique anchor.
- If two edit attempts on the same target fail, stop editing that target. Explain the exact error and either use a materially different safe approach or ask the user how to proceed.
- Do not alternate indefinitely between reading and editing. Maintain a checklist of completed and remaining sections and advance only to the next incomplete item.
- Verify each completed edit once. Do not repeatedly reread the same file tail or section unless a later edit could have changed it.
