# ARIA (Accessible Rich Internet Applications)

> First rule of ARIA use: If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, **then do so.**

## Introduction

Accessible Rich Internet Applications (ARIA) is a set of attributes that can be added to HTML elements to improve the accessibility of web content and web applications, especially those with dynamic content and advanced user interface controls developed with JavaScript, HTML, CSS, and AJAX. ARIA helps to bridge the gap between standard HTML and the functionality needed for complex web applications to be usable by people with disabilities who rely on assistive technologies (ATs) like screen readers.

This documentation will serve as a quick reference for frontend developers on how to effectively use ARIA to enhance the user experience for all.

## Why ARIA?

While semantic HTML5 elements provide a good foundation for accessibility, they don't cover all scenarios. For instance:

- **Custom Widgets:** When you build custom UI components (e.g., carousels, tabs, accordions, dialogs) using generic `div`s and `span`s, Assistive Technologies may not understand their purpose or state.
- **Dynamic Content Updates:** When content changes on the page without a full page reload, Assistive Technologies might not be aware of the updates.
- **Live Regions:** For information that updates frequently (e.g., stock tickers, chat messages), ARIA provides mechanisms to alert users.

ARIA provides additional semantics and metadata that Assistive Technologies can interpret, making custom or dynamic content understandable and navigable.

## Key ARIA Concepts

ARIA is comprised of three main types of attributes: **roles**, **states**, and **properties**.

### 1. Roles

ARIA `role` attributes define the type or purpose of an element. They describe what an element *is* in terms of its function on the page.

**When to Use:** Use roles when a native HTML element doesn't adequately convey the semantic meaning of your component.

**Examples:**

- `role="button"`: Identifies an element as a clickable button.

```html
<div role="button" tabindex="0">Click Me</div>

```

- `role="navigation"`: Identifies a section of navigation links.

```html
<nav role="navigation">
</nav>

```

- `role="dialog"`: Identifies a modal dialog box.

```html
<div role="dialog" aria-modal="true">
</div>

```

- `role="tablist"`, `role="tab"`, `role="tabpanel"`: Used for creating accessible tab interfaces.

**Always use native HTML elements like `<button>` instead of generic elements like `<div role="button">` if possible. Native HTML elements have built-in accessibility features and are generally more robust.**

### 2. States

ARIA `state` attributes describe the current condition or status of an element. They are dynamic and change with user interaction or application state.

**When to Use:** Use states to inform assistive technologies about the current interactive status of a component.

**Examples:**

- `aria-expanded`: Indicates whether a collapsible element (like an accordion header) is currently expanded or collapsed.

```html
<button aria-expanded="false" aria-controls="section1">Toggle Section</button>
<div id="section1" hidden>Content...</div>

```

- `aria-hidden`: Indicates that an element and all its descendants are not visible or perceivable to any user.

```html
<div aria-hidden="true">This content is hidden from screen readers.</div>

```

- `aria-selected`: Indicates the currently selected item in a set (e.g., a selected tab in a tab list).

```html
<li role="tab" aria-selected="true">Tab 1</li>

```

- `aria-checked`: Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

### 3. Properties

ARIA `property` attributes provide additional semantic meaning or characteristics about an element. Unlike states, properties are generally static or less likely to change frequently.

**When to Use:** Use properties to define relationships, labels, or descriptions that enhance understanding.

**Examples:**

- `aria-labelledby`: Refers to the `id` of another element that serves as a label for the current element. This is crucial for providing meaningful labels for complex widgets.

```html
<h2 id="dialog-title">Confirm Action</h2>
<div role="dialog" aria-labelledby="dialog-title">
    <p>Are you sure you want to proceed?</p>
</div>

```

- `aria-describedby`: Refers to the `id` of another element that provides a description for the current element.

```html
<input type="text" aria-describedby="email-hint">
<p id="email-hint">Your email will never be shared with anyone else.</p>

```

- `aria-live`: Indicates that an element's content may be updated and that user agents should alert the user to these updates. Used for "live regions."
- `aria-live="polite"`: Announces changes when the user is idle.
- `aria-live="assertive"`: Immediately announces changes, interrupting ongoing speech.

```html
<div aria-live="polite">New messages received!</div>

```

- `aria-label`: Provides an accessible name for an element when no visible label is present or sufficient.

```html
<button aria-label="Close dialog">X</button>

```

## General Best Practices

- **Use Native HTML First:** Always prioritize semantic HTML elements. Only use ARIA when native HTML cannot convey the necessary semantics.
- **Don't Overuse ARIA:** Adding unnecessary ARIA can sometimes hinder accessibility by creating verbosity or confusion for AT users.
- **Test with Assistive Technologies:** Regularly test your web applications with various screen readers (e.g., NVDA, JAWS, VoiceOver) and other assistive technologies to ensure your ARIA implementation is effective.
- **Keep it Simple:** Strive for the simplest possible solution that meets accessibility requirements.
- **Maintain `tabindex`:** Ensure proper keyboard navigation for all interactive elements, whether native or custom.
- **Valid ARIA:** Use valid ARIA roles, states, and properties as defined by the W3C ARIA specification. Misspelled or incorrect attributes will be ignored by ATs.
- **Documentation:** Document your ARIA usage, especially for complex custom components, so future developers understand the accessibility considerations.

## Resources

- **W3C WAI-ARIA Authoring Practices Guide (APG):** The definitive resource for ARIA patterns and examples. This should be your go-to guide.
    - https://www.w3.org/WAI/ARIA/apg/
- **MDN Web Docs - ARIA:** Excellent, practical documentation.
    - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
- **WebAIM:** Provides articles, tools, and training on web accessibility.
    - https://webaim.org/
