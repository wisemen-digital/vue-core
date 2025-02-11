# Select

A component that displays a list of options for the user to pick from, triggered by a button. Optionally, other content can be displayed in the dropdown.

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to allow users to select one or multiple options from a longer list of options.',
      variant: 'good',
    },
    {
      description: 'When the list is rather short and you want to select at most one item, you might want to use a radio group instead.',
      variant: 'bad',
      link: {
        label: 'Radio Group',
        href: '/vue-core/components/radio-group/radio-group',
      },
    },
    {
      description: 'When the list is rather short and you want to select at least one item, you might want to use a checkbox group instead.',
      variant: 'bad',
      link: {
        label: 'Checkbox Group',
        href: '/vue-core/components/checkbox-group/checkbox-group',
      },
    }
  ]"
/>


## Import

```ts
import { VcSelect } from '@wisemen/vue-core'
```

<!-- @include: ./select-meta.md -->

## Examples

### Basic usage
The most basic usage of the select component is to display a list of options for the user to pick from.

<ComponentPreview name="select/simple" />

### Disabled state
You can disable the select component by setting the `is-disabled` prop to `true`, preventing user interaction.

<ComponentPreview name="select/disabled" />

### Loading state
You can display a loading indicator in the select component by setting the `is-loading` prop to `true`, signaling that data is being loaded or processed.
<ComponentPreview name="select/loading" />

### Error state
When an error occurs, you can display an error message in the select component by setting the `errors` prop to an object containing an `_errors` key with an array of error messages.

<ComponentPreview name="select/error" />

### Rendering custom options
You can customize the rendering of options by using the #option-content slot. This allows you to define your own template for displaying each option.

<ComponentPreview name="select/custom-option" />

### Rendering a custom value
You can customize the display of the selected value by using the #value slot, allowing you to define your own template for the selected item's appearance.

<ComponentPreview name="select/custom-value" />

### With a filter 
When providing a filter function, the select component will display a search input in the dropdown.

<ComponentPreview name="select/with-search" />

### Multiple values
If the provided value is an array, the select component will automatically switch to multi-select mode, allowing for the selection of multiple options.

<ComponentPreview name="select/multiple" />

### With other interactable elements inside the dropdown
You can add other interactable elements to the dropdown by using the `content-top` and `content-bottom` slots.

<ComponentPreview name="select/clear-button" />


## Style Config

These are all the properties you can customize for the select

```ts

interface SelectOptionStyleConfig {
  '--select-option-bg-color-default': string
  '--select-option-bg-color-disabled': string
  '--select-option-bg-color-highlighted': string
  '--select-option-bg-color-hover': string
  '--select-option-bg-color-selected': string

  '--select-option-border-radius-default': string
  '--select-option-font-size-default': string
  '--select-option-font-weight-default': string

  '--select-option-indicator-color-default': string
  '--select-option-indicator-size-default': string

  '--select-option-min-height-default': string

  '--select-option-padding-x-default': string
  '--select-option-padding-y-default': string

  '--select-option-text-color-default': string
  '--select-option-text-color-disabled': string
  '--select-option-text-color-highlighted': string
  '--select-option-text-color-hover': string
  '--select-option-text-color-selected': string
}

interface SelectStyleConfig extends SelectOptionStyleConfig {
  '--select-bg-color-default': string
  '--select-bg-color-disabled': string
  '--select-bg-color-error': string
  '--select-bg-color-focus': string
  '--select-bg-color-hover': string

  '--select-border-bottom-color-default': string
  '--select-border-bottom-color-disabled': string
  '--select-border-bottom-color-error': string
  '--select-border-bottom-color-focus': string
  '--select-border-bottom-color-hover': string

  '--select-border-left-color-default': string
  '--select-border-left-color-disabled': string
  '--select-border-left-color-error': string
  '--select-border-left-color-focus': string
  '--select-border-left-color-hover': string

  '--select-border-radius-bottom-left-default': string
  '--select-border-radius-bottom-right-default': string
  '--select-border-radius-top-left-default': string
  '--select-border-radius-top-right-default': string

  '--select-border-right-color-default': string
  '--select-border-right-color-disabled': string
  '--select-border-right-color-error': string
  '--select-border-right-color-focus': string
  '--select-border-right-color-hover': string
  
  '--select-border-top-color-default': string
  '--select-border-top-color-disabled': string
  '--select-border-top-color-error': string
  '--select-border-top-color-focus': string
  '--select-border-top-color-hover': string
  
  '--select-dropdown-bg-color-default': string
  '--select-dropdown-border-color-default': string
  '--select-dropdown-border-radius-default': string
  '--select-dropdown-max-height-default': string
  '--select-dropdown-max-width-default': string
  '--select-dropdown-min-width-default': string
  '--select-dropdown-padding-x-default': string
  '--select-dropdown-padding-y-default': string
  '--select-dropdown-shadow-default': string
  
  '--select-font-size-default': string
  '--select-font-weight-default': string
  
  '--select-group-content-padding-x-default': string
  '--select-group-content-padding-y-default': string
  
  '--select-group-label-font-size-default': string
  '--select-group-label-font-weight-default': string
  '--select-group-label-spacing-bottom-default': string
  '--select-group-label-spacing-top-default': string
  '--select-group-label-spacing-x-default': string
  '--select-group-label-text-color-default': string
  
  '--select-icon-color-default': string
  '--select-icon-color-disabled': string
  '--select-icon-color-error': string
  '--select-icon-color-focus': string
  '--select-icon-color-hover': string
  
  '--select-icon-left-size-default': string
  '--select-icon-left-spacing-default': string
  '--select-icon-right-size-default': string
  '--select-icon-right-spacing-default': string
  
  '--select-loader-color-default': string
  '--select-loader-color-disabled': string
  '--select-loader-color-error': string
  '--select-loader-color-focus': string
  '--select-loader-color-hover': string
  '--select-loader-size-default': string
  
  '--select-min-height-default': string
  
  '--select-padding-left-default': string
  '--select-padding-right-default': string
  
  '--select-placeholder-color-default': string
  '--select-placeholder-color-disabled': string
  '--select-placeholder-color-error': string
  '--select-placeholder-color-focus': string
  '--select-placeholder-color-hover': string
  
  '--select-ring-color-error': string
  '--select-ring-color-focus': string
  
  '--select-separator-color-default': string
  '--select-separator-spacing-y-default': string
  
  '--select-shadow-default': string
  '--select-shadow-disabled': string
  '--select-shadow-error': string
  '--select-shadow-focus': string
  '--select-shadow-hover': string
  
  '--select-text-color-default': string
  '--select-text-color-disabled': string
  '--select-text-color-error': string
  '--select-text-color-focus': string
  '--select-text-color-hover': string
  
  '--select-with-icon-left-padding-left-default': string
  '--select-with-icon-right-padding-right-default': string
}

```