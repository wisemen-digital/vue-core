---
sidebar: auto
---


# AppSkeletonLoaderRows
<script setup>
import AppSkeletonLoaderRowsPlayground from './AppSkeletonLoaderRowsPlayground.vue'
</script>

<AppSkeletonLoaderRowsPlayground />

## Props

| Prop | Type   | Description                         | Default |
| ---- | ------ | ----------------------------------- | ------- |
| rows |`number`| The number of skeleton rows to show |   `3`   |

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppSkeletonLoaderRows } from '@wisemen/vue-core'
</script>
  
<template>
  <div class="w-full bg-background p-4">
    <AppSkeletonLoaderRows :rows="4" />
  </div>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/skeleton-loader/AppSkeletonLoaderRows.vue).