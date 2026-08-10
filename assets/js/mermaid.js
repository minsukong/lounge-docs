void (async () => {
  const { default: mermaid } = await import(
    "https://cdn.jsdelivr.net/npm/mermaid@11.16.0/dist/mermaid.esm.min.mjs"
  );

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: "base",
    themeVariables: {
      primaryColor: "#ecf2fe",
      primaryTextColor: "#1e2124",
      primaryBorderColor: "#256ef4",
      lineColor: "#58616a",
      secondaryColor: "#e7f4fe",
      tertiaryColor: "#f4f5f6",
      noteBkgColor: "#f4f5f6",
      noteBorderColor: "#b1cefb",
      actorBkg: "#ecf2fe",
      actorBorder: "#256ef4",
      actorTextColor: "#1e2124",
      signalColor: "#464c53",
      signalTextColor: "#1e2124",
      fontFamily: "Pretendard, system-ui, sans-serif",
    },
    flowchart: {
      useMaxWidth: true,
      htmlLabels: false,
      curve: "basis",
    },
    sequence: {
      useMaxWidth: true,
      mirrorActors: false,
    },
  });

  await document.fonts.ready;
  await mermaid.run({ querySelector: ".mermaid" });

  const cropMermaidViewBox = (svg, padding = 24) => {
    const groups = [...svg.querySelectorAll(":scope > g")];
    const boxes = groups
      .map((group) => group.getBBox())
      .filter((box) => box.width > 0 && box.height > 0);

    if (!boxes.length) return;

    const left = Math.min(...boxes.map((box) => box.x));
    const top = Math.min(...boxes.map((box) => box.y));
    const right = Math.max(...boxes.map((box) => box.x + box.width));
    const bottom = Math.max(...boxes.map((box) => box.y + box.height));
    const width = right - left;
    const height = bottom - top;

    svg.setAttribute(
      "viewBox",
      [
        left - padding,
        top - padding,
        width + padding * 2,
        height + padding * 2,
      ].join(" "),
    );
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.removeAttribute("height");
    svg.style.maxWidth = `${Math.ceil(width + padding * 2)}px`;
  };

  document
    .querySelectorAll(".diagram-frame svg")
    .forEach((svg) => cropMermaidViewBox(svg));
})();
