---
sidebar: auto
---


# AppIcon

<!-- @include: ./app-icon-meta.md -->

## Types

::: code-group
```ts [sizeOptions]
export const sizeOptions = {
  default: 'h-4 w-4',
  full: 'h-full w-full',
  lg: 'h-5 w-5',
  sm: 'h-3 w-3',
  xl: 'h-6 w-6',
  xs: 'h-2 w-2',
  xxl: 'h-8 w-8',
}
```
::: 


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppIcon } from '@wisemen/vue-core'
</script>
  
<template>
  <AppIcon icon="search" size="lg" />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/icon/AppIcon.vue).
