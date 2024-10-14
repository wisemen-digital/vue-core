---
sidebar: auto
---

# AppSelect

## Description

Displays a list of options for the user to pick from, triggered by a button. Optionally, other content can be displayed in the dropdown.

## Examples

### Basic usage
The most basic usage of the select component is to display a list of options for the user to pick from.

<ComponentPreview name="app-select-simple" />

### Disabled state
You can disable the select component by setting the `is-disabled` prop to `true`, preventing user interaction.

<ComponentPreview name="app-select-disabled" />

### Loading state
You can display a loading indicator in the select component by setting the `is-loading` prop to `true`, signaling that data is being loaded or processed.
<ComponentPreview name="app-select-loading" />

### Error state
When an error occurs, you can display an error message in the select component by setting the `errors` prop to an object containing an `_errors` key with an array of error messages.

<ComponentPreview name="app-select-error" />

### Rendering custom options
You can customize the rendering of options by using the #option-content slot. This allows you to define your own template for displaying each option.

<ComponentPreview name="app-select-custom-option" />

### Rendering a custom value
You can customize the display of the selected value by using the #value slot, allowing you to define your own template for the selected item's appearance.

<ComponentPreview name="app-select-custom-value" />

### With a filter 
When providing a filter function, the select component will display a search input in the dropdown.

<ComponentPreview name="app-select-with-search" />

### Multiple values
If the provided value is an array, the select component will automatically switch to multi-select mode, allowing for the selection of multiple options.

<ComponentPreview name="app-select-multiple" />

### With other interactable elements inside the dropdown
You can add other interactable elements to the dropdown by using the `top` and `bottom` slots.

<ComponentPreview name="app-select-clear-button" />

<!-- @include: ./app-select-meta.md -->

### i18n keys

| Key | Default | Description |
| ---- | ---- | ----------- |
| `search_placeholder` | "Search..." | The placeholder text for the search input |
| `empty_text` | "No results found for \'{searchTerm}\'." | The text to display when there are no options |