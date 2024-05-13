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

```vue [Source code]
<script setup lang="ts">
import AppSkeletonLoaderRow from '@/components/skeleton-loader/AppSkeletonLoaderRow.vue'

const props = withDefaults(
  defineProps<{
    rows?: number
  }>(),
  {
    rows: 3,
  },
)
</script>

<template>
  <div class="flex flex-col gap-y-4 p-4">
    <AppSkeletonLoaderRow
      v-for="i in props.rows"
      :key="i"
    />
  </div>
</template>
```

:::