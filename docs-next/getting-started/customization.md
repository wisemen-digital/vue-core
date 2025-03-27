# Customization

## Overview

All components in the library use [Tailwind Variants](https://www.tailwind-variants.org/), enabling seamless customization. Each slot can be extended with custom classes for greater flexibility.

Customization can be applied in two ways:

1. **Global Customization** – Modify component styles globally using `defineComponentVariant`.
2. **Inline Customization** – Apply custom styles directly on specific component instances using the `class-config` prop.

## Global Customization

Global customization allows you to define reusable styles for components across your application. Use the `defineComponentVariant` function to specify global configurations.

### Usage

```ts
import { defineComponentVariant } from '@wisemen/vue-core-components'
```

### Function Properties

#### Required:
- **`component`**: Name of the component to customize.
- **`config`**: Object containing custom class configuration.

#### Optional:
- **`target`**: Specifies the prop to target. If omitted, all variants of the component are customized.
- **`theme`**: Specifies the theme to target. Defaults to all themes if omitted.

---

### Extending Existing Variants

The following example customizes the `Button` component globally by applying a gradient background to the `primary` variant within the `default` theme:

```ts
defineComponentVariant({
  component: 'button',
  config: {
    root: 'bg-gradient-to-r from-brand-500 to-brand-700',
  },
  target: {
    prop: 'variant',
    value: 'primary',
  },
  theme: 'default',
})
```

---

### Creating a New Variant

If existing variants do not meet your needs, you can define a custom variant. Ensure proper TypeScript support by extending the `ComponentVariants` interface.

#### Example: Defining a Custom `primary-gradient` Variant

```ts
const _componentVariants = [
  defineComponentVariant({
    component: 'button',
    config: {
      root: 'bg-gradient-to-r from-brand-500 to-brand-700',
    },
    target: {
      prop: 'variant',
      value: 'primary-gradient',
    },
    theme: 'default',
  })
]

// Extend the ComponentVariants interface to include the new variant

declare module '@wisemen/vue-core-components' {
  interface ComponentVariants {
    variants: typeof _componentVariants
  }
}
```

## Inline Customization

Inline customization allows direct styling of specific components without affecting global styles.

### Usage

Use the `class-config` prop to apply styles at the instance level while retaining base theme styles.

#### Example: Inline Button Customization

```vue
<Button
  :class-config="{
    root: 'bg-gradient-to-r from-brand-500 to-brand-700',
  }"
>
  ...
</Button>
```