# Button

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
import { VcButton } from '@wisemen/vue-core'
```

<!-- @include: ./button-meta.md -->

## Examples

### Variant
By providing the `variant` prop, you can change the appearance of the button.

<ComponentPreview name="button/variants" />

### Size
By providing the `size` prop, you can change the size of the button.

<ComponentPreview name="button/size" />

### Disabled
You can disable the button component by setting the `is-disabled` prop to `true`, preventing user interaction.

<ComponentPreview name="button/disabled" />

### Loading
You can show a loading state by setting the `is-loading` prop to `true`, indicating that the button is in a loading state.

<ComponentPreview name="button/loading" />

To customize the loading state, you can provide a custom template for the `loader` slot.

<ComponentPreview name="button/loading-slot" />

### Icons
You can add icons to the left and right side of the button by using the `icon-left` and `icon-right` slots.

<ComponentPreview name="button/icons" />

To customize the icons, you can provide a custom template for the `icon-left` and `icon-right` slots.

<ComponentPreview name="button/icon-slot" />

### Custom
While it's not possible through the `defineConfig` API or the `style-config` prop, you can still customise the button using the class prop and existing Tailwind selectors like *active*, *hover*, and *focus* and other classes.

<ComponentPreview name="button/custom" />


## Style Config

These are all the properties you can customize for the button

```ts
interface ButtonStyleConfig {
  '--button-bg-color-active': string
  '--button-bg-color-default': string
  '--button-bg-color-disabled': string
  '--button-bg-color-focus': string
  '--button-bg-color-hover': string

  '--button-border-color-active': string
  '--button-border-color-default': string
  '--button-border-color-disabled': string
  '--button-border-color-focus': string
  '--button-border-color-hover': string
  '--button-border-radius-default': string
  
  '--button-font-size-default': string
  '--button-font-weight-default': string
  '--button-height-default': string

  '--button-icon-color-active': string
  '--button-icon-color-default': string
  '--button-icon-color-disabled': string
  '--button-icon-color-focus': string
  '--button-icon-color-hover': string
  // Spacing between icon and text. To change the spacing between icon and border,
  // refer to `--button-padding-left-default`
  '--button-icon-left-spacing-default': string
  // Spacing between icon and text. To change the spacing between icon and border,
  // refer to `--button-padding-right-default`
  '--button-icon-right-spacing-default': string
  '--button-icon-size-default': string

  '--button-justify-content-default': string

  '--button-loader-color-active': string
  '--button-loader-color-default': string
  '--button-loader-color-disabled': string
  '--button-loader-color-focus': string
  '--button-loader-color-hover': string
  '--button-loader-size-default': string

  '--button-padding-left-default': string
  '--button-padding-right-default': string

  '--button-ring-color-focus': string
  '--button-ring-offset-color-focus': string

  '--button-shadow-active': string
  '--button-shadow-default': string
  '--button-shadow-disabled': string
  '--button-shadow-focus': string
  '--button-shadow-hover': string

  '--button-text-color-active': string
  '--button-text-color-default': string
  '--button-text-color-disabled': string
  '--button-text-color-focus': string
  '--button-text-color-hover': string
}
```