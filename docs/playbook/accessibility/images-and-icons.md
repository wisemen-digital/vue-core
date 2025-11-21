# Images & icons

## Designing Accessible Images & Icons for Inclusive Web Experiences

Images and icons enhance visual appeal and usability, but without proper accessibility measures, they can create barriers for people using screen readers or assistive technologies. Ensuring that these elements are accessible is a critical step toward inclusive design.

## Why Image & Icon Accessibility Matters

Visual elements often convey key information or serve as interactive controls. When they lack proper descriptions or semantic support:

- **Screen reader users** may miss crucial content or actions.
- **Users with cognitive disabilities** can become confused by unclear icons.
- **Low-bandwidth users** who disable images might lose essential context.

By implementing accessible practices, you ensure that all users can interpret and interact with your content effectively.

## Core Principles for Accessible Images

### 1. Provide Meaningful Alternative Text (Alt Text)

Alt text communicates the purpose and content of an image to users who cannot see it.

- **Informative images**: Describe the essential information.

    Example: `alt="Graph showing sales growth over the past year."`

- **Decorative images**: Use empty alt (`alt=""`) so screen readers skip them.
- **Functional images (links or buttons)**: Describe the action, not the image.

    Example: `alt="Submit form"`

- **Images with text**: Include the text in the alt description.
- **Avoid redundancy**: If the image is already explained in surrounding text, use `alt=""`.

### 2. Avoid Images of Text

Whenever possible, use actual text styled with CSS instead of embedding text in images. Real text is scalable, searchable, and easier to make accessible.

### 3. Optimize for Responsiveness and Clarity

Use responsive techniques like `<picture>` or `srcset` so images adapt to different screen sizes without losing meaning or clarity.

## Making Icons Accessible

Icons often act as controls or convey meaning. To make them accessible:

### 1. Pair Icons with Visible Text Labels

Icons alone can be ambiguous. Whenever possible, pair them with a text label.

Example: 🗑️ **Delete**

### 2. Use ARIA Attributes for Context

When text labels aren’t possible, add `aria-label` or `aria-labelledby` to provide an accessible name.

Example: `<svg aria-label="Print document" role="img">...</svg>`

### 3. Optimize SVGs for Accessibility

Include `<title>` and `<desc>` inside SVGs to describe content. Screen readers will read these as the name and description.

## General Best Practices

- **Ensure strong color contrast**: Icons and images should meet WCAG contrast requirements.
- **Test across scenarios**: Check with screen readers, high zoom, and low-vision settings.
- **Context is key**: Icons should make sense in context; don’t assume universal understanding.

## Testing Image & Icon Accessibility

1. **Screen Reader Testing**: Confirm images and icons are announced correctly.
2. **Keyboard Navigation**: Ensure icons used as buttons are focusable and operable via keyboard.
3. **Contrast Checks**: Validate icon contrast against background.
4. **Disable Images Test**: Ensure content remains understandable if images are turned off.

### Resources for Further Learning

- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
- [W3C: Images Concepts](https://www.w3.org/WAI/tutorials/images/)
- [MDN: ARIA Labels](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Working with Media - Designing in the browser](https://www.youtube.com/watch?v=F9VCfA6JJ9U)

By prioritizing accessible images and icons, you create a more inclusive and user-friendly experience. Implement these practices to ensure everyone can understand and interact with your visual content.
