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
        href: '/vue-core/components/password-field/password-field.html',
      },
    },
  ]"
/>

## Import

```ts
import { VcNumberField } from '@wisemen/vue-core'
```

<!-- @include: ./number-field-meta.md -->


## Style configuration

See <a href="/vue-core/components/text-field/text-field.html#style-configuration">Text Field Style configuration</a>

## Examples

### Basic usage
The most basic usage of the number field component.

<ComponentPreviewV1 name="number-field/basic" />

### Min and max values
You can set a minimum and maximum value for the number field component by using the `min` and `max` props.

<ComponentPreviewV1 name="number-field/min-max" />

### With controls hidden
You can hide the increment and decrement controls by using the `are-controls-hidden` prop.

<ComponentPreviewV1 name="number-field/with-controls-hidden" />

### Step
You can set a step value for the number field component by using the `step` prop.

<ComponentPreviewV1 name="number-field/step" />

### Format options
You can set a format options for the number field component by using the `format-options` prop. <br>
<a href="https://api.haxe.org/v/development/js/lib/intl/NumberFormatOptions.html" target="_blank">Documentation</a> detailing the NumberFormatOptions

<ComponentPreviewV1 name="number-field/format-options" />
