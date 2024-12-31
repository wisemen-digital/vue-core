# Number Field

An input field component for a number.

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to allow users to input a number.',
      variant: 'good',
    },
    {
      description: 'When you want to allow users to input a phone number.',
      variant: 'bad',
      link: {
        label: 'Phone Number Field',
        href: '/vue-core/components/input-field/phone-number-field',
      },
    },
  ]"
/>

## Import

```ts
import { VcNumberField } from '@wisemen/vue-core'
```

<!-- @include: ./number-field-meta.md -->

### Basic usage
The most basic usage of the number field component.

<ComponentPreview name="number-field/basic" />

### Min and max values
You can set a minimum and maximum value for the number field component by using the `min` and `max` props.

<ComponentPreview name="number-field/min-max" />

### With controls hidden
You can hide the increment and decrement controls by using the `are-controls-hidden` prop.

<ComponentPreview name="number-field/with-controls-hidden" />

### Step
You can set a step value for the number field component by using the `step` prop.

<ComponentPreview name="number-field/step" />

### Format options
You can set a format options for the number field component by using the `format-options` prop.

<ComponentPreview name="number-field/format-options" />