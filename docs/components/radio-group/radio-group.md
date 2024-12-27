---
sidebar: auto
---

# Radio Group

## Description

A radio group component where you can select one value of a set of options.

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to allow users to select a single option from a short list of options.',
      variant: 'good',
    },
    {
      description: 'When selecting an option is not required.',
      variant: 'bad',
    },
    {
      description: 'When you want to allow users to select multiple options from a list.',
      variant: 'bad',
      link: {
        label: 'Checkbox Group',
        href: '/vue-core/components/checkbox/checkbox-group',
      },
    },
    {
      description: 'When the list of options is extensive, or if you want to include a search field.',
      variant: 'bad',
      link: {
        label: 'Select',
        href: '/vue-core/components/select/select',
      },
    }
  ]"
/>

## Import

```ts
import {
  VcRadioGroup,
  VcRadioGroupItem,
  VcRadioGroupItemIndicator,
} from '@wisemen/vue-core'
```

<!-- @include: ./radio-group-meta.md -->

### Basic usage
The most basic usage of the radio group component.

<ComponentPreview name="radio-group/simple" />

### Disabled state
You can disable the radio group component by setting the `is-disabled` prop to `true`, preventing user interaction. You can also disable individual items by setting the `isDisabled` prop to `true` on the item.

<ComponentPreview name="radio-group/disabled" />

### Error state
When an error occurs, you can display an error message in the switch component by setting the `errors` prop to an object containing an `_errors` key with an array of error messages.

<ComponentPreview name="radio-group/error" />

### Custom
You can fully customize the RadioGroup component by providing a custom template for each `VcRadioGroupItem`. Additionally, you can use the `VcRadioGroupItemIndicator` component to render the default indicator if needed.

When styling the component, the following selectors are available:

- `data-[state=checked]` - Applied to the radio group item when it is checked.
- `data-[state=unchecked]` - Applied to the radio group item when it is unchecked.
- `disabled` - Applied to the radio group item when it is disabled.

**Note**: When using a custom template, ensure you manually render essential elements like the label, hint, and error messages.

<ComponentPreview name="radio-group/custom" />
