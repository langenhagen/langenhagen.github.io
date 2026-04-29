// Site bootstrap: googley eyes, email reveal, theme toggle.

import { initGoogleyEyes } from "./googley-eyes.js";

initGoogleyEyes(document.querySelector(".googley-scene"));

// Email obfuscation: real mailto on click, no scrapeable text in DOM.
const emailEl = document.getElementById("playful-email");
if (emailEl) {
    emailEl.addEventListener("click", (e) => {
        e.preventDefault();
        const user = "andreas";
        const domain = "langenhagen.cc";
        window.location.href = `mailto:${user}@${domain}`;
    });
}

// Theme toggle. Pre-paint script in index.html applies the initial theme from
// system preference. Here we keep switching explicit and non-persistent.
const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
    const sunIcon = "☀";
    const moonIcon = "☾";
    const paint = (theme) => {
        const label =
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
        themeBtn.textContent = theme === "dark" ? sunIcon : moonIcon;
        themeBtn.setAttribute("aria-label", label);
        themeBtn.setAttribute("title", label);
    };
    const currentTheme = () =>
        document.documentElement.getAttribute("data-theme") === "dark"
            ? "dark"
            : "light";
    const applyTheme = (next) => {
        document.documentElement.setAttribute("data-theme", next);
        paint(next);
    };
    paint(currentTheme());

    themeBtn.addEventListener("click", () => {
        applyTheme(currentTheme() === "dark" ? "light" : "dark");
    });

    // Follow system preference changes.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", (e) => {
        applyTheme(e.matches ? "dark" : "light");
    });
}
