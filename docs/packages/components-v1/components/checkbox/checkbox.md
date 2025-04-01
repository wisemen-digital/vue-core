# Checkbox

A control that allows the user to toggle between checked and not checked.

## Use cases

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

<ComponentPreviewV1 name="checkbox/simple" />

### Disabled state
You can disable the checkbox component by setting the `is-disabled` prop to `true`, preventing user interaction.

<ComponentPreviewV1 name="checkbox/disabled" />

### Indeterminate state
You can set the checkbox component to indeterminate state by setting the `is-indeterminate` prop to `true`.

<ComponentPreviewV1 name="checkbox/indeterminate" />

### Error state
When an error occurs, you can display an error message in the checkbox.

<ComponentPreviewV1 name="checkbox/error" />

<br />
<br />

# Checkbox Indicator

A component that displays the indicator of the checkbox.

<!-- @include: ./checkbox-indicator-meta.md -->

## Checkbox Indicator Example

### Basic usage
If you want your checkbox to have a special design, you can customize the rendering of the checkbox content. 
You can use the VcCheckboxIndicator to render the state of the checkbox

<ComponentPreviewV1 name="checkbox-indicator/simple" />