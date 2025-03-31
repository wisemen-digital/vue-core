# Extending Icons

You can extend the icons provided by `@wisemen/vue-core` by using the `extendIcons` function. This function allows you to add custom icons or override existing ones.

Create a file `/src/icons/icons.ts` and import the icons you want to extend as follows:

```ts
import type { Component } from 'vue'

export const icons = {
  yourCustomIcon: import('./YourCustomIcon.vue'),
} satisfies Record<string, Component>

type CustomIcons = {
  [K in keyof typeof icons]: Component
}

declare module '@wisemen/vue-core' {
  interface Icons extends CustomIcons {}
}
```

Then, in your `main.ts` file, import the icons and extend them as follows:

```ts
import { extendIcons } from '@wisemen/vue-core'
import { icons } from '@/icons/icons.ts'

extendIcons(icons)
```

Some components have their own icons, which are documented at the bottom of the component page.