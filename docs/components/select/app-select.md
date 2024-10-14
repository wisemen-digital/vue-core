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

<!-- @include: ./app-select-meta.md -->