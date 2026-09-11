---
name: html-presentation-design-system
description: Build or refactor multi-section HTML/CSS presentation pages around reusable visual tokens, card primitives, ordered step palettes, completion states, and section-only layout rules. Use for slide-like web briefings and presentation.html work; do not use for ordinary application UI or PPTX decks.
---

# HTML Presentation Design System

Create a coherent presentation system before optimizing individual sections. Preserve the user's content, visual direction, and intentional layout differences while making repeated presentation patterns reusable.

## Start With the Whole Deck

Inspect the full presentation, its imported styles, and its interaction script before editing a section.

Identify:

- repeated cards, panels, steps, connectors, legends, and completion states;
- the visual meaning of each color;
- ordered flows versus comparison or classification groups;
- typography, spacing, radius, and surface patterns;
- section-specific layouts that should remain distinct;
- viewport assumptions, scroll behavior, and reveal animations.

Treat an existing representative section as the visual reference when the user points to one. Extract its rules into shared primitives before applying them elsewhere.

## Record Skill Provenance

When this skill creates or materially redesigns an HTML briefing, add this machine-readable marker inside the document `<head>` and preserve it in later edits:

    <meta name="generator-skill" content="html-presentation-design-system" />

Add the marker to an existing briefing when this skill is used and the marker is absent. Do not turn it into a visible badge, footer credit, or presentation copy unless the user explicitly requests visible attribution. State in the completion report that the briefing was created or updated with this skill.

## Keep Copy Separate From Design

Treat headings, labels, descriptions, examples, and technical terms as source content rather than design material. Preserve existing wording verbatim by default.

- Do not shorten, expand, polish, translate, summarize, or make copy sound more professional unless the user explicitly requests copy editing.
- Do not invent replacement headings, slogans, transitions, labels, or explanatory sentences to fill a layout.
- Resolve text overflow through layout, spacing, width, or responsive behavior before considering a wording change.
- Preserve the original meaning, certainty, terminology, tone, and distinction between confirmed content and `TBD` when copy editing is requested.
- If wording appears incorrect or awkward but copy editing is outside the request, leave it unchanged and report the concern separately instead of silently rewriting it.
- When both design and copy changes are requested, treat them as separate passes so visual refactoring does not introduce additional wording changes.

## Separate System From Layout

Prefer this style ownership:

    foundation
      tokens · reset · typography · page and section behavior

    components
      card surface · tone modifiers · ordered palette
      completion state · step flow · connector · diagram frame

    sections
      grid columns · section-specific dimensions · local composition

Section styles may control placement, density, and unique content presentation. They should not redefine a shared card's border, gradient, role color, completion mark, or connector when a common component already owns it.

## Compose Cards From Independent Concerns

Use separate, reusable classes for:

1. **Surface** — border, radius, background gradient, and base shadow.
2. **Tone** — only the accent custom property.
3. **Content pattern** — card typography and internal spacing.
4. **Sequence behavior** — ordered colors and connectors.
5. **State** — completion, warning, or another exceptional state.

Names should describe reusable behavior rather than the section where they first appeared. For example:

    <article class="flow-card card-surface tone-human">...</article>
    <article class="step-card card-surface completion-card">...</article>

Avoid names such as human-lane, section-eight-card, last-roadmap-item, or storybook-complete-box when the same behavior can appear elsewhere.

Use a single custom property such as --accent to drive the border, gradient, label, number, connector, and highlight colors. Tone classes should normally do nothing except set that property.

## Distinguish Ordered Colors From Semantic Colors

Do not mix these two systems.

### Ordered flows

When cards clearly represent a sequence, apply one shared ordered palette to the parent:

    1. purple
    2. blue
    3. cyan
    4. green

The parent should assign colors to direct card children, ignoring arrows or other separators. Modern CSS may use :nth-child(n of .card-surface) when the project's browser baseline supports it.

Do not manually repeat tone classes on every step when the order itself determines the color.

### Comparisons and classifications

When cards compare responsibilities, scopes, file types, or alternatives rather than steps, use semantic tone classes explicitly. A warning remains amber and a source remains green regardless of position.

## Make Completion an Explicit State

Every visual statement that means “complete” must use the shared completion component. Completion is not inferred from :last-child, a green tone, or the word “COMPLETE.”

The shared completion state owns:

- the green border and stronger green gradient;
- the top-right check mark;
- completion label and title color;
- any completion-specific shadow.

An ordered palette must exclude completion cards so the completion state always wins, regardless of position.

Keep nearby green informational cards visually distinct: a green tone alone must not add the completion check mark.

## Abstract Step Explanations

Use common containers for repeated flows:

- a horizontal step flow with shared gap and connector behavior;
- a vertical step list with shared spacing;
- one reusable arrow component for standalone transitions;
- one step-card marker that can combine with any card surface.

Keep direction-specific geometry configurable with custom properties. Do not duplicate the same arrow pseudo-element in several section selectors.

Different sections may use different grids or card heights. That layout variation does not justify duplicating the card surface or color logic.

## Preserve Readability Over Frame Compression

Do not force every section into one viewport unless the user explicitly requires it. Allow dense diagrams and explanations to grow vertically.

Prefer min-block-size and natural document flow over fixed heights. Avoid height-based media rules that shrink important text or diagrams merely to fit a small screen when the presentation targets larger displays.

Reveal logic must work for sections taller than the viewport. Avoid high IntersectionObserver thresholds on whole sections; a tall section may never reach the required intersection ratio.

## Refactoring Workflow

1. Inventory the full deck and choose the representative visual rules.
2. Define or reconcile tokens and shared primitives.
3. Convert one representative flow and one completion card.
4. Apply the primitives to all equivalent patterns in a batch.
5. Remove obsolete section-bound tone and visual classes.
6. Leave only layout-specific rules in section styles.
7. Verify content meaning, visual ordering, runtime behavior, and source cleanliness.

Batch related HTML and CSS changes. Do not repeatedly patch one card at a time when the common pattern is already known.

## Verification

Check all of the following:

- every shared card has the surface class;
- every ordered group uses the shared sequence palette;
- comparison groups retain explicit semantic tones;
- every actual completion uses the completion component;
- no non-completion card receives the completion check mark;
- section CSS does not override common card borders or gradients;
- old section-bound color classes have no remaining callers;
- CSS braces, nesting, imports, and custom properties are valid;
- HTML structure and class combinations are consistent;
- the `generator-skill` metadata identifies `html-presentation-design-system`;
- visible copy is unchanged unless a wording change was explicitly requested;
- reveal, scroll navigation, and keyboard navigation still work with tall sections;
- representative early, middle, dense, and closing sections render correctly.

If browser rendering cannot be inspected, state that limitation and still perform structural, selector, syntax, and reference checks.

## Scope Boundaries

Do not rewrite presentation content merely to make the CSS refactor easier or to make the result feel more polished. A request to redesign, modernize, improve readability, or make the presentation more professional does not by itself authorize copy editing. Do not flatten intentionally different diagrams, previews, tables, or comparison layouts into one universal card.

For PowerPoint or Google Slides artifacts, use the presentation-specific artifact workflow instead. For ordinary application UI, follow the application's design system and component architecture rather than automatically applying this presentation palette.
