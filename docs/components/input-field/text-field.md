---
sidebar: auto
---

# Text Field

An input field component for text.

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to allow users to input text.',
      variant: 'good',
    },
    {
      description: 'When you want to allow users to input a number.',
      variant: 'bad',
      link: {
        label: 'Number Field',
        href: '/vue-core/components/input-field/number-field',
      },
    },
    {
      description: 'When you want to allow users to input a phone number.',
      variant: 'bad',
      link: {
        label: 'Phone Number Field',
        href: '/vue-core/components/input-field/phone-number-field',
      },
    },
     {
      description: 'When you want to allow users to input a password.',
      variant: 'bad',
      link: {
        label: 'Password Field',
        href: '/vue-core/components/input-field/password-field',
      },
    },
    {
      description: 'When you want to allow users to input a large amount of text.',
      variant: 'bad',
      link: {
        label: 'Textarea',
        href: '/vue-core/components/input-field/textarea',
      },
    },
  ]"
/>

## Import

```ts
import { VcTextField } from '@wisemen/vue-core'
```

<!-- @include: ./text-field-meta.md -->

### Basic usage
The most basic usage of the text field component.

<ComponentPreview name="text-field/basic" />

### Label
It is recommended to provide a label for the text field component by using the `label` prop. When `is-required` is set to `true`, a * will be displayed next to the label.

<ComponentPreview name="text-field/with-label" />

### Hint
Display a hint text in the text field component by using the `hint` prop.

<ComponentPreview name="text-field/with-hint" />

### Placeholder
Display a placeholder text in the text field component by using the `placeholder` prop.

<ComponentPreview name="text-field/with-placeholder" />

### Disabled state
You can disable the text field component by setting the `is-disabled` prop to `true`, preventing user interaction.

<ComponentPreview name="text-field/disabled" />

### Loading state
You can display a loading indicator in the text field component by setting the `is-loading` prop to `true`, signaling that data is being loaded or processed.

<ComponentPreview name="text-field/loading" />

### With icons
You can add icons to the left and right side of the text field by using the `icon-left` and `icon-right` props.

<ComponentPreview name="text-field/with-icons" />

### Custom
You can customize the text field component by using the provided slots.

<ComponentPreview name="text-field/custom" />