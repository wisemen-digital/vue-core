# AppThemeProvider

The `AppThemeProvider` component is a component that is designed to manage and provide theming functionality. It enables the use of different themes, such as "dark" or "light," and makes the selected theme available to other components via context.

The entire application should be wrapped in `AppThemeProvider` to ensure a consistent theme (e.g., "dark" or "light") is applied globally. However, specific parts of the app can override this global theme by defining another `AppThemeProvider` deeper in the component tree. This allows for localized theming where certain sections of the app can have a different theme than the global one, providing flexibility for areas that need unique styling.

```vue
<script setup lang="ts">
import { AppThemeProvider } from '@wisemen/vue-core'
</script>

<template>
  <AppThemeProvider theme="light">
    <!-- Your app content here -->
  </AppThemeProvider>
</template>
```
