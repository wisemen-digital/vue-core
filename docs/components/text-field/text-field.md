# Text Field


## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to allow users to input a short text.',
      variant: 'good',
    },
    {
      description: 'When you want to allow users to input a long text.',
      variant: 'bad',
      link: {
        label: 'Textarea',
        href: '/vue-core/components/textarea/textarea.html'
      }
    },
  ]"
/>

## Import

```ts
import { VcTextField } from '@wisemen/vue-core'
```
<!-- @include: ./text-field-meta.md -->

## Examples

### Basic usage
The most basic usage of the text field component.

<ComponentPreview name="text-field/basic" />


## Style Config

These are all the properties you can customize for the fields

```ts
export interface TextFieldStyleConfig {
  '--text-field-bg-color-default': string
  '--text-field-bg-color-disabled': string
  '--text-field-bg-color-error': string
  '--text-field-bg-color-focus': string
  '--text-field-bg-color-hover': string

  '--text-field-border-bottom-color-default': string
  '--text-field-border-bottom-color-disabled': string
  '--text-field-border-bottom-color-error': string
  '--text-field-border-bottom-color-focus': string
  '--text-field-border-bottom-color-hover': string

  '--text-field-border-left-color-default': string
  '--text-field-border-left-color-disabled': string
  '--text-field-border-left-color-error': string
  '--text-field-border-left-color-focus': string
  '--text-field-border-left-color-hover': string

  '--text-field-border-radius-bottom-left-default': string
  '--text-field-border-radius-bottom-right-default': string
  '--text-field-border-radius-top-left-default': string
  '--text-field-border-radius-top-right-default': string

  '--text-field-border-right-color-default': string
  '--text-field-border-right-color-disabled': string
  '--text-field-border-right-color-error': string
  '--text-field-border-right-color-focus': string
  '--text-field-border-right-color-hover': string

  '--text-field-border-top-color-default': string
  '--text-field-border-top-color-disabled': string
  '--text-field-border-top-color-error': string
  '--text-field-border-top-color-focus': string
  '--text-field-border-top-color-hover': string

  '--text-field-font-size-default': string
  '--text-field-font-weight-default': string
  '--text-field-height-default': string

  '--text-field-icon-color-default': string
  '--text-field-icon-color-disabled': string
  '--text-field-icon-color-error': string
  '--text-field-icon-color-focus': string
  '--text-field-icon-color-hover': string
  '--text-field-icon-left-spacing-default': string
  '--text-field-icon-right-spacing-default': string
  '--text-field-icon-size-default': string

  '--text-field-loader-color-default': string
  '--text-field-loader-color-disabled': string
  '--text-field-loader-color-error': string
  '--text-field-loader-color-focus': string
  '--text-field-loader-color-hover': string
  '--text-field-loader-size-default': string

  '--text-field-padding-left-default': string
  '--text-field-padding-right-default': string

  '--text-field-placeholder-color-default': string
  '--text-field-placeholder-color-disabled': string
  '--text-field-placeholder-color-error': string
  '--text-field-placeholder-color-focus': string
  '--text-field-placeholder-color-hover': string

  '--text-field-ring-color-error': string
  '--text-field-ring-color-focus': string

  '--text-field-shadow-default': string
  '--text-field-shadow-disabled': string
  '--text-field-shadow-error': string
  '--text-field-shadow-focus': string
  '--text-field-shadow-hover': string

  '--text-field-text-color-default': string
  '--text-field-text-color-disabled': string
  '--text-field-text-color-error': string
  '--text-field-text-color-focus': string
  '--text-field-text-color-hover': string

  '--text-field-with-icon-left-padding-left-default': string
  '--text-field-with-icon-right-padding-right-default': string
}
```