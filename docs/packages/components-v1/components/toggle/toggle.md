# Toggle

An unstyled two-state button that can be either on or off.

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want users toggle between two states.',
      variant: 'good',
    },
    {
      description: 'When the toggle is part of a form.',
      variant: 'bad',
      link: {
        label: 'Checkbox',
        href: '/vue-core/components/checkbox/checkbox',
      },
    },
  ]"
/>

## Import

```ts
import { VcToggle } from '@wisemen/vue-core'
```

<!-- @include: ./toggle-meta.md -->

## Examples

### Basic usage
The component doesn’t render any content by itself, so the default slot is required to display an interactive element.

<ComponentPreviewV1 name="toggle/basic" />