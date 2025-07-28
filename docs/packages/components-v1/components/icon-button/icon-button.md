# Icon Button

Displays a button with only an icon.

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
  ]"
/>

## Import

```ts
import { VcIconButton } from '@wisemen/vue-core'
```

<!-- @include: ./icon-button-meta.md -->

## Examples

### Variant
By providing the `variant` prop, you can change the appearance of the icon button.

<ComponentPreviewV1 name="icon-button/variants" />

### Size
By providing the `size` prop, you can change the size of the icon button.

<ComponentPreviewV1 name="icon-button/size" />

### Disabled
You can disable the icon button component by setting the `is-disabled` prop to `true`, preventing user interaction.

<ComponentPreviewV1 name="icon-button/disabled" />

### Loading
You can show a loading state by setting the `is-loading` prop to `true`, indicating that the icon button is in a loading state.

<ComponentPreviewV1 name="icon-button/loading" />

To customize the loading state, you can provide a custom template for the `loader` slot.

<ComponentPreviewV1 name="icon-button/loading-slot" />
