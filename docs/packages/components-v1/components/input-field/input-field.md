# Input Field

A wrapper for your custom inputs. Supports label, errors and hint slots.
<br>
<br>
To customize form utilities overall in your project, see [InputFieldLabel](/packages/components-v1/components/input-field-label/input-field-label.html), [InputFieldError](/packages/components-v1/components/input-field-error/input-field-error.html), [InputFieldHint](/packages/components-v1/components/input-field-hint/input-field-hint.html).

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to allow users to input a date.',
      variant: 'bad',
      link: {
        label: 'Date Field',
        href: '/vue-core/components/date-field/date-field.html',
      },
    },
    {
      description: 'When you want to allow users to input a number.',
      variant: 'bad',
      link: {
        label: 'Number Field',
        href: '/vue-core/components/number-field/number-field.html',
      },
    },
    {
      description: 'When you want to allow users to input a password.',
      variant: 'bad',
      link: {
        label: 'Password Field',
        href: '/vue-core/components/password-field/password-field.html',
      },
    },
    {
      description: 'When you want to allow users to input a phone number.',
      variant: 'bad',
      link: {
        label: 'Phone Number Field',
        href: '/vue-core/components/phone-number-field/phone-number-field.html',
      },
    },
    {
      description: 'When you want to allow users to input text.',
      variant: 'bad',
      link: {
        label: 'Text Field',
        href: '/vue-core/components/text-field/text-field.html',
      },
    },
    {
      description: 'Any other type of input, to wrap your input',
      variant: 'good',
    },
  ]"
/>

## Import

```ts
import { VcInputField } from '@wisemen/vue-core'
```

<!-- @include: ./input-field-meta.md -->

## Examples

### Basic usage
The most basic usage of the input field component.
> Remark: If you need a date / number / phone number / password / text / textarea field, please refer to existing components in this library. This wrapper is meant to be used for other use-cases.

<ComponentPreviewV1 name="input-field/basic" />
