---
sidebar: auto
---

# AppSelect

## Description

Displays a list of options for the user to pick from, triggered by a button. Optionally, other content can be displayed in the dropdown.

## Examples

### Basic usage
The most basic usage of the select component is to display a list of options for the user to pick from.

<script setup>
import AppSelectSimple from '../../demos/app-select-simple/Demo.vue'
import AppSelectCustomOption from '../../demos/app-select-custom-option/Demo.vue'
import AppSelectCustomValue from '../../demos/app-select-custom-value/Demo.vue'
import AppSelectWithSearch from '../../demos/app-select-with-search/Demo.vue'
import AppSelectMultiple from '../../demos/app-select-multiple/Demo.vue'
</script>

<AppSelectSimple />

### Rendering custom options
You can customize the rendering of options by using the #option-content slot. This allows you to define your own template for displaying each option.

<AppSelectCustomOption />

### Rendering a custom value
You can customize the display of the selected value by using the #value slot, allowing you to define your own template for the selected item's appearance.

<AppSelectCustomValue />

### With a filter 
When providing a filter function, the select component will display a search input in the dropdown.

<AppSelectWithSearch />

### Multiple values
If the provided value is an array, the select component will automatically switch to multi-select mode, allowing for the selection of multiple options.

<AppSelectMultiple />

<!-- @include: ./app-select-meta.md -->