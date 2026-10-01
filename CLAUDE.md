# Handoff: portfolio site (keremkurban.site)

Started in a Claude Code web session that could not push to GitHub or reach create.xyz.
This file gives a local session the context to finish the job.

## What this is

Self-hosted replacement for `keremkurban.created.app` (create.xyz, now paywalled). A static
Next.js export: `npm run build` writes plain HTML/CSS/JS to `out/`. CVs, posters and images
are served from the storage repo `KeremKurban/portfolio` via `repoAsset()` in
`src/lib/assets.ts`. See README.md for structure, tests and DNS.

Branches:
- `main`: content copied unchanged from the create.xyz export. This is what deploys.
- `extended-content-draft`: content drafted from Kerem's 2026 CVs and GitHub (Wipro and
  Neptune.ai roles, 17 projects with roles stated, education, skills, 2026 certifications).
  Not approved. Copy pieces into `main` only when Kerem picks them.

## Rules from Kerem

- Do not add or change site content without his explicit choice. He decides which
  projects and jobs appear.
- Never credit a fork as his own work. `tests/content.spec.ts` lists his forks; link
  organisation repos at their upstream and state his role. (Earlier mistake:
  `neo4j-gnn-llm-example` is Neo4j's work, not his.)
- Keep `KeremKurban/portfolio` as storage for CVs, posters and images.

## Next steps

1. **Deploy** (Kerem has approved GitHub Pages and owns `keremkurban.site` at Namecheap).
   Ask him before going live whether to ship `main` as-is (see the open content issues
   below):
   ```
   gh repo create KeremKurban/portfolio-site --public --source=. --remote=origin
   gh api -X POST repos/KeremKurban/portfolio-site/pages -f build_type=workflow
   gh api -X PUT repos/KeremKurban/portfolio-site/pages -f cname=keremkurban.site
   git push -u origin main extended-content-draft
   gh run watch
   ```
   Kerem adds the DNS records at Namecheap himself (README.md → Deployment). Once
   `dig keremkurban.site +short` shows the 185.199.108-111.153 addresses, turn on HTTPS:
   `gh api -X PUT repos/KeremKurban/portfolio-site/pages -F https_enforced=true`.

2. **Migrate the create.xyz images.** The 8 `legacyCdn(...)` URLs on `ucarecdn.com`
   (profile photo, 3 project images, 4 posters) may vanish when the create.xyz account
   lapses. The web session could not reach that CDN; a local one can. With Kerem's OK:
   download them, commit them to `KeremKurban/portfolio` (e.g. under `images/`), then
   swap `legacyCdn(...)` for `repoAsset(...)` and run the tests.

3. **Open content issues on `main`.** These are inherited from create.xyz; ask Kerem
   which to fix:
   - CA1 project links `github.com/BlueBrain/rat_ca1_model_code`, which is a 404
     (alternatives: the PLOS Biology DOI 10.1371/journal.pbio.3002861, hippocampushub.eu).
   - SfN 2024 poster venue says San Diego; it was Chicago.
   - Network Neuroscience paper is listed as a 2024 bioRxiv preprint; it is published as
     Network Neuroscience 9(1):207–236 (2025), doi 10.1162/netn_a_00429.
   - The CA1 preprint is now published in PLOS Biology; its author list "Romani, A., et
     al." hides Kerem's name.
   - "Freelancer, 01/2025 – Ongoing" is outdated. The CV link points to May 2025
     (newest on portfolio main: `resumes/CV_Kerem_Kurban-062026.pdf`). The email is
     hotmail; his recent CVs use keremkurban@proton.me.
   - Typos: "graph-heory", "32th".

4. **Pending patch for `KeremKurban/portfolio`** (separate repo, from the web session):
   3 commits adding the 2026-09 CV PDF and `.DS_Store` cleanup; Kerem has the bundle and
   its README. Only apply it if he asks.

## Commands

```
npm install
npm run dev        # http://localhost:3000
npm test           # build + Playwright (content, desktop, mobile, axe)
npm run typecheck
```
