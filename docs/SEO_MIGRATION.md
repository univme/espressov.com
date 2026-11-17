# Search preservation and improvements

Baseline: supplied Nertia scan, 2026-11-17: overall 84, performance 69, SEO 92, accessibility 99, best practices 58, technical SEO 94. LCP 6.1s, TBT 350ms, CLS 0. These are old-site measurements, not new-site results.

| Surface | Change | Evidence |
|---|---|---|
| Homepage title “Home” | M: descriptive title and brand | Archive/live HTML versus generated Next HTML |
| Missing homepage description/H1 | A: description and one descriptive H1 | Generated output check |
| Main clean paths | Preserved | Archive canonical intent and Next route inventory |
| Organization identity | A: explicit Organization, logo, official profile links | JSON-LD parsed; semantic review, no rich-results validator run |
| Robots/search eligibility | Preview blocked; production path preserves original crawler groups | Preview rendered output; production configuration inspected |
| Sitemap | New eight-page canonical sitemap in approved production mode | Configuration inspected; activation requires rebuild |
| Images | M: resized WebP/local assets, dimensions, alt text | Files inspected; no live LCP measurement |
| Builder JavaScript/CSS | Replaced with Next server-rendered pages, compact styling and one client calendar component | Build/code inspection; no claimed bundle or Lighthouse score |
| Original llms.txt | M: factual page index and Luma destination | New text omits Wix MCP capability claims because new site does not implement them |
| Contact | New route; user-provided partners@espressov.com visible, linked and in Organization data | Old Wix fallback removed; inbox delivery not tested |

Do not delete unmatched Wix routes without a current full sitemap/URL inventory, analytics/Search Console review and a relevant 301/404/410 decision. Archive is a downloaded snapshot, not the editable Wix repository: exact authored-source diff cannot be reconstructed from compiled pages. No broad redirects, language pages, synthetic event dates or location doorway pages were created.

Targets for remeasurement: same Nertia audit context/device with overall ≥84, SEO ≥92, accessibility ≥99; improve performance and best practices. CWV field targets LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 are goals, not measured outcomes. Protect existing rankings and crawler preferences, but no ranking/citation guarantee.
