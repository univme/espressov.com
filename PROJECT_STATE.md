# Project state — 2026-11-17

## Objective
Rebuild espressov.com with a strong Espresso Ventures business homepage and independently compelling Naples Tech & Espresso landing page. Integrate Luma cleanly and preserve or improve the Nertia baseline.

## Decisions
- USER-PROVIDED clarification: no Wix. Standalone Next.js/React/TypeScript, prepared for Vercel; original archive is content/image reference only.
- USER-PROVIDED: RSM master guide is the minimum framework. Next.js/React/TypeScript source follows its default stack.
- USER-PROVIDED: business and community pages should each be strong enough to lead as a website.
- USER-PROVIDED: reuse original photos/content; appropriate AI imagery permitted. Current implementation uses authentic original photography.
- VERIFIED: uploaded archive has Luma links only; live public calendar exposes its ID. Embed probe returned 403.
- ASSUMED: existing visual identity is retained while introducing paper/teal editorial styling.
- USER-PROVIDED: partners@espressov.com is the contact address; implemented visible email and mailto links.
- UNKNOWN: production reviewer, analytics configuration and full crawler owner preferences.

## Implemented
Eight pages, responsive stylesheet, click-to-load Luma calendar iframe and persistent direct links, optimized original WebP images, semantic headings, page metadata, Organization JSON-LD, preview noindex, production-mode robots/sitemap, llms.txt and 404.

## Verification
Build, TypeScript, production-dependency audit and rendered HTML checks run. See AUDIT_REPORT.md for scope. Managed preview failed on relay readiness; no browser, screen reader, Lighthouse or registration/delivery test completed.

## Next
1. Review the business and community page design in a working local browser.
2. Verify or replace Luma embed using the owner's official snippet.
3. Verify the email-app journey and inbox readiness before domain cutover. A hosted form is not implemented.
4. Complete all release-gate checks, including new Nertia audit.
5. Obtain specific production authorization. No deployment or DNS changes performed.

## GitHub handoff — 2026-11-17
User authorized pushing to GitHub. Repository univme/espressov.com was inspected (README only); admin/push access confirmed. Rebuild submitted on review branch `rebuild/espresso-ventures`. Production main is preserved. No Vercel project matching EspressoV was found in the selected account; espressov.com was not found as a registered domain in that account. These observations do not establish registrar/DNS access elsewhere. No deployment, domain connection or DNS write authorized/performed.

## Sample Nertia and theme update — 2026-11-17
User supplied the deployed sample URL and report: performance 98, accessibility 100, best practices 100, SEO 69. Live HTTP evidence confirms intentional sample noindex/header/crawler blocks and empty sitemap. User confirmed this is a sample; retain protections and ensure production-mode SEO code is ready. Added shared indexing validation, canonical-aware llms.txt, responsive image optimization, safe JSON-LD escaping and production/preview output checks. Added requested persistent dark-mode option with tested core contrast pairs. Changes prepared for GitHub review; no production indexing, Vercel settings or DNS changed. See docs/NERTIA_REVIEW.md and AUDIT_REPORT.md.
