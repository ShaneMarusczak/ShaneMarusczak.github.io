(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // --- Scroll Reveal ---
  if (!prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("visible");
    });
  }

  document.querySelectorAll(".card").forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("boxShadow");
    });
  });

  document.querySelectorAll(".card").forEach((item) => {
    item.addEventListener("mouseleave", () => {
      item.classList.remove("boxShadow");
    });
  });

})();
