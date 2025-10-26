# Semantic HTML

## Introduction

Semantic HTML refers to the use of HTML markup that clearly describes the meaning and purpose of the content it contains, rather than just its presentational appearance. While you can build a webpage using only `<div>` and `<span>` elements, using semantic HTML elements like `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, and others, provides inherent meaning to the structure of your document.

This documentation will outline the importance of semantic HTML and provide practical examples for our frontend developers to integrate into their daily workflows, ensuring our web applications are robust, accessible, and maintainable.

## Why Semantic HTML?

### Accessibility
- **Screen Readers:** Assistive technologies like screen readers rely heavily on semantic HTML to understand the structure and meaning of a webpage. A screen reader can jump directly to a `<main>` section or list all the `<nav>` elements, allowing users to navigate content efficiently. Non-semantic elements offer no such cues.
- **Keyboard Navigation:** Semantic elements often have built-in keyboard accessibility (e.g., `<button>`, `<a>`, `<input>`), reducing the need for extensive ARIA attributes or custom JavaScript to make them navigable.
### SEO
- Search engines use semantic HTML to better understand the content and hierarchy of your webpages.
### Readability and Maintainability
- Code written with semantic HTML is easier for developers to read, understand, and maintain. When you see `<header>`, you immediately know its purpose, unlike a generic `<div id="header">`.
### Future Compatibility
- As web standards evolve, semantic elements are more likely to retain their meaning and functionality, whereas presentational `div`s might require refactoring.
### Reduce CSS/Javascript Dependency
- Semantic elements often have default browser styles and behaviours, which can reduce the amount of custom CSS and JavaScript needed.

## Key Semantic HTML5 Elements and Their Use

### 1. Structure Elements
- `<header>`: Represents introductory content, usually at the top of a document or a section. It often contains a heading, navigation, and logos.
```html
<header>
  <h1>Website Title</h1>
  <nav>...</nav>
</header>
```

- `<nav>`: Represents a section of navigation links, either within the current document or to other documents.

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

- `<main>`: Represents the dominant content of the `<body>` of a document. There should only be **one** `<main>` element per document, and it should not contain content that is repeated across documents, such as sidebars, navigation links, copyright information, site logos, and search forms (unless the search form is the main function of the page).

```html
<main>
  <h2>Welcome to our website!</h2>
  <p>This is the main content area.</p>
</main>
```

- `<article>`: Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget, or any other independent item of content).

```html
<article>
  <h3>Blog Post Title</h3>
  <p>Content of the blog post...</p>
</article>
```

- `<section>`: Represents a standalone section of a document, which doesn't have a more specific semantic element to represent it. It typically has a heading. Use `<section>` when you want to group related content, but it's not a self-contained article.

```html
<section>
  <h2>Our Services</h2>
  <p>Details about our various services.</p>
</section>
```

> **Note:** A good rule of thumb for `<section>` is that if the content within it could be reasonably grouped under a heading, then a `<section>` element might be appropriate.

- `<footer>`: Represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about its section, such as who wrote it, links to related documents, copyright data, and the like.

```html
<footer>
  <p>&copy; 2025 Our Company. All rights reserved.</p>
</footer>
```

### 2. Text-Level Semantics
- `<strong>`: Indicates strong importance, seriousness, or urgency. Browsers typically render it as bold.

```html
<p>This is a <strong>very important</strong> message.</p>
```

- `<em>`: Represents emphasis. Browsers typically render it as italic.

```html
<p>I *really* love semantic HTML, I mean, I <em>really</em> do!</p>
```

- `<cite>`: Used for the title of a work (e.g., a book, song, film, or painting).

```html
<p>As written in <cite>The Hitchhiker's Guide to the Galaxy</cite>.</p>
```

- `<figure>` and `<figcaption>`: Used to mark up self-contained content, often an image, diagram, code snippet, etc., with an optional caption.

```html
<figure>
  <img src="image.jpg" alt="Description of image">
  <figcaption>A beautiful landscape.</figcaption>
</figure>
```

- `<time>`: Represents a specific period in time.

```html
<p>The event starts at <time datetime="2025-07-01T09:00">9:00 AM on July 1st</time>.</p>
```

## Practical Application
- **Outline Your Document:** Before diving into `div`s, think about the logical structure of your content. What's the main content? Are there distinct sections or articles? Is there a header, footer, and navigation?
- **Prioritize Meaning over Presentation:** Choose HTML elements based on what the content _is_, not how it _looks_. You can always style it with CSS.
- **Avoid div:** While `div`s are still necessary for layout and styling, avoid using them where a more semantic element would be appropriate.
- **Headings are Crucial:** Always use `<h1>` through `<h6>` in a logical, hierarchical order to structure your content. Never skip heading levels (e.g., jump from `<h2>` to `<h4>`).

## Common Pitfalls to Avoid
- **Using `div` for Buttons:** Instead of `<div onclick="doSomething()">`, use `<button onclick="doSomething()">`. Buttons are inherently focusable and clickable via keyboard.
- **Using `div` or `button` for Links:** Instead of `<div onclick="location.href='#'">`, use `<a href="#">`. Links are for navigation.
- **Skipping Heading Levels:** Do not use headings for purely visual styling. If you want larger text, use CSS.
- **Misusing `<section>`:** Don't use `<section>` just to apply styles. If it doesn't represent a distinct, logically grouped part of the document that could have its own heading, a `<div>` is often more appropriate.

## Resources for Further Learning

- **MDN Web Docs - HTML elements reference:** Comprehensive documentation on all HTML elements.
    - [https://developer.mozilla.org/en-US/docs/Web/HTML/Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- **W3C HTML Standard:** The official specification.
    - [https://html.spec.whatwg.org/multipage/](https://html.spec.whatwg.org/multipage/)
- **WebAIM - Semantic Structure:** Excellent articles on semantic HTML for accessibility.
    - [https://webaim.org/techniques/semanticstructure/](https://webaim.org/techniques/semanticstructure/)
