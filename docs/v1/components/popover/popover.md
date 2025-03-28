# Popover

## Use cases

<BulletList
  :items="[
    {
      description: 'When you need a tooltip-like behavior but with more content or interactivity.',
      variant: 'good',
    },
    {
      description: 'When the content you want to display is a list of selectable options.',
      variant: 'bad',
      link: {
        labeL: 'DropdownMenu',
        href: '/vue-core/components/dropdown-menu/dropdown-menu.html'
      }
    },
  ]"
/>

## Import

```ts
import { useDrawer } from '@wisemen/vue-core'
```

<!-- @include: ./popover-meta.md -->

## Examples

### Basic usage
The most basic usage of the popover component.

<ComponentPreview name="popover/basic" />