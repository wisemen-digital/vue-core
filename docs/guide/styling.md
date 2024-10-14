# Style Configuration API

This API provides a method for defining and applying component-level style configurations using CSS variables. Each component has its own style configuration schema, which can be customized and applied globally.

## `defineStyleConfig` Function

The `defineStyleConfig` function allows you to define and apply custom styles for components using CSS variables. It dynamically creates and injects a `CSSStyleSheet` into the document, setting CSS properties based on the provided configuration for each component.

### Usage

```ts
import { defineStyleConfig } from '@wisemen/vue-core'

defineStyleConfig({
  // the component to style
  component: 'button',
  // CSS selector where styles will be applied
  // :root means the styles will be applied to every component. 
  // If you want to apply styles to a specific component, you can use css selector.
  selector: ':root', // or e.g. '.button-custom' or '.dark'
  config: {
    '--button-bg-color-default': 'var(--bg-primary)',
    '--button-border-radius-default': 'var(--radius-md)',
  },
})
```

## Prop-Based Customization

You can also customize a component by providing a `style-config` prop directly to it. This approach is useful when the customization is minimal and does not require creating a separate configuration with `defineStyleConfig`. This allows for inline and scoped styling on a per-instance basis.

### Usage

```vue
<template>
  <AppButton 
    :style-config="{
      '--button-bg-color-default': 'var(--bg-primary)',
      '--button-border-radius-default': 'var(--radius-md)',
    }"
  >
    Button
  </AppButton>
</template>
```