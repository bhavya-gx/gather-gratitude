# Gather 🌿

**Keep a little good.** A private gratitude journal for everyday moments, the days leading up to U.S. Thanksgiving, and Thanksgiving Day.

An installable, offline-capable web app. No account, API keys, backend, dependencies, or paid services required. Open source under the MIT license.

## Install the app

**Live app: https://bhavya-gx.github.io/gather-gratitude/**

- **iPhone (Safari):** open the link, tap Share, then Add to Home Screen.
- **Android (Chrome):** open the link, tap the menu, then Install app (or Add to Home screen).
- **Desktop (Chrome/Edge):** click the install icon in the address bar.

This is a web app installed from the browser, not an App Store or APK release. Entries stay in your browser's local storage, unencrypted, so export backups regularly.

## Try it locally

Requires Node.js 20 or newer.

```sh
npm start
```

Open **http://localhost:4173**. No `npm install` is necessary.

```sh
npm test
npm run check
```

## What’s included

- Daily gratitude prompts, alternate prompts, and a Thanksgiving Day prompt.
- A Thanksgiving countdown calculated for the current/next U.S. holiday.
- Multiple entries per day, categories, editing, deletion, and collection search.
- PNG gratitude cards to download, or share through the device share sheet where supported. Long entries are shortened on cards; the original entry remains intact.
- JSON backup export and restore, with validation and duplicate protection.
- Responsive layouts, accessible form labels, keyboard focus styles, and reduced-motion support.
- A manifest, install icons, and service worker for offline use after initial loading.

## Install on a device

Visit the hosted **HTTPS** app first. Opening an HTML file directly is not sufficient.

- **iPhone/iPad:** Safari → Share → Add to Home Screen.
- **Android:** Chrome → menu → Install app / Add to Home screen.
- **Desktop:** use the browser’s install icon/menu where supported.

This release is a PWA, not an App Store, Play Store, APK, or macOS installer. Device installation and offline behavior require verification on the target device. No store listing or signing account is included.

## Deploy to GitHub Pages

1. Push this project to a public GitHub repository.
2. In repository **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Run the included **Deploy Gather** workflow (or push to `main`).
4. Open the URL shown on the successful deployment. That URL is also the device install link.

The workflow tests the project, publishes only `public/`, and deploys Pages. All app paths are relative so project subpaths work. Any static HTTPS host can serve `public/` without a build step.

## Privacy and data

Entries live in `localStorage` for this browser profile and origin. The app sends no journal entries to a backend and includes no analytics or third-party assets. Hosting providers may keep web request logs.

**Storage is not encrypted or synchronized.** People with access to the browser profile may access entries. Clearing site data, removing an app, using private browsing, or changing devices/origins can lose or separate data. Export backups regularly. Backups contain plaintext journal entries. Sharing a card deliberately discloses the text on that card.

No production user data is included in this repository. Never commit personal journal backups.

## Project structure

```text
public/          Entire deployable app
  model.js       Dates, prompts, backup validation
  app.js         UI, local persistence, cards, installation
  sw.js          Offline cache (bump CACHE for releases)
  icons/         Original app icons
server.mjs       Local development server (localhost only)
test/            Node built-in test suite
.github/         CI and Pages deployment
```

## Contribute

Read [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). The project favors private, local-first reflection, plain language, and small useful features over engagement pressure. Maintainers decide what enters the official project; forks are welcome under MIT.

## Release checklist

- Run tests and syntax checks.
- Verify save/edit/delete, backup/restore, search, and card export in a browser.
- Verify HTTPS installation on iOS Safari and Android Chrome, plus offline launch after a first visit.
- Bump the package version and service-worker cache name together.
- Export a backup before testing storage changes; preserve the `gather.entries.v1` schema or supply a migration.
- Review the deployment URL and publish a tagged GitHub release with source and static-site archives.

See [LAUNCH.md](LAUNCH.md) for the Thanksgiving content series.
