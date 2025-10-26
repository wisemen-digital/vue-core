# Typography: A Step-by-Step Summary

Typography is more than aesthetics—it directly affects readability, comprehension, and accessibility. Well-implemented typography ensures that users with visual impairments, cognitive disabilities, or low vision can comfortably read and understand your content. Below are essential steps and best practices for accessible typography.

## Why Typography Accessibility Matters

- **Legibility affects comprehension**: Hard-to-read fonts or poor spacing can slow reading and cause fatigue.
- **Scalable text ensures usability**: Users should resize text without breaking the layout.
- **Contrast and hierarchy provide clarity**: Clear distinctions help users navigate content quickly, especially those with visual or cognitive challenges.

Accessible typography isn't just good design—it’s a legal and ethical requirement under WCAG.

## Core Principles for Accessible Typography

### 1. Choose Legible Fonts

- Use **clean, sans-serif fonts** like Arial, Helvetica, or system defaults for body text.
- Avoid overly decorative or thin fonts that reduce readability.
- Ensure **clear distinction between similar characters** (I, l, 1).
- Limit your page to **two or three fonts** for consistency.

### 2. Use Scalable Font Sizes

- Use **relative units** (`rem` or `em`), not fixed `px`.
- Set a base font size of **100% (16px)** on `<html>` or `<body>`.
- Define headings **relative to the base** for consistent scaling.
- Preserve **semantic heading structure** for screen readers.

### 3. Maintain Adequate Spacing

- Set **line-height to at least 1.5** for body text.
- Use **extra spacing for long paragraphs** to avoid a cramped feel.
- Ensure **paragraph spacing and margins** aid readability.

### 4. Optimize Letter & Word Spacing

- Slightly increase **letter-spacing** for headings for clarity.
- For all-caps text, use **0.05em–0.1em letter-spacing**.
- Maintain sufficient **word-spacing** for cognitive accessibility.

### 5. Allow Text Resizing Without Layout Issues

- **Do not use fixed heights or containers** that clip text.
- Test with **200% zoom**—no content loss or overlap should occur.
- Design responsively so enlarged text does **not cause horizontal scrolling**.

### 6. Ensure Sufficient Contrast

- Meet **WCAG AA**:
    - Normal text: **4.5:1**
    - Large text: **3:1**
- Never use **color alone** for meaning—combine with icons or text.

### 7. Test with Real Users & Assistive Tech

- Use **screen readers** to check reading order and scaling.
- Test at **400% zoom** and with **custom text spacing overrides**.
- Validate using tools like **WebAIM Contrast Checker**.

## Resources for Further Learning

- [WebAIM: Fonts and Text](https://webaim.org/techniques/fonts/#resizing)
- [W3C: Text Spacing](https://www.w3.org/WAI/WCAG21/quickref/#text-spacing)
- [MDN: Accessible Typography](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript#typography)
- [WCAG 2.1: Text Requirements](https://www.w3.org/TR/WCAG21/#visual-presentation)

---

By applying these principles, your typography will be not only visually appealing but also inclusive—ensuring that everyone, regardless of ability, can read and interact with your content comfortably.
