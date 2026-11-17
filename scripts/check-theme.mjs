import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import assert from "node:assert/strict";
const html = readFileSync(".next/server/app/index.html", "utf8");
const bootstrap = [
  ...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g),
]
  .map((m) => m[1])
  .find((s) => s.startsWith("(function(){var theme;"));
assert.ok(bootstrap, "Pre-paint bootstrap emitted");
for (const [stored, systemDark, unavailable, expected] of [
  ["dark", false, false, "dark"],
  ["light", true, false, "light"],
  [null, true, false, "dark"],
  [null, false, false, "light"],
  ["invalid", true, false, "dark"],
  [null, true, true, "dark"],
  [null, false, true, "light"],
]) {
  const document = { documentElement: { dataset: {} } };
  runInNewContext(bootstrap, {
    document,
    localStorage: {
      getItem() {
        if (unavailable) throw Error("blocked");
        return stored;
      },
    },
    window: {
      matchMedia() {
        return { matches: systemDark };
      },
    },
  });
  assert.equal(document.documentElement.dataset.theme, expected);
}
assert.match(html, /aria-label="Dark mode"/);
assert.match(html, /aria-pressed="false"/);
console.log(
  "PASS theme bootstrap: stored light/dark, system defaults, invalid storage, blocked storage; named native toggle in built HTML",
);
const css = readFileSync("app/globals.css", "utf8");
function tokens(selector) {
  const b = css.slice(css.indexOf(selector)).split("}")[0];
  return Object.fromEntries(
    [...b.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/g)].map((m) => [m[1], m[2]]),
  );
}
const light = tokens(":root {"),
  dark = { ...light, ...tokens('html[data-theme="dark"] {') };
function lum(hex) {
  const c = hex
    .slice(1)
    .match(/../g)
    .map((v) => parseInt(v, 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return c[0] * 0.2126 + c[1] * 0.7152 + c[2] * 0.0722;
}
function ratio(a, b) {
  const l = [lum(a), lum(b)].sort((x, y) => x - y);
  return (l[1] + 0.05) / (l[0] + 0.05);
}
for (const [name, t] of [
  ["light", light],
  ["dark", dark],
]) {
  for (const [fg, bg] of [
    ["ink", "paper"],
    ["muted", "paper"],
    ["teal", "paper"],
    ["muted", "white"],
    ["teal", "white"],
    ["ink", "ribbon"],
    ["muted", "footer"],
    ["teal-dark", "ribbon"],
    ["button-fg", "button-bg"],
  ]) {
    const r = ratio(t[fg], t[bg]);
    assert.ok(r >= 4.5, `${name} ${fg}/${bg}: ${r}`);
    console.log(`PASS ${name} ${fg}/${bg} ${r.toFixed(2)}:1`);
  }
  assert.ok(ratio(t.focus, t.paper) >= 3);
}
console.log(
  "NOT TESTED actual browser clicks/reload, rendered contrast, screen reader and vendor iframe appearance",
);
