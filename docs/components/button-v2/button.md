# Button <badge>V2</badge>

Displays a button or a component that looks like a button.

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want users to trigger an action by clicking the button.',
      variant: 'good',
    },
    {
      description: 'When the immediate action of the button is to navigate to another route.',
      variant: 'bad',
      link: {
        label: 'Router Link Button',
        href: '/vue-core/components/router-link-button/router-link-button',
      },
    },
    {
      description: 'When the button only needs to display an icon.',
      variant: 'bad',
      link: {
        label: 'Icon Button',
        href: '/vue-core/components/icon-button/icon-button',
      },
    },
    {
      description: 'When the button is intended to toggle between two states.',
      variant: 'bad',
      link: {
        label: 'Toggle',
        href: '/vue-core/components/toggle/toggle',
      },
    }
  ]"
/>

## Import

```ts
import { VcButton } from '@wisemen/vue-core/v2'
```

## Usage

### Basic

```html
<VcButton>Button label</VcButton>
```

### Advanced

```html
<VcButtonRoot>
  <VcButtonContentContainer>
    <VcButtonIconLeft />
    Button label
    <VcButtonIconRight />
  </VcButtonContentContainer>

  <VcButtonLoader />
</VcButtonRoot>
```

<!-- @include: ./button-meta.md -->

## Examples

### Variant
By providing the `variant` prop, you can change the appearance of the button.

<ComponentPreview name="button-v2/variants" />