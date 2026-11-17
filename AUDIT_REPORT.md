# RSM Five-Domain Audit — Espresso Ventures — 2026-11-17

- Environment: local managed Linux / Node 24.22.1 / npm 11.9.0. No repository/branch existed; original archive retained without mutation. No commit claimed.
- Scope: eight content routes plus layout, custom 404, robots, sitemap and Luma component.
- Tools: Next build/TypeScript, npm audit, Python HTMLParser and JSON parser, source inspection and contrast calculations. Browser QA unavailable.
- Results: Security WARN | Accessibility WARN | SEO/AEO/GEO WARN | Performance WARN | UX/conversion WARN.
- These statuses describe partial verification; no whole-domain PASS or production-readiness claim.

| Domain | Check | Method/evidence | Status | Severity / next action |
|---|---|---|---|---|
| Security | Dependency vulnerabilities | `npm audit --omit=dev --json`: 0 vulnerabilities on 2026-11-17 | PASS | Audit scope is installed production dependencies, not an application penetration test |
| Security | Secret/data exposure | Source inspection: no credentials, no database writes, no contact collection, no added tracker | PASS | Source scope only |
| Security | HTTPS, CSP, HSTS and deployed headers | Header configuration inspected; production HTTPS/headers untested | NOT TESTED | HIGH: verify actual deployment; design appropriate CSP/HSTS with Next and Luma |
| Security | Privacy/vendor behavior | Click-to-load Luma; direct links retained; no analytics installed | WARN | Review Luma's real behavior and privacy notices in deployed browser context |
| Accessibility | Semantics/labels | Eight generated pages: one main/H1; all image alt/size attributes; skip navigation; iframe title | PASS | Source/output inspection; image descriptions reviewed against original photographs |
| Accessibility | Core text token contrast | Computed: ink/paper 12.96:1; muted/paper 5.60:1; teal/paper 4.84:1; white/teal 5.46:1; light/dark teal 6.85:1 | PASS | Token pairs only; not a rendered-page accessibility result |
| Accessibility | Keyboard, screen reader, zoom, targets and third-party iframe | Preview relay failed; no automation browser available for this preview | NOT TESTED | HIGH: manual desktop/mobile and WCAG 2.2 AA checks remain |
| SEO/AEO/GEO | Titles, descriptions, canonical, H1 | `python scripts/check-output.py` checks all eight generated HTML pages | PASS | Factual metadata and canonical paths inspected |
| SEO/AEO/GEO | Organization JSON-LD parsing | Python JSON parse of generated JSON-LD; visible identity reviewed | PASS | JSON syntax/content consistency only; external schema/rich-result validator NOT TESTED |
| SEO/AEO/GEO | Preview indexing prevention | Generated robots disallow all; generated meta noindex; sitemap omits routes | PASS | Production activation must be a separate approved rebuild |
| SEO/AEO/GEO | Production crawler access and full URL migration | Clean archived paths retained; current full sitemap/edge access/Search Console not audited | WARN | HIGH: verify all old URLs and production status/redirects before cutover |
| Performance | Original asset compression | Three source photos and logo ~12.8 MB replaced with five optimized responsive assets totaling 666,160 bytes | PASS | Asset size evidence, not measured loading improvement; full source photo sizes counted once |
| Performance | Rendering/scripts | Eight content routes prerendered; system fonts, one small client calendar component, user-activated third-party frame | PASS | Build/source evidence only |
| Performance | Lighthouse, CWV, Nertia | No working browser preview or deployed replacement | NOT TESTED | HIGH: remeasure; 84/92/99 are old-site overall/SEO/accessibility scores |
| UX/conversion | Local navigation/assets | HTMLParser checks all local page links and image references | PASS | Built-HTML artifact checks, not click testing |
| UX/conversion | Luma calendar/registration | Original archive links verified; public calendar ID identified; candidate embed probe returned HTTP 403 | WARN | HIGH: test iframe rendering, keyboard and real authorized registration; direct calendar fallback present |
| UX/conversion | Contact delivery | User-provided partners@espressov.com; visible mailto links in contact/footer, JSON-LD email matches | WARN | Wix cutover loop resolved; email-app handoff/inbox delivery NOT TESTED; no hosted form |
| UX/conversion | Visual responsive design | CSS breakpoints/focus/reduced-motion inspected | WARN | HIGH: browser inspection at mobile/tablet/desktop remains |

## Checks and exact results

- `npm run build`: PASS; Next.js 16.4.6 compiled and prerendered routes. Final build rerun after final copy/formatting changes.
- `npm run typecheck`: PASS; `tsc --noEmit`.
- `python scripts/check-output.py`: PASS; eight pages, metadata, headings, landmarks, images, navigation, preview noindex and JSON parsing.
- `npm audit --omit=dev --json`: PASS; no reported vulnerabilities at run time.
- Lint: N/A; no lint configuration existed, none added just to duplicate TypeScript checks.
- Managed preview first failed because preview daemon passed Vite-style CLI flags; added a small Next CLI flag adapter. Second start failed: `relay could not open browser port 4173: timed out waiting for relay readiness`. `sites-preview status`: stopped.
- No browser inspection, screenshot, mobile simulation, screen reader, Lighthouse, external schema validator or real delivery/registration completion claimed.

## Release blockers

1. Verify Luma embed in a real browser or obtain the official owner-generated snippet. HTTP 403 is an observed response, not proof that the calendar is unavailable to users.
2. Verify email-app handoff and inbox readiness for the user-approved partners@espressov.com address. Wix fallback loop resolved; hosted form not implemented.
3. Complete browser visual/accessibility and conversion testing, production security header/HTTPS checks, full URL migration review and new Nertia/performance audit.
4. Owner-approved final copy, prices (currently omitted), policy/contact language, crawler and indexing settings.
5. Specific production authorization and a rollback plan.

## GitHub delivery

User authorized GitHub push on 2026-11-17. Repository `univme/espressov.com` inspected before writing; only README existed. Source and project audit records prepared for a review branch. Internal agency master guide, build output, dependencies and caches excluded from public submission. No application changes since the passing build/contact retest.

## Approval status
NOT REQUESTED for production. No live deployment, DNS modification, spend, analytics installation or global Codex policy installation occurred.

## Contact update — 2026-11-17
- USER-PROVIDED: partners@espressov.com.
- Security/privacy: source inspection; no secrets, data collection, dependencies or outbound message added. PASS for this scoped change.
- Accessibility: readable address and descriptive native links, existing focus styles preserved. PASS source inspection; browser/email-app handoff NOT TESTED.
- SEO/AEO/GEO: shared contact, visible footer, Organization email and llms.txt agree. PASS source/output inspection.
- Performance: no new packages, media or client-side code. PASS source inspection.
- UX/conversion: temporary Wix destination removed; address is copyable and opens the visitor's mail app. PASS rendered-link inspection; inbox delivery NOT TESTED. No message sent.
- Production build, TypeScript and generated-page checks rerun after the change; exact outcomes recorded in execution results.

## Platform clarification and contact retest
- USER-PROVIDED: no Wix runtime, hosting, SDK or forms. Original archive is reference material only.
- `npm run build`: PASS, including TypeScript and static page generation after email changes.
- `python scripts/check-output.py`: PASS for all eight pages.
- Rendered link/JSON-LD inspection: PASS for partners@espressov.com on all eight pages; no Wix, Wixstatic or Parastorage resource URLs found.
- Inbox delivery and email-app/browser handoff remain NOT TESTED. No email sent.

## Dark mode and Nertia-readiness update — 2026-11-17

Scope: eight pages, shared layout/theme, photos, indexing configuration, generated llms.txt. Baseline is the user's new sample report: performance 98, accessibility 100, best practices 100, SEO 69; these are not new post-change measurements.

| Domain | Evidence/method | Status | Limits |
|---|---|---|---|
| Security/privacy | Diff inspection: no new secrets, third-party scripts, tracking, dependencies, network writes or collected personal data; allowlisted local theme preference and canonical URL validation; correctly escaped JSON-LD | PASS (scoped source review) | Not a full penetration test; strict CSP not introduced; future CSP must allow static theme bootstrap |
| Accessibility | Native named theme toggle with aria-pressed, 44px minimum height, focus styles, reduced-motion retained; 18 text/background pairs tested ≥4.5:1 in both themes; alt text retained | PASS (source/calculation scope) | Rendered contrast, keyboard, screen reader and full reflow NOT TESTED for this change |
| SEO/AEO/GEO | Production build plus eight-route HTML/robots/sitemap/header checks; forced-preview guard build/check; canonical-aware identity/llms.txt; missing SITE_URL rejection | PASS (built-artifact scope) | Actual search indexing/AI citations not tested or guaranteed; sample intentionally blocked |
| Performance | Explicit responsive Next Image sizes, eager high-priority hero/lazy supporting photos; no new dependencies; system fonts and deferred Luma retained | PASS (source/build scope) | New Lighthouse/Nertia and optimizer image-byte measurements NOT TESTED; cannot claim 100 |
| UX/conversion | Theme bootstrap simulations: stored light/dark, system default, invalid or blocked storage; output confirms named toggle; email and calendar destinations preserved | PASS (simulation/source scope) | Browser toggle/reload, third-party Luma and email delivery NOT TESTED |

Production and preview builds include successful TypeScript checks. Updated `scripts/check-output.py` validates both modes. `node scripts/check-theme.mjs` validates bootstrap cases and core contrast pairs; future live testing must cover both palettes. Source changes submitted on a review branch; no production release, new indexing policy activation, DNS or live account writes performed. All original live-integration/manual-QA release blockers remain applicable. No request for production release approval at this stage.
