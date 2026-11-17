# Espresso Ventures / Naples Tech & Espresso

Standalone Next.js + React + TypeScript website rebuild, prepared for Vercel. No Wix runtime, hosting, SDK, forms or asset requests are used. The original archive is reference material only. **Source submitted for review; not deployed.** Two independent landing pages give the business and its community distinct paths to action.

## Run locally

Use Node 24 LTS and npm (the build was tested with Node 24.22.1).

```sh
npm ci
npm run dev -- --port 3000
```

Open http://localhost:3000. Preview metadata intentionally prevents indexing. The small dev wrapper also accepts the managed preview tool's `--host` and `--strictPort` flags and translates them to Next's CLI.

```sh
npm run build
npm run start -- --port 3000
npm run typecheck
python scripts/check-output.py
npm audit --omit=dev
```

The output check expects a default, non-indexable build. It parses rendered HTML and checks all eight content routes, metadata, image references, local navigation and preview robots.

## Pages

- `/`: Espresso Ventures business landing page.
- `/naplestechmeetup`: standalone Naples Tech & Espresso community landing page.
- `/entrepreneurialjourneys`: founder storytelling.
- `/pricing-plans/expertondemand`: strategic advisory.
- `/technologydelegations`: trade missions.
- `/realestateinnovation`: real estate innovation and historical delegation context.
- `/about`, `/contact`, custom 404.

## Luma integration

The archive contains two links to the calendar, **no calendar embed code**. Its live public page identifies calendar `cal-fgxAGrnJgLIIqdi`. The integration uses Luma's calendar-embed URL structure. The embed HTTP probe returned 403, and browser testing was unavailable: **do not mark the embedded integration verified**.

The community page shows a branded calendar introduction. “Show live calendar” mounts the iframe only on request, retaining a permanent direct link. No SDK, API key, event prices, duplicated dates, fake availability or purchase simulation. Luma handles registration. The site does not claim a registration completed, nor load analytics. Check the embed in a real browser, including narrow layout and keyboard, before launch. If the host blocks the embed, obtain the official snippet from Calendar → Settings → Embed and replace `src` in `components/Calendar.tsx`.

## Contact destination

The user provided `partners@espressov.com`. Contact and footer links use `mailto:partners@espressov.com`; the email address is also readable and copyable. The contact page explains that the link opens the visitor's email app. Organization JSON-LD and the factual page index use the same address. The temporary Wix fallback was removed, resolving the same-domain cutover loop.

This is a direct email contact path, not a hosted form. Sending depends on the visitor's email client. Inbox delivery and browser-to-email-app handoff are NOT TESTED; no email was sent. If a hosted form is later requested, implement and test its backend, spam protection, error handling and privacy requirements separately.

## Production preparation

1. Resolve blockers in AUDIT_REPORT.md; obtain content/brand review.
2. Verify the email-app contact journey and inbox readiness. If adding a hosted form, approve its delivery integration, privacy language and abuse protection.
3. Verify Luma calendar embedding, direct event registration and external policies.
4. Review all current Wix URLs/sitemaps and configure redirects for any missing or changed paths. Clean paths found in the archive are retained. No domain changes have been made.
5. Preserve current crawler preferences unless the owner changes them. `INDEXABLE=true` reproduces the original robots groups. Verify edge access independently.
6. After authorization, set `SITE_URL=https://www.espressov.com` and `INDEXABLE=true` **before building**. Prerendered metadata, robots and sitemap depend on build environment. Never activate indexing for public staging.
7. Import source into the owner's Vercel project, set environment variables, run build, obtain release authorization and deploy. No Vercel project/account was created.
8. Verify actual response headers, HTTPS, canonical routing, 404, sitemap, schema, keyboard and screen reader, mobile layout, lab performance and Nertia. Search Console/Bing/analytics have not been accessed.

`next.config.ts` includes basic security headers. Evaluate a nonce/hash-based CSP and HSTS on the actual HTTPS deployment; do not blindly block Next hydration or the Luma frame. A privacy notice must match the final vendor/data setup; no legal assertions or invented owner contact are included.

## Rollback

The existing production site remains unchanged. Retain a backup and the current domain configuration until the standalone replacement passes review. Roll back a future Vercel release to the last verified deployment and reverse only the separately approved DNS change if necessary.

## Project records

Read PROJECT_STATE.md, CHANGELOG.md, AUDIT_REPORT.md and docs/BRAND_FACTS.md. The complete internal agency guide remains in the originating workspace; its project-scoped requirements are recorded in AGENTS.md and the audit records. No global machine settings were changed.
