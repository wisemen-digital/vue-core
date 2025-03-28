# Style Configuration API

This API provides a method for defining and applying component-level style configurations using CSS variables. Each component has its own style configuration schema, which can be customized and applied globally.

## Default Styles

To apply the necessary styles, import them into your main css file:
```css
/* base.css */

@import '@wisemen/vue-core/style.css' layer(base);
```

The `setupDefaultStyles` function is provided to apply default styles to all components. This function can be called once at the beginning of your application to ensure consistent styling across your application.

```ts
// main.ts

import { setupDefaultStyles } from '@wisemen/vue-core'

setupDefaultStyles()
```

## `defineStyleConfig` Function

The `defineStyleConfig` function allows you to define and apply custom styles for components using CSS variables. It dynamically creates and injects styles into the document, setting CSS properties based on the provided configuration for each component.

### Usage

```ts
import { defineStyleConfig } from '@wisemen/vue-core'

defineStyleConfig({
  // The component to style
  component: 'button',
  // Variant to apply the classes to. Can be an existing variant or a new one.
  variant: 'primary',
  // The configuration for the styles. All available options can be found in the component's documentation.
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


## Examples & recommanded structure
1. Create your custom style.

In this case, i want my drawer, used overall in the app, to have no padding, so i am pointing to the default variant. <br>
I also want a very specific button styling, so i am pointing my style to a custom variant.

```ts
// src/component-styles/drawer/defaultDrawerVariants.style.ts
defineStyleConfig({
  colorScheme: '*',
  config: {
    '--drawer-padding-default': '0px',
  },
  theme: 'default',
  variant: 'default',
  component: 'drawer',
})

// src/component-styles/button/defaultButtonVariants.style.ts
defineStyleConfig({
  colorScheme: '*',
  config: {
    '--button-bg-color-default': 'var(--purple-900)',
    // other styles
  },
  theme: 'default',
  variant: 'solid-purple',
  component: 'button',
})
```
2. Import all your custom styles within one function
```ts
// src/assets/styles/index.ts
export function setupCustomStyles(): void {
  import ('@/component-styles/drawer/defaultDrawerVariants.style.ts')
  import ('@/component-styles/button/defaultButtonVariants.style.ts')
}
```
3. Provide your custom styles
```ts
// main.ts
import { setupCustomStyles } from '@/assets/styles/index.ts'

setupCustomStyles()
```
4. Style away

In my case, all drawers in the app that use the default variant won't have any padding. <br>
For my custom button variant, i can use it via a class with the format `class='component-name-variant'`
```vue
<VcButton
  icon-left="plus"
  class="button-solid-purple"
  @click="onAddProduct"
>
  {{ i18n.t('products.add') }}
</VcButton>
```