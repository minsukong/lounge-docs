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
        activateNavigation(entry.target.id);
      });
    },
    { threshold: 0.45 },
  );

  sections.forEach((section) => sectionObserver.observe(section));

  const updateProgress = () => {
    const scrollRange = document.documentElement.scrollHeight - innerHeight;
    const progress = scrollRange > 0 ? (scrollY / scrollRange) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  const getCurrentSectionIndex = () => {
    const viewportMiddle = scrollY + innerHeight / 2;

    return sections.reduce((closestIndex, section, index) => {
      const currentDistance = Math.abs(section.offsetTop - viewportMiddle);
      const closestDistance = Math.abs(
        sections[closestIndex].offsetTop - viewportMiddle,
      );

      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);
  };

  addEventListener("scroll", updateProgress, { passive: true });
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

  updateProgress();
  sections[0]?.classList.add("is-visible");
})();

