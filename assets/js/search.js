(() => {
  const records = window.LOUNGE_GUIDE_SEARCH_INDEX ?? [];
  const form = document.querySelector("#guide-search-form");
  const input = document.querySelector("#guide-search-input");
  const status = document.querySelector("#search-status");
  const results = document.querySelector("#search-results");
  const suggestionButtons = document.querySelectorAll("[data-search-query]");
  const MAX_RESULTS = 50;

  const normalize = (value) =>
    String(value ?? "")
      .normalize("NFKC")
      .toLocaleLowerCase("ko-KR")
      .replace(/\s+/g, " ")
      .trim();

  const appendHighlightedText = (element, text, query) => {
    const normalizedText = normalize(text);
    const normalizedQuery = normalize(query);
    const matchIndex = normalizedText.indexOf(normalizedQuery);

    if (matchIndex < 0 || !normalizedQuery) {
      element.textContent = text;
      return;
    }

    element.append(document.createTextNode(text.slice(0, matchIndex)));
    const mark = document.createElement("mark");
    mark.textContent = text.slice(matchIndex, matchIndex + query.length);
    element.append(mark, document.createTextNode(text.slice(matchIndex + query.length)));
  };

  const getSearchScore = (record, query, tokens) => {
    const documentName = normalize(record.document);
    const section = normalize(record.section);
    const content = normalize(record.content);
    const searchable = `${documentName} ${section} ${content}`;

    if (!tokens.every((token) => searchable.includes(token))) return -1;

    let score = 0;
    if (documentName.includes(query)) score += 12;
    if (section.includes(query)) score += 9;
    if (content.includes(query)) score += 4;

    tokens.forEach((token) => {
      if (documentName.includes(token)) score += 5;
      if (section.includes(token)) score += 4;
      if (content.includes(token)) score += 1;
    });

    return score;
  };

  const renderResults = (query) => {
    const normalizedQuery = normalize(query);
    const tokens = normalizedQuery.split(" ").filter(Boolean);
    results.replaceChildren();

    if (normalizedQuery.length < 2) {
      status.textContent = "두 글자 이상 입력하세요.";
      return;
    }

    const matchedRecords = records
      .map((record) => ({ record, score: getSearchScore(record, normalizedQuery, tokens) }))
      .filter(({ score }) => score >= 0)
      .sort((a, b) => b.score - a.score || a.record.document.localeCompare(b.record.document, "ko"));

    const visibleRecords = matchedRecords.slice(0, MAX_RESULTS);
    const limitedMessage = matchedRecords.length > MAX_RESULTS ? ` · 상위 ${MAX_RESULTS}건 표시` : "";
    status.textContent = `“${query}” 검색 결과 ${matchedRecords.length}건${limitedMessage}`;

    if (!matchedRecords.length) {
      const empty = document.createElement("p");
      empty.className = "search-empty";
      empty.textContent = "검색 결과가 없습니다. 다른 단어나 추천 검색어를 사용해 보세요.";
      results.append(empty);
      return;
    }

    const fragment = document.createDocumentFragment();

    visibleRecords.forEach(({ record }) => {
      const article = document.createElement("article");
      const documentName = document.createElement("p");
      const link = document.createElement("a");
      const excerpt = document.createElement("p");

      article.className = "search-result";
      documentName.className = "search-result__document";
      link.className = "search-result__link";
      excerpt.className = "search-result__excerpt";
      link.href = record.url;

      appendHighlightedText(documentName, record.document, query);
      appendHighlightedText(link, record.section, query);
      appendHighlightedText(excerpt, record.excerpt, query);

      article.append(documentName, link, excerpt);
      fragment.append(article);
    });

    results.append(fragment);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResults(input.value);
  });

  input.addEventListener("input", () => {
    if (!input.value.trim()) {
      results.replaceChildren();
      status.textContent = "검색어를 입력하거나 추천 검색어를 선택하세요.";
    }
  });

  suggestionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.searchQuery;
      renderResults(input.value);
      input.focus();
    });
  });
})();
