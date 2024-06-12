# Getting started

## Installation

```bash
pnpm i @wisemen/vue-core
```

Import the base styling in `main.ts`
```ts
import '@wisemen/vue-core/style.css'
```

If you want to use custom icons, extend them as follows:
```ts
import { extendIcons } from '@wisemen/vue-core'
import type { Component } from 'vue'

export const icons = {
  // your custom icons
} satisfies Record<string, Component>

extendIcons(icons)

type CustomIcons = {
  [K in keyof typeof icons]: Component
}

declare module '@wisemen/vue-core' {
  interface Icons extends CustomIcons {}
}

```