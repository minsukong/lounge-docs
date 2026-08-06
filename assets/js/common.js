// design common

(() => {
  const COLLAPSED_HEIGHT = 320;
  const codeBlocks = [];

  const addCodeToggleStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
      .code-collapse {
        position: relative;
        margin: 24px 0 40px;
      }

      .code-collapse pre {
        margin: 0;
        transition: max-height 220ms ease;
      }

      .code-collapse.is-collapsible pre {
        max-height: ${COLLAPSED_HEIGHT}px;
      }

      .code-collapse.is-collapsible:not(.is-expanded) pre {
        overflow: hidden;
      }

      .code-collapse.is-collapsible:not(.is-expanded)::after {
        position: absolute;
        right: 1px;
        bottom: 49px;
        left: 1px;
        height: 72px;
        pointer-events: none;
        background: linear-gradient(transparent, #1e2124);
        content: "";
      }

      .code-collapse.is-expanded pre {
        max-height: none;
      }

      .code-toggle {
        display: block;
        width: 100%;
        padding: 12px 16px;
        color: var(--krds-primary-70);
        background: var(--krds-primary-5);
        border: 1px solid var(--krds-primary-20);
        border-top: 0;
        border-radius: 0 0 var(--krds-radius) var(--krds-radius);
        font: inherit;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
      }

      .code-toggle[hidden] {
        display: none;
      }

      .code-collapse.is-collapsible pre {
        border-radius: var(--krds-radius) var(--krds-radius) 0 0;
      }

      .code-toggle:hover {
        color: var(--krds-gray-0);
        background: var(--krds-primary-60);
      }

      .code-toggle:focus-visible {
        position: relative;
        z-index: 1;
        outline: 0;
        box-shadow: 0 0 0 4px var(--krds-primary-20);
      }

      @media (prefers-reduced-motion: reduce) {
        .code-collapse pre {
          transition: none;
        }
      }

      @media print {
        .code-collapse.is-collapsible pre {
          max-height: none;
          overflow: visible;
          border-radius: var(--krds-radius);
        }

        .code-collapse.is-collapsible::after,
        .code-toggle,
        .section-quick-menu {
          display: none;
        }
      }
    `;
    document.head.append(style);
  };

  const setExpanded = (container, button, expanded) => {
    container.classList.toggle("is-expanded", expanded);
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "코드 접기" : "전체 코드 보기";
  };

  const updateCollapsibleState = ({ container, pre, button }) => {
    const wasExpanded = container.classList.contains("is-expanded");

    container.classList.remove("is-collapsible", "is-expanded");
    const shouldCollapse = pre.scrollHeight > COLLAPSED_HEIGHT + 24;
    container.classList.toggle("is-collapsible", shouldCollapse);
    button.hidden = !shouldCollapse;

    if (shouldCollapse) {
      setExpanded(container, button, wasExpanded);
    }
  };

  const initializeCodeBlocks = () => {
    document.querySelectorAll("pre").forEach((pre, index) => {
      const container = document.createElement("div");
      const button = document.createElement("button");
      const codeId = `code-block-${index + 1}`;

      container.className = "code-collapse";
      pre.id ||= codeId;

      button.type = "button";
      button.className = "code-toggle";
      button.setAttribute("aria-controls", pre.id);
      button.setAttribute("aria-expanded", "false");
      button.textContent = "전체 코드 보기";
      button.hidden = true;

      pre.before(container);
      container.append(pre, button);

      const item = { container, pre, button };
      codeBlocks.push(item);
      updateCollapsibleState(item);

      button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        setExpanded(container, button, !expanded);
      });
    });
  };

  const getSectionMenuLabel = (heading) => {
    const label = heading.textContent.trim();
    const labelWithoutNumber = label.replace(
      /^(?:\d+[.)]|\d+(?:\.\d+)+[.)]?)\s+/,
      "",
    );

    return labelWithoutNumber || label;
  };

  const initializeSectionMenu = () => {
    const headings = [...document.querySelectorAll("h2")].filter((heading) =>
      heading.textContent.trim(),
    );

    if (!headings.length) return;

    const nav = document.createElement("nav");
    const list = document.createElement("ol");
    const usedIds = new Set(
      [...document.querySelectorAll("[id]")].map((element) => element.id),
    );

    nav.className = "section-quick-menu";
    nav.setAttribute("aria-label", "페이지 목차");
    list.className = "section-quick-menu__list";

    headings.forEach((heading, index) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      let sectionId = heading.id;

      if (!sectionId) {
        let suffix = index + 1;
        sectionId = `section-${suffix}`;

        while (usedIds.has(sectionId)) {
          suffix += 1;
          sectionId = `section-${suffix}`;
        }

        heading.id = sectionId;
        usedIds.add(sectionId);
      }

      heading.classList.add("section-quick-menu__target");
      link.className = "section-quick-menu__link";
      link.href = `#${encodeURIComponent(sectionId)}`;
      link.textContent = getSectionMenuLabel(heading);
      link.title = link.textContent;

      link.addEventListener("click", (event) => {
        event.preventDefault();
        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        heading.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      });

      item.append(link);
      item.append(link);
      list.append(item);
    });

    nav.append(list);
    document.body.append(nav);
  };

  const initialize = () => {
    addCodeToggleStyles();
    initializeCodeBlocks();
    initializeSectionMenu();

    let resizeTimer;
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        codeBlocks.forEach(updateCollapsibleState);
      }, 150);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
