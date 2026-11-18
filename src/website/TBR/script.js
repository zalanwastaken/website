
"use strict";

document.documentElement.classList.add("js");

// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
}

navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close menu after selecting a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    if (
        !navToggle.contains(event.target) &&
        !navLinks.contains(event.target)
    ) {
        closeMenu();
    }
});

// Scroll reveal animations
const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observerInstance.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });

} else {
    revealElements.forEach((element) => {
        element.classList.add("is-visible");
    });
}
