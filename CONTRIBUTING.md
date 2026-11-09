# Contributing to Gather

Thank you for helping people notice the good in their everyday lives.

## Direction

Gather is a private gratitude journal. Keep the entry flow simple, work offline, and support people whose holidays are difficult as well as joyful. Avoid claims that journaling cures illness or guarantees life outcomes. No analytics, cloud sync, advertising, or external scripts without an explicit design discussion and privacy review.

## Workflow

1. Open an issue for significant changes; never include private entries or backup files.
2. Fork the repository and create a branch.
3. Make a focused change. Run `npm test` and `npm run check`.
4. For UI changes, test mobile and desktop layouts and keyboard access. For data changes, test backup restore and explain migration behavior.
5. Open a pull request describing the problem, change, validation, and data implications. Include screenshots for visible changes.

Contributions are proposed through pull requests. Do not push directly to `main`. Maintainers review the difference, request changes as needed, and decide whether to merge. Keep author attribution in commits; list collaborators in the PR. Contributing does not transfer your copyright; contributions are provided under this repository’s MIT license. Only submit work you have the right to license.

## Repository setup for maintainers

After publishing, enable a ruleset for `main`: require pull requests, require passing test checks, block force pushes and branch deletion, and restrict bypass permissions. Choose reviewers from actual trusted collaborators. Do not add a fictitious CODEOWNERS identity. Keep repository write permissions limited and use GitHub account two-factor authentication.

Review service-worker behavior and data compatibility before releases. Never auto-merge untrusted code or run contributor code with repository secrets. Official releases and their source commits should be recorded with Git tags. Keep a separate repository backup.
