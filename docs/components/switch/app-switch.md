---
sidebar: auto
---

# AppSwitch

## Description

A switch which has 2 possible states, unchecked and checked.

## Examples

### Basic usage
The most basic usage of the switch component.

<ComponentPreview name="app-switch/simple" />

### Disabled state
You can disable the switch component by setting the `is-disabled` prop to `true`, preventing user interaction.

<ComponentPreview name="app-switch/disabled" />

### Error state
When an error occurs, you can display an error message in the switch component by setting the `errors` prop to an object containing an `_errors` key with an array of error messages.

<ComponentPreview name="app-switch/error" />

### Icons
You can set icons for the checked and unchecked states of the switch component by using the `icon-checked` and `icon-unchecked` props.

<ComponentPreview name="app-switch/icon" />

### Size
You can set the size of the switch component by using the `size` prop. It can be set to `sm` for small size. The default size is `default`.

<ComponentPreview name="app-switch/size" />



<!-- @include: ./app-switch-meta.md -->