# Design system

- Paper `#f4f1e9`, white `#fffef9`, ink `#182c2c`, teal `#08757c`, dark teal `#07565b`, muted text `#536360`, borders `#d1d7ce`.
- Display: Georgia/system serif, body: Arial/system sans. No external font requests or font licensing dependency.
- Layout: 1600px maximum editorial canvas, 7% standard gutters, desktop two-column heroes, single-column mobile heroes, breakpoints 1100/800/420px.
- Hero images are prioritized and responsive; supporting images lazy-load. Real photo crops communicate gathering, conversation and welcome.
- Focus ring `#ac5018`, 3px, 5px offset; skip link. CTA minimum height 52px. Motion limited to button color transitions; reduced-motion disables transitions and smooth scrolling.
- Navigation remains visible and wraps on mobile; no hidden menu/drawer or focus trap.
- Luma panel activates on button click; no analytics/tracking added by site code.
- Source contrast calculation is evidence for token pairs only. Browser-rendered contrast, crop quality, target sizing and reflow still require review.
