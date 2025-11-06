# Accessible navigation structure

## Introduction

Navigation is a fundamental aspect of any website or web application. Accessible navigation ensures that all users, including those relying on assistive technologies like screen readers, keyboard navigation, or voice control, can understand, operate, and locate content efficiently.

This documentation outlines best practices for creating accessible navigation.

## Core Principles of Accessible Navigation

1. **Semantic HTML First:** Always use the most appropriate HTML elements for navigation. This provides inherent meaning and functionality to assistive technologies.
2. **Logical Structure:** Navigation should be structured in a logical and intuitive manner, reflecting the site's content hierarchy.
3. **Keyboard Operable:** All navigation elements must be fully operable using only the keyboard. This includes tabbing through links, opening/closing menus, and activating buttons.
4. **Clear Focus Indication:** Users must always know where their focus is on the page. Ensure visible and distinct focus outlines for all interactive elements.
5. **Perceivable and Understandable:** Navigation items should have clear and concise text labels, making their purpose easily understandable.
6. **Consistency:** Navigation patterns and placement should be consistent across the entire website or application.
7. **ARIA when Necessary:** Use ARIA attributes to enhance semantics for complex navigation patterns that native HTML cannot fully convey.

## Key Elements and Practices

**1. The `<nav>` Element**

- **Purpose:** The `<nav>` element is specifically designed for major navigation blocks. It signals to assistive technologies that the contained links are a primary navigation mechanism.
- **Best Practice:** Wrap your main site navigation, primary menus, and often even important sub-navigation sections (like table of contents for a long article) within a `<nav>` element.
- **Multiple `nav` elements:** It's acceptable to have multiple `<nav>` elements on a single page (e.g., main navigation, breadcrumbs, pagination, local navigation). If there are multiple `<nav>` elements, provide an `aria-label` to distinguish their purpose for screen reader users.
- **Example:**

```html
<nav aria-label="Main navigation">
<ul>
<li><a href="/">Home</a></li>
<li><a href="/products">Products</a></li>
<li><a href="/about">About Us</a></li>
<li><a href="/contact">Contact</a></li>
</ul>
</nav>
```

**2. Lists (`<ul>`, `<ol>`) for Links**

- **Purpose:** Use unordered lists (`<ul>`) or ordered lists (`<ol>`) to group sets of navigation links. This provides structural context for screen readers, allowing them to announce the number of items in a list and navigate through them efficiently.
- **Best Practice:** Each link should be wrapped in a `<li>` element.
- **Example:**

```html
<nav aria-label="Quick links">
<ul>
<li><a href="#section1">Jump to Section 1</a></li>
<li><a href="#section2">Jump to Section 2</a></li>
</ul>
</nav>
```

**3. Clear and Concise Link Text**

- **Purpose:** Link text should be descriptive and make sense out of context. Avoid generic link text like "Click here" or "Read more" unless accompanied by context.
- **Best Practice:** Ensure link text accurately describes the destination or action.
- **Bad Example:**

```html
<p>For more information, <a href="/details">Click here</a>.</p>
```

- Good example:

```html
<p><a href="/details">Read more about our privacy policy</a>.</p>
```

- **Icons as Links:** If using an icon as a link without visible text, provide an `aria-label` to give it an accessible name.

```html
<a href="/search" aria-label="Search">
<img src="search-icon.svg" alt="Search icon">
</a>
```

**4. Keyboard Navigation (`tabindex`, Focus Management)**

- **Purpose:** All interactive navigation elements must be reachable and operable using the keyboard (Tab key for focus, Enter/Space for activation).
- **Best Practice:**
    - Native interactive elements (like `<a>`, `<button>`, `<input>`) are naturally focusable.
    - For custom elements acting as interactive controls (e.g., a `div` used as a button), add `tabindex="0"` to make them focusable and manage focus programmatically.
    - Ensure a visible `focus` state (e.g., `outline` CSS property) for all interactive elements.
- **Example (CSS for focus):**

    ```css
    a:focus,
    button:focus {
        outline: 2px solid blue; /* Or any distinct color/style */
        outline-offset: 2px;
    }
    ```

**5. Skip Links**

- **Purpose:** Skip links (or "skip navigation" links) allow keyboard and screen reader users to bypass repetitive navigation menus and jump directly to the main content area of a page. This significantly improves efficiency, especially on content-heavy pages.
- **Best Practice:**
    - Place the skip link as the very first element inside the `<body>`.
    - Make it visible only when focused.
    - Link it to the `id` of your `<main>` content area.
- **Example:**

```html
<body>
<a href="#main-content" class="skip-link">Skip to main content</a>

<header>...</header>
<nav>...</nav>

<main id="main-content">
</main>

<footer>...</footer>
</body>
```

**6. Accessible Dropdown/Mega Menus**

Dropdown menus present unique accessibility challenges.

- **Keyboard Operability:**
    - Users must be able to open/close submenus using keyboard (e.g., Enter, Space, Down Arrow for expanding; Escape for collapsing).
    - Focus must move logically between parent items and their sub-menu items.
- **ARIA Attributes:**
    - `aria-haspopup="true"`: On the parent link/button that triggers the dropdown.
    - `aria-expanded="true/false"`: Dynamically updated to reflect whether the submenu is open or closed.
    - `aria-controls="[id of submenu]"`: Links the trigger to the controlled submenu.
    - `role="menu"`, `role="menuitem"`: Can be used for more complex menu patterns, but ensure full keyboard support if using these roles. The WAI-ARIA Authoring Practices Guide (APG) is the definitive resource for these patterns.
- **Example (Simplified):**

```html
<li class="has-submenu">
<button id="products-button" aria-haspopup="true" aria-expanded="false" aria-controls="products-submenu">
Products
</button>
<ul id="products-submenu" role="menu" hidden>
<li role="menuitem"><a href="/products/category1">Category 1</a></li>
<li role="menuitem"><a href="/products/category2">Category 2</a></li>
</ul>
</li>
```

**7. Breadcrumbs**

- **Purpose:** Breadcrumbs provide a secondary navigation aid showing the user's location within the website's hierarchy.
- **Best Practice:**
    - Use the `<nav>` element with an `aria-label="Breadcrumbs"`.
    - Use an ordered list (`<ol>`) for the path.
    - The last item in the breadcrumb trail (the current page) should typically not be a link, or if it is, it should have `aria-current="page"`.
- **Example:**

```html
<nav aria-label="Breadcrumbs">
<ol>
<li><a href="/">Home</a></li>
<li><a href="/products">Products</a></li>
<li><a href="/products/electronics">Electronics</a></li>
<li aria-current="page">Laptops</li>
</ol>
</nav>
```

## Testing Accessible Navigation

- **Keyboard Only:** Navigate your entire site using only the Tab, Shift+Tab, Enter, and Space keys. Ensure all interactive elements are reachable and operable.
- **Screen Reader Testing:** Use a screen reader (NVDA/JAWS on Windows, VoiceOver on macOS) to experience your navigation. Listen to how elements are announced and if the structure makes sense.
- **Browser Developer Tools:** Use accessibility inspection tools within browser dev tools (e.g., Chrome Lighthouse, Firefox Accessibility panel) to identify potential issues.

## Resources for Further Learning

- **W3C WAI-ARIA Authoring Practices Guide (APG) - Navigation Menus:** Essential for complex menu patterns.
    - [https://www.w3.org/WAI/ARIA/apg/patterns/menus/](https://www.w3.org/WAI/ARIA/apg/patterns/menus/)
- **MDN Web Docs - HTML `<nav>` element:**
    - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
- **WebAIM - Skip Navigation:**
    - https://webaim.org/techniques/skipnav/
