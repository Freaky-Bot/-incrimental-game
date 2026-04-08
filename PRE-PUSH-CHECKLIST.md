Pre-push Checklist
==================

Follow this checklist before committing and pushing changes to the repository.
The goal: ensure `dist/` and `patch notes` are updated and the commit message contains the version at the front.

Checklist
- [ ] Save all changed files.
- [ ] Run the version bump script to increment the patch version:

  ```powershell
  powershell -ExecutionPolicy Bypass -File bump_version.ps1
  ```

  This updates `version.txt` with the new version (e.g., `0.0.11`).

- [ ] Update the patch notes in `dist/index.html` — add a top list item describing the change and include the new version.
  - The abbreviation format should be: `vX.Y.Z - short description`.

- [ ] Regenerate `dist/` if your change requires build steps (for this project, `dist/` files are the hosted site files; make sure they reflect current code).

- [ ] Stage the changed files, including `version.txt` and `dist/index.html`:

  ```bash
  git add version.txt dist/index.html PRE-PUSH-CHECKLIST.md
  ```

- [ ] Make sure pre-commit hooks are enabled locally (only needed once):

  ```bash
  git config core.hooksPath .githooks
  git update-index --add --chmod=+x .githooks/pre-commit
  ```

- [ ] Commit with the version at the start of the commit message, followed by a colon and short description:

  ```bash
  git commit -m "0.0.11: Short description of the change"
  ```

- [ ] Push to the remote:

  ```bash
  git push
  ```

Notes
- The repository contains a Git hook in `.githooks/pre-commit` that enforces that when code changes are staged, `version.txt` is updated and `dist/index.html` contains the version in its patch notes. Enable hooks with the `git config core.hooksPath .githooks` command above.
- If the hook blocks your commit, follow its error message: it will instruct you to bump the version and update the patch notes.
