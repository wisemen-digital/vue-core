# Getting Started with @wisemen/vue-core

## Installation

To get started with `@wisemen/vue-core`, first install the package by running the following command:

```bash
pnpm i @wisemen/vue-core
```

## Setting Up Styles

To apply the necessary styles, import them into your main.ts:
```ts
import '@wisemen/vue-core/style.css'
```

The `setupDefaultStyles` function is provided to apply default styles to all components variants. This function can be called once at the beginning of your application to ensure consistent styling across your application.


```ts
import { setupDefaultStyles } from '@wisemen/vue-core'

setupDefaultStyles()
```
