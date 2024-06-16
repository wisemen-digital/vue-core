---
sidebar: auto
---


# AppTableSkeletonLoader
<script setup>
import AppTableSkeletonLoaderPlayground from './AppTableSkeletonLoaderPlayground.vue'
</script>

<AppTableSkeletonLoaderPlayground />

## Props

| Prop         | Type    | Description                                      | Default |
| ------------ | ------- | ------------------------------------------------ | ------- |
| numberOfRows |`number` | The number of skeleton rows to show in the table |   `7`   |
| withoutHeader|`boolean`| Set to true to hide the table header             | `false` |

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppTableSkeletonLoader } from '@wisemen/vue-core'
</script>
  
<template>
  <div class="w-full rounded-xl border border-solid border-border bg-background p-4">
    <AppTableSkeletonLoader
      :number-of-rows="4"
    />
  </div>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/table/AppTableSkeletonLoader.vue).
