# Text Field


## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to allow users to input a short text.',
      variant: 'good',
    },
    {
      description: 'When you want to allow users to input a long text.',
      variant: 'bad',
      link: {
        label: 'Textarea',
        href: '/vue-core/components/textarea/textarea.html'
      }
    },
  ]"
/>

## Import

```ts
import { VcTextField } from '@wisemen/vue-core'
```
<!-- @include: ./text-field-meta.md -->

## Examples

### Basic usage
The most basic usage of the text field component.

<ComponentPreview name="text-field/basic" />