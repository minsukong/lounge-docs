(() => {
  const sections = [
    ...document.querySelectorAll(".presentation-section"),
  ];
  const navigationLinks = [...document.querySelectorAll(".section-navigation a")];
  const progressBar = document.querySelector(".scroll-progress span");

  const activateNavigation = (sectionId) => {
    navigationLinks.forEach((link) => {
      link.classList.toggle("active", link.hash === `#${sectionId}`);
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        sectionObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.01,
      rootMargin: "-10% 0px -10% 0px",
    },
  );

  sections.forEach((section) => sectionObserver.observe(section));

  const getCurrentSectionIndex = () => {
    const viewportMiddle = innerHeight / 2;
    const visibleSectionIndex = sections.findIndex((section) => {
      const { top, bottom } = section.getBoundingClientRect();

      return top <= viewportMiddle && bottom >= viewportMiddle;
    });

    if (visibleSectionIndex !== -1) return visibleSectionIndex;

    return sections.reduce((closestIndex, section, index) => {
      const { top, bottom } = section.getBoundingClientRect();
      const closestRect = sections[closestIndex].getBoundingClientRect();
      const currentDistance = Math.min(
        Math.abs(top - viewportMiddle),
        Math.abs(bottom - viewportMiddle),
      );
      const closestDistance = Math.min(
        Math.abs(closestRect.top - viewportMiddle),
        Math.abs(closestRect.bottom - viewportMiddle),
      );

      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);
  };

  const updateViewportState = () => {
    const scrollRange = document.documentElement.scrollHeight - innerHeight;
    const progress = scrollRange > 0 ? (scrollY / scrollRange) * 100 : 0;

    if (progressBar) progressBar.style.width = `${progress}%`;

    const currentSection = sections[getCurrentSectionIndex()];
    if (currentSection) activateNavigation(currentSection.id);
  };

  addEventListener("scroll", updateViewportState, { passive: true });
  addEventListener("resize", updateViewportState);
  addEventListener("keydown", (event) => {
    const navigationKeys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp"];
    if (!navigationKeys.includes(event.key)) return;

    event.preventDefault();
    const direction = ["ArrowDown", "PageDown"].includes(event.key) ? 1 : -1;
    const targetIndex = Math.max(
      0,
      Math.min(sections.length - 1, getCurrentSectionIndex() + direction),
    );

    sections[targetIndex].scrollIntoView({ behavior: "smooth" });
  });

  updateViewportState();
  sections[0]?.classList.add("is-visible");
})();

