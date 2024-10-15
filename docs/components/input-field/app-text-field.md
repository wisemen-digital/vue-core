---
sidebar: auto
---

# AppTextField

## Description

An input field component for text input.

## Examples

### Basic usage
The most basic usage of the text field component.

<ComponentPreview name="app-text-field/basic" />

### Label
It is recommended to provide a label for the text field component by using the `label` prop. When `is-required` is set to `true`, a * will be displayed next to the label.


<ComponentPreview name="app-text-field/with-label" />

### Hint
Display a hint text in the text field component by using the `hint` prop.

<ComponentPreview name="app-text-field/with-hint" />

### Placeholder
Display a placeholder text in the text field component by using the `placeholder` prop.

<ComponentPreview name="app-text-field/with-placeholder" />

### Disabled state
You can disable the text field component by setting the `is-disabled` prop to `true`, preventing user interaction.

<ComponentPreview name="app-text-field/disabled" />

### Loading state
You can display a loading indicator in the text field component by setting the `is-loading` prop to `true`, signaling that data is being loaded or processed.

<ComponentPreview name="app-text-field/loading" />

### With icons
You can add icons to the left and right side of the text field by using the `icon-left` and `icon-right` props.

<ComponentPreview name="app-text-field/with-icons" />

<!-- @include: ./app-text-field-meta.md -->