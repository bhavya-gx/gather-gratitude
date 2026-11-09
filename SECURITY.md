# Security and privacy

Gather 1.x stores plaintext journal entries in browser localStorage. It is not a secure vault. Shared devices and browser extensions can expose entries. Exports and shared cards contain personal text. The app has no backend, authentication, or analytics.

## Reporting

Do not post private entries, backups, credentials, or exploit details in a public issue. Use GitHub’s **Security → Report a vulnerability** when private reporting is enabled. If it is unavailable, open a minimal issue asking a maintainer for a private reporting channel without including the vulnerability details. Maintainers should enable private vulnerability reporting before launch.

## Implementation expectations

Render user entries as text, never HTML. Validate imported backups. No remote scripts or fonts. Contributions must not transmit journal text or silently change storage formats. An open-source license is not a security review: inspect contributions before merging or publishing.
