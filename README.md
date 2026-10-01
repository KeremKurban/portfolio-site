# Kerem Kurban — portfolio site

Self-hosted replacement for `keremkurban.created.app`. A static Next.js site: no server and
no create.xyz dependency. It can be hosted on any static host once there is a domain.

The content is carried over unchanged from the create.xyz export (`src/app/page.jsx`).
CVs, posters and most images are served from
[KeremKurban/portfolio](https://github.com/KeremKurban/portfolio), which stays the storage repo.

## Run it locally

Requires Node 20+.

```bash
npm install
npm run dev            # live-reloading dev server on http://localhost:3000
```

To preview exactly what would be deployed:

```bash
npm run build          # static export into out/
npm run serve          # http://localhost:4321
```

## Where things live

| What | File |
| --- | --- |
| Name, intro, email, CV link, photo | `src/content/site.ts` |
| Experience and certifications | `src/content/experience.ts` |
| Projects and project filter tags | `src/content/projects.ts` |
| Publications and posters | `src/content/publications.ts` |
| Links into the portfolio storage repo | `src/lib/assets.ts` (`repoAsset()`) |

To add a CV, poster or image: commit it to `KeremKurban/portfolio`, then reference it with
`repoAsset("path/in/repo")`. Pass a commit hash as the second argument to pin a version.

### Images still on create.xyz's CDN

Eight images (profile photo, 3 project images, 4 poster images) are still loaded from
`ucarecdn.com`, create.xyz's upload CDN, via `legacyCdn()`. They may stop loading once the
create.xyz account lapses. Copy them into the portfolio repo and swap `legacyCdn(...)` for
`repoAsset(...)`. If an image fails to load, the site shows a placeholder, never a broken image.

## Tests

```bash
npm test               # builds, then runs all Playwright suites
```

- `tests/e2e.spec.ts`: navigation, mobile menu, filters, dialogs, image fallbacks, no
  horizontal scroll and no console errors, on desktop and on a Pixel 7 viewport.
- `tests/a11y.spec.ts`: axe scan (WCAG 2.1 AA) of the page and of an open dialog, plus the
  skip link.
- `tests/content.spec.ts`: content invariants. Every portfolio-repo asset exists, no project
  links one of your forks as your own work, and links use https. External link checks run
  with `CHECK_LINKS=1`.

External requests are stubbed in browser tests, so they run offline and deterministically.
CI (`.github/workflows/ci.yml`) runs typecheck, build and tests on every push and PR. A
separate, non-blocking job checks external links.

## Deployment (GitHub Pages → keremkurban.site)

Every push to `main` runs the tests and, if they pass, deploys `out/` to GitHub Pages
(`.github/workflows/ci.yml`). The build uses `NEXT_PUBLIC_SITE_URL=https://keremkurban.site`,
which turns on search indexing, `robots.txt` and `sitemap.xml`. Local builds without it stay
`noindex`.

One-time setup:

1. On GitHub: **Settings → Pages → Source: GitHub Actions**, then **Custom domain:
   `keremkurban.site`**, then tick **Enforce HTTPS** once the certificate is issued.
2. At Namecheap: **Domain List → Manage → Advanced DNS**. Delete the default parking
   records, then add:

   | Type | Host | Value |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | `keremkurban.github.io.` |

DNS takes minutes to a few hours to propagate. The HTTPS certificate follows shortly after.
