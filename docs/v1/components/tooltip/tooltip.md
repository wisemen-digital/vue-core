# Tooltip

## Use cases

<BulletList
  :items="[
    {
      description: 'When you need to provide additional context or clarification without cluttering the UI.',
      variant: 'good',
    },
        {
      description: 'When you want to show few additional details on hover or focus for icons, buttons, or abbreviations.',
      variant: 'good',
    },
    {
      description: 'When displaying essential information that users must see to complete a task.',
      variant: 'bad',
    },
  ]"
/>

## Import

```ts
import { VcTooltip } from '@wisemen/vue-core'
```

<!-- @include: ./tooltip-meta.md -->


## Examples

### Basic usage
The most basic usage of the tooltip component, adding some custom styling.

<ComponentPreview name="tooltip/basic" />

### With popover props
Customizing some popover properties.

<ComponentPreview name="tooltip/popover" />