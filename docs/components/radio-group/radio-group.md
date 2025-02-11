# Radio Group

A radio group component where you can select one value of a set of options.

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to allow users to only select a single option.',
      variant: 'good',
    },
    {
      description: 'When you want to allow users to select multiple options from a short list.',
      variant: 'bad',
      link: {
        label: 'Checkbox Group',
        href: '/vue-core/components/checkbox-group/checkbox-group.html',
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
import { VcRadioGroup } from '@wisemen/vue-core'
```

<!-- @include: ./radio-group-meta.md -->

<br />
<br />

# Radio Group Item

A single radio group item.

## Group item Import

```ts
import { VcRadioGroupItem } from '@wisemen/vue-core'
```

<!-- @include: ./radio-group-item-meta.md -->

<br />
<br />

# Radio Group Item Indicator

The default indicator for a radio group item. <br>
If you want your radio item to have a special design, you can customize the rendering of the radio content. 
You can use the VcRadioGroupItemIndicator to render the state

## Indicator Import

```ts
import { VcRadioGroupItemIndicator } from '@wisemen/vue-core'
```

<!-- @include: ./radio-group-item-indicator-meta.md -->

## Examples

### Basic usage
The basic usage of the radio group component.

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


## Style Config

These are all the properties you can customize for the radio group

```ts
interface RadioGroupItemStyleConfig {
  '--radio-group-item-bg-color-checked': string
  '--radio-group-item-bg-color-default': string
  '--radio-group-item-bg-color-disabled': string
  '--radio-group-item-bg-color-error': string
  '--radio-group-item-bg-color-focus': string
  '--radio-group-item-bg-color-hover': string

  '--radio-group-item-border-color-checked': string
  '--radio-group-item-border-color-default': string
  '--radio-group-item-border-color-disabled': string
  '--radio-group-item-border-color-error': string
  '--radio-group-item-border-color-focus': string
  '--radio-group-item-border-color-hover': string

  '--radio-group-item-border-radius-default': string

  '--radio-group-item-error-font-size': string
  '--radio-group-item-error-font-weight': string
  '--radio-group-item-error-spacing-default': string
  '--radio-group-item-error-text-color': string

  '--radio-group-item-hint-font-size': string
  '--radio-group-item-hint-font-weight': string
  '--radio-group-item-hint-spacing-default': string
  '--radio-group-item-hint-text-color-checked': string
  '--radio-group-item-hint-text-color-default': string
  '--radio-group-item-hint-text-color-disabled': string
  '--radio-group-item-hint-text-color-error': string
  '--radio-group-item-hint-text-color-focus': string
  '--radio-group-item-hint-text-color-hover': string

  '--radio-group-item-indicator-bg-color-checked': string
  '--radio-group-item-indicator-bg-color-disabled': string
  '--radio-group-item-indicator-bg-color-error': string
  '--radio-group-item-indicator-bg-color-focus': string
  '--radio-group-item-indicator-bg-color-hover': string
  '--radio-group-item-indicator-border-radius-default': string
  '--radio-group-item-indicator-size-default': string
  '--radio-group-item-label-font-size-default': string
  '--radio-group-item-label-font-weight-default': string

  '--radio-group-item-label-spacing-default': string
  '--radio-group-item-label-text-color-checked': string
  '--radio-group-item-label-text-color-default': string
  '--radio-group-item-label-text-color-disabled': string
  '--radio-group-item-label-text-color-error': string
  '--radio-group-item-label-text-color-focus': string

  '--radio-group-item-label-text-color-hover': string

  '--radio-group-item-ring-color-error': string
  '--radio-group-item-ring-color-focus': string

  '--radio-group-item-size-default': string
}

```