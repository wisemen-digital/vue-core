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