# Style Configuration API

This API provides a method for defining and applying component-level style configurations using CSS variables. Each component has its own style configuration schema, which can be customized and applied globally.

## `defineStyleConfig` Function

The `defineStyleConfig` function allows you to define and apply custom styles for components using CSS variables. It dynamically creates and injects styles into the document, setting CSS properties based on the provided configuration for each component.

## Default Styles

The `setupDefaultStyles` function is provided to apply default styles to all components. This function can be called once at the beginning of your application to ensure consistent styling across your application.

```ts
import { setupDefaultStyles } from '@wisemen/vue-core'

setupDefaultStyles()
```

### Usage

```ts
import { defineStyleConfig } from '@wisemen/vue-core'

defineStyleConfig({
  // The component to style
  component: 'button',
  // Variant to apply the classes to. Can be an existing variant or a new one.
  variant: 'primary',
  // The configuration for the styles
  config: {
    '--button-bg-color-default': 'var(--bg-primary)',
    '--button-border-radius-default': 'var(--radius-md)',
  },
  // Color scheme to apply the classes to. Can be either `light`, `dark` or `*`.
  colorScheme: '*',
  // Theme to apply the classes to. Can be either `default`, `*` or a custom theme.
  theme: '*',
})
```

## Prop-Based Customization

You can also customize a component by providing a `style-config` prop directly to it. This approach is useful when the customization is minimal and does not require creating a separate configuration with `defineStyleConfig`. This allows for inline and scoped styling on a per-instance basis.

### Usage

```vue
<template>
  <Button 
    :style-config="{
      '--button-bg-color-default': 'var(--bg-primary)',
      '--button-border-radius-default': 'var(--radius-md)',
    }"
  >
    Button
  </AppButton>
</template>
```