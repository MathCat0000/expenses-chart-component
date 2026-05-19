# Frontend Mentor — Expenses Chart Component

A solution to the [Expenses Chart Component challenge](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt) on Frontend Mentor.

---

## Table of Contents

- [Overview](#overview)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

---

## Overview

### The Challenge

Users should be able to:

- View the bar chart and hover over individual bars to see the correct amounts for each day
- See the current day's bar highlighted in a different colour
- View an optimal layout depending on their device's screen size
- See hover states for all interactive elements
- Use the provided JSON data file to dynamically size the bars

### Links

- **Solution:** [GitHub Repository](https://github.com/MathCat0000/expenses-chart-component)
- **Live Site:** [GitHub Pages](https://mathcat0000.github.io/expenses-chart-component/)

---

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid & Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Fetch API & JSON-driven rendering

---

### What I Learned

**Semantic HTML**
I improved my understanding of separating layout wrappers from meaningful document sections. The outer component is a generic container, while the spending area is a meaningful `<section>` linked to its heading via `aria-labelledby`.

**Data-driven rendering**
Instead of hardcoding chart items, JavaScript fetches `data.json`, calculates proportional bar heights, and renders each bar dynamically:

```js
const maxAmount = Math.max(...data.map((item) => item.amount));
const height = (item.amount / maxAmount) * 100;
```

**Tooltip positioning**
A key CSS insight was that tooltip positioning depends on the correct reference element. Each tooltip needs a wrapper whose height matches the bar's calculated height:

```html
<div class="chart-item__bar-wrapper" style="--bar-height: 66.7%;">
  <span class="chart-item__tooltip">$34.91</span>
  <div class="chart-item__bar" aria-hidden="true"></div>
</div>
```

**Transient vs. persistent UI state**
Hover and focus are handled with CSS; click-persistent tooltips are handled by toggling an `.is-selected` class with JavaScript:

```js
const isAlreadySelected = chartItem.classList.contains("is-selected");
chartList.querySelectorAll(".chart-item.is-selected").forEach((item) => {
  item.classList.remove("is-selected");
});
if (!isAlreadySelected) {
  chartItem.classList.add("is-selected");
}
```

**Async JavaScript**
I practiced a minimal async pattern using `fetch()`, `await`, `response.json()`, and basic error handling.

---

### Continued Development

In future projects I want to build a more minimal, self-sustained frontend workflow with internal notes, reusable checklists, and debugging patterns. Areas I want to keep improving:

- **CSS layout ownership** — deciding which element should own spacing, width, height, alignment, and positioning
- **CSS state taxonomy** — hover, focus, active, selected, hidden, visible, and disabled
- **CSS transitions and interaction feedback**
- **Tooltip and floating UI positioning**
- **Percentage height chains and parent-child sizing**
- **JavaScript async patterns** — `fetch()`, `try...catch`, and DOM rendering
- **JavaScript state management** for simple UI interactions

---

### Useful Resources

| Resource | Why it helped |
|---|---|
| [CSS-Tricks — A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) | Reviewed Flexbox alignment and vertical/horizontal positioning inside the chart layout |
| [Learn CSS Grid](https://learncssgrid.com/) | Helped reason about the seven-column chart structure |
| [MDN — Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) | Explained how to load `data.json` asynchronously and render from external data |
| [MDN — CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) | Useful for design tokens and passing dynamic bar heights via inline CSS variables |
| [MDN — CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) | Clarified absolute positioning for tooltips and why a positioned wrapper was needed |
| [MDN — CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) | Reinforced Grid for the seven-column layout and distributing vs. aligning content |
| [MDN — Basic Concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) | Reinforced Flexbox as a one-dimensional tool, especially for bottom-aligning bars |

---

### AI Collaboration

I used ChatGPT as a debugging and reasoning assistant during this project.

The most useful use cases were:

- Breaking the component into HTML, CSS, and JavaScript responsibilities
- Validating my mobile-first workflow during the build
- Debugging CSS layout ownership issues
- Understanding why the tooltip needed a wrapper to follow the dynamic bar height
- Separating hover/focus CSS states from click-persistent JavaScript state
- Extracting an error taxonomy after the project was completed

I wrote, tested, and debugged the implementation myself. AI was most useful when I used it to isolate the *principle* behind a bug rather than copying a complete solution.

---

## Author

- **GitHub** — [@MathCat0000](https://github.com/MathCat0000)
- **Frontend Mentor** — [@MathCat0000](https://www.frontendmentor.io/profile/MathCat0000)