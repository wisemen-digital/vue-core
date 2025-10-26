# Forms & inputs Accessibility

## Input Borders and Visual Cues

- Ensure visible **input outlines or borders** on focus.

    > Don’t remove default focus styles unless replacing with a strong custom one.
    >
- Use **consistent styling** for focus, hover, disabled, and error states.
- For accessibility:
    - Use a **thick enough border**
    - Make border color changes **high contrast**

## Icons and Visual Indicators

- Use **clear iconography** to indicate:
    - Errors (`❗`)
    - Help (`?`)
    - Valid state (`✔️`)
- Always pair icons with **textual labels or tooltips**.

    > Example: A help icon should trigger a tooltip like “Enter a valid email address.”
    >
- Use `aria-hidden="true"` for decorative icons, and descriptive `aria-label`s if they convey meaning.

## Labels and Placeholder Text

- **Do not rely on placeholders** as labels.

    > Placeholder disappears on input, creating confusion for screen reader and memory-impaired users.
    >
- Always use a proper `<label>` element, visually or programmatically associated with the input.
- If using a **floating label** UI pattern, ensure the label:
    - Stays visible
    - Doesn’t overlap the text
    - Still meets color contrast guidelines

## Error Messages and Validation

- Error messages must be:
    - **Visible**, with high color contrast
    - **Close** to the related field
    - **Persistent** until resolved
- Use `aria-describedby` to programmatically associate errors:

    ```html
    <input id="email" aria-describedby="email-error" aria-invalid="true">
    <p id="email-error">Email is required</p>
    ```

- Don't use **only red borders or tooltips** to show validation—always add clear text.

## Focus Indicators & Keyboard Navigation

- Always show a **clear focus indicator**
- Make sure indicators:
    - Are **visually distinct**
    - Meet **contrast guidelines**
    - Aren’t blocked by CSS (like `overflow: hidden`)

## Loading States and Disabled Fields

- Show **visual loading indicators** (e.g., spinners or skeleton loaders) when data affects form fields.
- **Disabled fields** should:
    - Look visually distinct (grayed out **with enough contrast**)
    - Not just hide interaction—communicate *why* it's disabled if necessary.
