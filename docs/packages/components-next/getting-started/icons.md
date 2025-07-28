# Extending Icons

You can extend the default icons provided by `@wisemen/vue-core` using the `extendIcons` function. This allows you to add custom icons or override existing ones as needed.

## Adding Custom Icons

To add or extend icons, create a new file `@/icons/icons.ts` and define your custom icons as follows:

```ts
import type { Component } from 'vue'

// Define your custom icons
export const icons = {
  yourCustomIcon: import('./YourCustomIcon.vue'),
} satisfies Record<string, Component>

// Define a type to extend the existing icons
type CustomIcons = {
  [K in keyof typeof icons]: Component
}

// Extend the `Icons` interface in `@wisemen/vue-core`
declare module '@wisemen/vue-core-components' {
  interface Icons extends CustomIcons {}
}
```

## Registering Custom Icons

Once you've defined your custom icons, register them in your `main.ts` file to extend the existing icon set:

```ts
import { extendIcons } from '@wisemen/vue-core-cmponents'
import { icons } from '@/icons/icons.ts'

extendIcons(icons)
```

## Notes
- Custom icons must be Vue components.
- You can override existing icons by defining an icon with the same key as a built-in icon.
- Ensure your custom icons are correctly imported and referenced to avoid runtime errors.

By following these steps, you can seamlessly extend or override the icons in `@wisemen/vue-core` to suit your project's needs.
