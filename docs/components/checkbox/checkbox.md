# Checkbox

A control that allows the user to toggle between checked and not checked.

<BulletList
  :items="[
    {
      description: 'When you want users toggle between two states.',
      variant: 'good',
    },
    {
      description: 'When you have multiple options that can be selected.',
      variant: 'bad',
      link: {
        label: 'Checkbox Group',
        href: '/vue-core/components/checkbox-group/checkbox-group',
      },
    },
  ]"
/>

## Import

```ts
import { VcCheckbox } from '@wisemen/vue-core'
```

<!-- @include: ./checkbox-meta.md -->

## Examples

### Basic usage
The most basic usage of the checkbox component.

<ComponentPreview name="checkbox/simple" />

### Disabled state
You can disable the checkbox component by setting the `is-disabled` prop to `true`, preventing user interaction.

<ComponentPreview name="checkbox/disabled" />

### Indeterminate state
You can set the checkbox component to indeterminate state by setting the `is-indeterminate` prop to `true`.

<ComponentPreview name="checkbox/indeterminate" />

### Error state
When an error occurs, you can display an error message in the checkbox.

<ComponentPreview name="checkbox/error" />

## Style Config

These are all the properties you can customize for the checkbox

```ts
export interface CheckboxStyleConfig extends BaseStyleConfig {
  '--checkbox-bg-color-checked': string
  '--checkbox-bg-color-default': string
  '--checkbox-bg-color-disabled': string
  '--checkbox-bg-color-error': string
  '--checkbox-bg-color-focus': string
  '--checkbox-bg-color-hover': string
  '--checkbox-bg-color-indeterminate': string

  '--checkbox-border-color-checked': string
  '--checkbox-border-color-default': string
  '--checkbox-border-color-disabled': string
  '--checkbox-border-color-error': string
  '--checkbox-border-color-focus': string
  '--checkbox-border-color-hover': string
  '--checkbox-border-color-indeterminate': string

  '--checkbox-border-radius-default': string

  '--checkbox-error-font-size': string
  '--checkbox-error-font-weight': string
  '--checkbox-error-spacing-default': string
  '--checkbox-error-text-color': string

  '--checkbox-hint-font-size': string
  '--checkbox-hint-font-weight': string
  '--checkbox-hint-spacing-default': string
  '--checkbox-hint-text-color-checked': string
  '--checkbox-hint-text-color-default': string
  '--checkbox-hint-text-color-disabled': string
  '--checkbox-hint-text-color-error': string
  '--checkbox-hint-text-color-focus': string
  '--checkbox-hint-text-color-hover': string

  '--checkbox-indicator-color-checked': string
  '--checkbox-indicator-color-disabled': string
  '--checkbox-indicator-color-error': string
  '--checkbox-indicator-color-focus': string
  '--checkbox-indicator-color-hover': string
  '--checkbox-indicator-color-indeterminate': string
  '--checkbox-indicator-size-default': string
  '--checkbox-label-font-size-default': string
  '--checkbox-label-font-weight-default': string

  '--checkbox-label-spacing-default': string
  '--checkbox-label-text-color-checked': string
  '--checkbox-label-text-color-default': string
  '--checkbox-label-text-color-disabled': string
  '--checkbox-label-text-color-error': string
  '--checkbox-label-text-color-focus': string
  '--checkbox-label-text-color-hover': string

  '--checkbox-ring-color-error': string
  '--checkbox-ring-color-focus': string

  '--checkbox-size-default': string
}
```

<br />
<br />

# Checkbox Indicator

A component that displays the indicator of the checkbox.

<!-- @include: ./checkbox-indicator-meta.md -->

## Checkbox Indicator Example

### Basic usage
If you want your checkbox to have a special design, you can customize the rendering of the checkbox content. 
You can use the VcCheckboxIndicator to render the state of the checkbox

<ComponentPreview name="checkbox-indicator/simple" />