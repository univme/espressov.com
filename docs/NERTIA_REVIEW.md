# Nertia review and SEO readiness — 2026-11-17

## Evidence supplied and observed

| Category | Original site report | Vercel sample report |
|---|---:|---:|
| Overall health | 84 | 87 |
| Performance | 69 | 98 |
| SEO | 92 | 69 |
| Accessibility | 99 | 100 |
| Best practices | 58 | 100 |
| Technical SEO | 94 | 80 |
| AI search readiness automated checks | 89% | 45% |
| LCP | 6.1 seconds | 1.2 seconds |
| Total blocking time | 350 milliseconds | 20 milliseconds |
| CLS | 0 | 0 |

These are user-supplied scanner observations, not results from this change. The newer report covers https://espressov-com.vercel.app. Live HTTP checks confirmed: meta robots noindex; X-Robots-Tag noindex, nofollow; robots.txt Disallow: /; empty XML sitemap. All are intentional sample restrictions. The user clarified this is a sample and requested production-ready SEO/AEO/GEO code, rather than indexing the sample.

## Changes

- One shared indexing policy controls HTML robots metadata, response-header configuration, sitemap and robots.txt.
- Preview builds stay non-indexable even if INDEXABLE=true is inherited accidentally.
- A public build requires explicit INDEXABLE=true and an approved HTTPS SITE_URL origin. Invalid origins/credentials/query/path are rejected. No new public indexing was enabled.
- Canonical, Open Graph, Organization IDs/URLs and llms.txt use the configured origin. The factual llms.txt is optional, not a ranking signal.
- Updated rendered-output verification checks both production and preview modes on all eight content pages, sitemap membership, Googlebot/OAI-SearchBot crawl rules, headers, JSON-LD and image assets.
- Photos now use Next.js responsive image optimization and explicit sizes. Hero stays eager/high priority; supporting images stay lazy. This addresses the report's image-delivery opportunity; a new live performance score has not been measured.
- Client calendar receives its URL as a prop; server-only site/indexing configuration stays out of its client import tree.
- Corrected JSON-LD escaping of literal `<` so it preserves text semantics safely.
- Added light/dark mode using local preference storage, system default, native accessible toggle and pre-paint initialization. Core light/dark text pairs tested ≥4.5:1. No analytics or tracking added.

## Production activation, when approved

Vercel Production environment:

```text
INDEXABLE=true
SITE_URL=https://www.espressov.com
```

Configure only when that is the intended published canonical host, then rebuild/redeploy after appropriate release approval. Keep preview INDEXABLE=false. Vercel also adds its own noindex headers to preview deployments; do not bypass those to improve a sample's score. No Vercel account configuration or DNS was changed here.

After launch, verify headers and robots on the actual canonical URL, all canonical 200 responses, unknown-path 404, sitemap URLs and rendered content. Submit the sitemap using the owner's Search Console/Bing access and rerun Nertia on the canonical production URL with comparable settings. Recheck mobile/desktop, both themes and Luma's actual third-party journey.

## AEO/GEO scope

Indexable main content is server rendered. Pages have distinct intentions, explicit identity/contact/profile links, useful descriptive headings and human-readable community FAQs. Organization data describes the visible entity; there are no fabricated review/rating/event/offer claims, hidden AI instructions or city doorway pages. No article/FAQ schema was added merely to increase a scanner count. More original founder stories, dated event recaps and approved firsthand evidence would improve substantive usefulness; those require real source material.

## Interpreting 100

A sample deliberately blocked from indexing should not be expected to reach 100 SEO. Production output checks verify the necessary technical controls but do not measure indexing, rankings or citations. Performance 98 is already strong. The report's “initial server response ... 0 ms” is not evidence of slow hosting and does not justify a server migration. Remaining framework JavaScript/CSS opportunities should be evaluated by their actual user impact rather than removing useful behavior solely for a perfect score. No score or AI-citation guarantee.

## Verification

- Production build with INDEXABLE=true, VERCEL_ENV=production, SITE_URL=https://www.espressov.com: PASS, including TypeScript; eight-page output check PASS.
- Preview build with INDEXABLE=true deliberately set and VERCEL_ENV=preview: PASS; eight-page output check confirms noindex, blocked crawl access, empty sitemap and noindex header configuration.
- Missing production SITE_URL: rejected as expected.
- Theme bootstrap simulation: persisted light/dark, system defaults, invalid storage and inaccessible storage PASS.
- Contrast calculations: eighteen core text/background combinations PASS across both palettes, plus focus contrast checks. Not a complete rendered WCAG audit.
- Browser/keyboard/screen reader, image-optimizer response quality, actual new Nertia run, Google indexing and AI citations: NOT TESTED for the new change.
