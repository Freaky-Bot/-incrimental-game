---
title: Always Add Version Numbers to Fixes or Features
applyTo: '*'
description: >
  Require that every fix or feature added to the project is accompanied by a version number, starting at 0.0.0 and incrementing with each change.
severity: required
---

# Always Add Version Numbers to Fixes or Features

## Rule
- Every code change that is a fix or a new feature must include a version number.
- Versioning starts at 0.0.0 and increments with each fix or feature (e.g., 0.0.1, 0.0.2, ...).
- The version number must be clearly documented in the commit message and, if applicable, in a CHANGELOG or version file.
- Do not skip or combine version increments for multiple changes.

## Rationale
This ensures clear tracking of project progress and makes it easy to identify when specific changes were introduced.

## Example Prompts
- "Add a new feature to the game (bump version)."
- "Fix a bug in the 3D rendering (increment version)."
- "Update the UI style (record version)."

## Related Customizations
- Enforce semantic versioning (major.minor.patch)
- Require CHANGELOG updates for each version
- Auto-tag versions in git
