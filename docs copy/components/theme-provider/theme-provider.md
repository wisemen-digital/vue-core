# ThemeProvider

## Description

The `ThemeProvider` component is a component that is designed to manage and provide theming functionality. It enables the use of different themes, such as "dark" or "light," and makes the selected theme available to other components via context.

The entire application should be wrapped in `ThemeProvider` to ensure a consistent theme (e.g., "dark" or "light") is applied globally. However, specific parts of the app can override this global theme by defining another `ThemeProvider` deeper in the component tree. This allows for localized theming where certain sections of the app can have a different theme than the global one, providing flexibility for areas that need unique styling.

```vue
<script setup lang="ts">
import { VcThemeProvider } from '@wisemen/vue-core'
</script>

<template>
  <VcThemeProvider theme="light">
    <!-- Your app content here -->
  </VcThemeProvider>
</template>
```
