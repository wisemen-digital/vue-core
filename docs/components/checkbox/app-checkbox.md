---
sidebar: auto
---

# AppCheckbox

## Description

A checkbox which has 3 possible states, unchecked, checked and indeterminate.

## Examples

### Basic usage
The most basic usage of the checkbox component.

<ComponentPreview name="app-checkbox/simple" />

### Disabled state
You can disable the checkbox component by setting the `is-disabled` prop to `true`, preventing user interaction.

<ComponentPreview name="app-checkbox/disabled" />

### Indeterminate state
You can set the checkbox component to indeterminate state by setting the `is-indeterminate` prop to `true`.

<ComponentPreview name="app-checkbox/indeterminate" />

### Error state
When an error occurs, you can display an error message in the checkbox component by setting the `errors` prop to an object containing an `_errors` key with an array of error messages.

<ComponentPreview name="app-checkbox/error" />

<!-- @include: ./app-checkbox-meta.md -->