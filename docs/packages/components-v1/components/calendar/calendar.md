# Calendar

Expanded calendar component

<BulletList
  :items="[
    {
      description: 'When you need an expanded calended with selectable dates.',
      variant: 'good',
    },
    {
      description: 'If you need a date select within a form',
      variant: 'bad',
      link: {
        label: 'Date Field',
        href: '/vue-core/components/date-field/date-field.html',
      },
    },
  ]"
/>

## Import

```ts
import { VcCalendar } from '@wisemen/vue-core'
```

<!-- @include: ./calendar-meta.md -->

## Examples

### Basic
Basic example of an expanded calendar component, using additional content in the date slot.

<ComponentPreviewV1 name="calendar/basic" />
