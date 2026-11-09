# Claude handoff: publish Gather on GitHub

## User’s request

Build an open-source GitHub project with an installable gratitude app, centered on the days leading up to U.S. Thanksgiving and Thanksgiving Day. The user chose to hand publication to Claude. Do not require Codex to authenticate.

## What exists

This directory is the full project. The app is called **Gather** (a working name selected during implementation). It is a zero-dependency static PWA written in HTML, CSS, and JavaScript, MIT licensed. No paid service, API key, AI model, database, or backend is needed.

Features implemented: daily and Thanksgiving prompts, annual Thanksgiving countdown, local entries with categories, editing/deletion/search, PNG sharing/download, JSON backup/restore, installation guidance, manifest/icons/service worker. Source lives in `public/`. Open-source documentation, tests, CI, and GitHub Pages deployment workflow are included. `LAUNCH.md` contains the Thanksgiving slideshow campaign.

The app has NOT been published. No remote repository, Pages URL, signed native binaries, or app-store listing exists. This folder is not yet a Git repository. The original reference video and screenshot are NOT part of this project or licensed by it.

## Verify locally

Use Node 20+:

```sh
npm test
npm run check
npm start
```

Open http://localhost:4173. No package install is necessary.

Verification completed in Codex:
- Unit tests for Thanksgiving dates, year rollover, prompts, backup validation, and duplicate-safe merge.
- JavaScript syntax checks.
- Chrome UI: create an entry, edit its text/category, reload and verify persistence, search and verify the matching entry.

Still verify before calling the release production-ready:
- Visual review on mobile and desktop.
- PNG download/native share and JSON export/restore end to end. A browser download observation timed out, so these are implemented but not confirmed through the browser.
- Offline reload and installation on target devices after HTTPS deployment. iOS/Android/native installation has NOT been tested.
- Delete confirmations and cancellation behavior.

## Publish

The user is signed into GitHub in Chrome, shown as **bhavya-gx**. An old CLI login referenced **bhavya-in-sf** and was invalid. A CLI device login was attempted but did not complete; automatic approval rejected its broad authorization scopes. Do not assume CLI credentials work. Use the user’s preferred authenticated GitHub route; do not extract browser credentials or ask them to paste secrets into chat.

1. Review the project and verify no personal journal data or secrets are present.
2. Create a public repo under the user’s intended account, suggested name `gather-gratitude` (check availability).
3. Initialize Git on branch `main`, use the user’s real configured Git identity, commit this project, and push. Do not invent an author identity.
4. Configure GitHub Pages to use **GitHub Actions**. The included `.github/workflows/pages.yml` publishes only `public/`.
5. Run the workflow and verify the actual deployed HTTPS app URL. A likely project URL is `https://OWNER.github.io/REPO/`, but report the verified URL only.
6. Enable private vulnerability reporting. Configure main-branch protection/rulesets: PRs, tests, blocked force pushes/deletion, appropriate reviewer/bypass permissions for the actual maintainers. Do not claim these safeguards are enabled merely because documentation exists.
7. Add the verified live app URL to the README and repository website field. Add a link back to the source repo in the app’s about dialog once the actual URL is known.
8. Release v1.0.0 after verification. Attach a source archive and static-site archive. The included standalone `gather-site.zip` outside this directory, if supplied, is a static hosting package, NOT a native installer.
9. Give the user the GitHub source URL and live install URL, with short iPhone/Android install directions.

## Boundaries and product choices

- Installation is via the browser’s Add to Home Screen / Install app. Do not describe it as an APK, native iOS app, or app-store release.
- Local storage is plaintext, per browser/origin; no cloud sync or encryption. Backups are important. Keep these limitations visible.
- No trackers, remote fonts, external assets, or runtime dependencies are used.
- Do not put user journal data in the repository. The screenshots/sample text used in local UI tests were fictional and are stored only in that test browser profile, not in source.
- The Thanksgiving series should be gentle and inclusive of difficult holidays. No guaranteed wellness outcomes or manifestation promises.
