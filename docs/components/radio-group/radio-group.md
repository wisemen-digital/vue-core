---
sidebar: auto
---

# RadioGroup

## Description
A radio group component where you can select 1 value of a set of options.

## Examples

### Basic usage
The most basic usage of the radio group component.

<ComponentPreview name="radio-group/simple" />

### Disabled state
You can disable the radio group component by setting the `is-disabled` prop to `true`, preventing user interaction. You can also disable individual items by setting the `isDisabled` prop to `true` on the item.

<ComponentPreview name="radio-group/disabled" />

### Error state
When an error occurs, you can display an error message in the switch component by setting the `errors` prop to an object containing an `_errors` key with an array of error messages.

<ComponentPreview name="radio-group/error" />

### Custom items
You can use custom items as your radio group items. Using the `items` slot in the `AppRadioGroup` you can define your own template for displaying each item.

The slot exposes the `items`, which you can use to loop over. You should use the `AppRadioGroupItem` component to render each item.

This item exposes `isChecked`, `isDisabled`, `isFocused`, `isHovered` and `hasError` props. Passing these props to the `AppRadioGroupIndicator` component will allow you to display the correct indicators.

<ComponentPreview name="radio-group/custom" />



<!-- @include: ./radio-group-meta.md -->