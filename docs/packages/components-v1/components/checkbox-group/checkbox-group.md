# Checkbox Group

A group of checkboxes.

**For the checkbox documentation, see [Checkbox](/packages/components-v1/components/checkbox/checkbox).**

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to allow users to select multiple options from a short list.',
      variant: 'good',
    },
    {
      description: 'When you want to allow users to only select a single option.',
      variant: 'bad',
      link: {
        label: 'Radio Group',
        href: '/vue-core/components/radio-group/radio-group',
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
  VcCheckboxGroup, 
  VcCheckbox, 
  VcCheckboxIndicator
} from '@wisemen/vue-core'
```

<!-- @include: ./checkbox-group-meta.md -->

## Style configuration

See <a href="/vue-core/components/checkbox/checkbox.html#style-configuration">Checkbox Style configuration</a>

## Examples

### Basic usage
The most basic usage of the checkbox group component.

<ComponentPreviewV1 name="checkbox-group/simple" />

### Disabled state
You can disable the checkbox group component by setting the `is-disabled` prop to `true`, preventing user interaction. You can also disable individual items by setting the `isDisabled` prop to `true` on the item.

<ComponentPreviewV1 name="checkbox-group/disabled" />

### Error state
When an error occurs, you can display an error message in the checkbox group component by setting the `errors` prop to an array of error messages.

<ComponentPreviewV1 name="checkbox-group/error" />

### Indeterminate
You can set the checkbox group component to indeterminate state by setting the `is-indeterminate` prop to `true`.

<ComponentPreviewV1 name="checkbox-group/indeterminate" />

### Custom
You can fully customize the Checkbox component by providing a custom template for each `VcCheckbox`. Additionally, you can use the `VcCheckboxIndicator` component to render the default indicator if needed.

When styling the component, the following selectors are available:

- `data-[state=checked]` - Applied to the checkbox group item when it is checked.
- `data-[state=unchecked]` - Applied to the checkbox group item when it is unchecked.
- `disabled` - Applied to the checkbox group item when it is disabled.

**Note**: When using a custom template, ensure you manually render essential elements like the label, hint, and error messages.

<ComponentPreviewV1 name="checkbox-group/custom" />
