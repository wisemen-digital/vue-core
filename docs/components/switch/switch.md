# Switch

## Use cases

<BulletList
  :items="[
    {
      description: 'When you need a simple on/off toggle for a setting.',
      variant: 'good',
    },
    {
      description: 'When users need to choose between more than two options.',
      variant: 'bad',
      link: {
        label: 'Radio Group',
        href: '/vue-core/components/radio-group/radio-group.html'
      }
    },
    {
      description: 'If the toggle represents user consent or confirmationm or a critical action.',
      variant: 'bad',
      link: {
        label: 'Checkbox',
        href: '/vue-core/components/checkbox/checkbox.html'
      },
    }
  ]"
/>


## Import

```ts
import { VcSwitch } from '@wisemen/vue-core'
```

<!-- @include: ./switch-meta.md -->

## Examples

### Basic usage
The most basic usage of the switch component.

<ComponentPreview name="switch/basic" />

### Within a form
Supporting usage within a form.

<ComponentPreview name="switch/form" />

### Custom styling
Add a little bit of... spice ✨

<ComponentPreview name="switch/styled" />