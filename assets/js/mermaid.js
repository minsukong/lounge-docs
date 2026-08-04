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

  await mermaid.run({ querySelector: ".mermaid" });
})();
