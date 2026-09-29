(() => {
  "use strict";

  const config = window.LoungeBriefingPresenterConfig;
  if (!config || !Array.isArray(config.notes) || !config.notes.length) return;

  const initialize = () => {
    if (document.querySelector(".briefing-panel")) return;

    const sectionSelector = config.sectionSelector || "main > section";
    const openCommand = (config.openCommand || "/briefing").toLowerCase();
    const closeCommands = (config.closeCommands || ["/off", "/briefing off"]).map((value) =>
      value.toLowerCase(),
    );
    const queryParameter = config.queryParameter || "briefing";
    const sections = Array.from(document.querySelectorAll(sectionSelector));
    if (!sections.length) return;

    let currentIndex = 0;

    const command = document.createElement("div");
    command.className = "briefing-command";
    command.setAttribute("aria-hidden", "true");
    command.innerHTML = `
      <div class="briefing-command__box" role="dialog" aria-modal="true" aria-labelledby="briefing-command-label">
        <label class="briefing-command__label" id="briefing-command-label" for="briefing-command-input">발표자 명령</label>
        <input class="briefing-command__input" id="briefing-command-input" type="text" autocomplete="off" spellcheck="false" placeholder="${openCommand}" />
        <p class="briefing-command__help"><code>${openCommand}</code> 발표자 모드 · <code>${closeCommands[0]}</code> 종료 · Esc 닫기</p>
        <p class="briefing-command__status" aria-live="polite"></p>
      </div>`;

    const panel = document.createElement("aside");
    panel.className = "briefing-panel";
    panel.setAttribute("aria-label", "발표자 노트");
    panel.innerHTML = `
      <div class="briefing-panel__header">
        <p class="briefing-panel__eyebrow">PRESENTER NOTES</p>
        <h2 class="briefing-panel__title"></h2>
        <p class="briefing-panel__progress"></p>
        <button class="briefing-panel__close" type="button" aria-label="발표자 모드 종료">×</button>
      </div>
      <div class="briefing-panel__body">
        <div class="briefing-note briefing-note--key">
          <p class="briefing-note__label">핵심</p>
          <p data-note="key"></p>
        </div>
        <div class="briefing-note">
          <p class="briefing-note__label">말할 내용</p>
          <ul data-note="say"></ul>
        </div>
        <div class="briefing-note briefing-note--avoid">
          <p class="briefing-note__label">주의</p>
          <p data-note="avoid"></p>
        </div>
        <div class="briefing-note">
          <p class="briefing-note__label">확인 질문</p>
          <p data-note="question"></p>
        </div>
        <div class="briefing-panel__nav">
          <button type="button" data-action="previous">이전 섹션</button>
          <button type="button" data-action="next">다음 섹션</button>
        </div>
      </div>`;

    document.body.append(command, panel);

    const commandInput = command.querySelector(".briefing-command__input");
    const commandStatus = command.querySelector(".briefing-command__status");
    const panelTitle = panel.querySelector(".briefing-panel__title");
    const panelProgress = panel.querySelector(".briefing-panel__progress");
    const panelKey = panel.querySelector('[data-note="key"]');
    const panelSay = panel.querySelector('[data-note="say"]');
    const panelAvoid = panel.querySelector('[data-note="avoid"]');
    const panelQuestion = panel.querySelector('[data-note="question"]');

    const sectionTitle = (index) =>
      sections[index]?.querySelector("h2")?.textContent?.trim() || `섹션 ${index + 1}`;

    const normalizedNote = (index) => {
      const note = config.notes[index] || {};
      return {
        key: note.key || "이 섹션의 발표자 노트가 아직 작성되지 않았습니다.",
        say: Array.isArray(note.say) ? note.say : [],
        avoid: note.avoid || "",
        question: note.question || "",
      };
    };

    const render = (index) => {
      currentIndex = Math.max(0, Math.min(index, sections.length - 1));
      const note = normalizedNote(currentIndex);

      sections.forEach((section, sectionIndex) => {
        section.classList.toggle("is-briefing-current", sectionIndex === currentIndex);
      });

      panelTitle.textContent = sectionTitle(currentIndex);
      panelProgress.textContent = `${currentIndex + 1} / ${sections.length}`;
      panelKey.textContent = note.key;
      panelSay.replaceChildren(
        ...note.say.map((item) => {
          const listItem = document.createElement("li");
          listItem.textContent = item;
          return listItem;
        }),
      );
      panelAvoid.textContent = note.avoid;
      panelQuestion.textContent = note.question;
    };

    const showCommandPalette = () => {
      command.classList.add("is-open");
      command.setAttribute("aria-hidden", "false");
      commandInput.value = "";
      commandStatus.textContent = "";
      window.setTimeout(() => commandInput.focus(), 0);
    };

    const hideCommandPalette = () => {
      command.classList.remove("is-open");
      command.setAttribute("aria-hidden", "true");
      commandStatus.textContent = "";
    };

    const activate = () => {
      document.body.classList.add("briefing-mode");
      render(currentIndex);
      hideCommandPalette();
    };

    const deactivate = () => {
      document.body.classList.remove("briefing-mode");
      sections.forEach((section) => section.classList.remove("is-briefing-current"));
    };

    const move = (direction) => {
      const nextIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));
      render(nextIndex);
      sections[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    };

    commandInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      const value = commandInput.value.trim().toLowerCase();

      if (value === openCommand) {
        activate();
        return;
      }

      if (closeCommands.includes(value)) {
        deactivate();
        hideCommandPalette();
        return;
      }

      commandStatus.textContent = `사용 가능한 명령: ${openCommand}, ${closeCommands[0]}`;
    });

    command.addEventListener("mousedown", (event) => {
      if (event.target === command) hideCommandPalette();
    });

    panel.querySelector(".briefing-panel__close").addEventListener("click", deactivate);
    panel.querySelector('[data-action="previous"]').addEventListener("click", () => move(-1));
    panel.querySelector('[data-action="next"]').addEventListener("click", () => move(1));

    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.shiftKey && event.code === "Period") {
        event.preventDefault();
        showCommandPalette();
        return;
      }

      if (event.key === "Escape") {
        if (command.classList.contains("is-open")) hideCommandPalette();
        else if (document.body.classList.contains("briefing-mode")) deactivate();
      }
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          const index = sections.indexOf(visible.target);
          if (index >= 0 && index !== currentIndex) render(index);
        },
        { rootMargin: "-12% 0px -62% 0px", threshold: [0, 0.1, 0.25, 0.5] },
      );
      sections.forEach((section) => observer.observe(section));
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get(queryParameter) === "1") activate();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
