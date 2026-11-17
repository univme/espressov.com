"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setDark(root.dataset.theme === "dark");
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    function followSystem(event: MediaQueryListEvent) {
      try {
        const saved = localStorage.getItem("espressov-theme");
        if (saved === "light" || saved === "dark") return;
      } catch {
        return;
      }
      root.dataset.theme = event.matches ? "dark" : "light";
      setDark(event.matches);
    }
    preference.addEventListener("change", followSystem);
    return () => preference.removeEventListener("change", followSystem);
  }, []);

  function toggle() {
    const nextDark = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    setDark(nextDark);
    try {
      localStorage.setItem("espressov-theme", nextDark ? "dark" : "light");
    } catch {
      /* Theme still works for this visit when storage is unavailable. */
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Dark mode"
      aria-pressed={dark}
      onClick={toggle}
    >
      <span aria-hidden="true">◐</span>
      <span>Dark mode</span>
    </button>
  );
}
