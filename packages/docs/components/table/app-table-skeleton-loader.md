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

```vue [Source code]
<script setup lang="ts">
import AppContainer from '@/components/container/AppContainer.vue'

const props = withDefaults(
  defineProps<{
    numberOfRows?: number
    withoutHeader?: boolean
  }>(),
  {
    numberOfRows: 7,
    withoutHeader: false,
  },
)
</script>

<template>
  <div class="w-full">
    <div
      v-if="!props.withoutHeader"
      class="mb-4 border-y border-solid border-border pb-4"
    >
      <AppContainer class="grid grid-cols-table-skeleton gap-x-8 px-8">
        <div
          v-for="i of 4"
          :key="i"
          class="mt-4 rounded-md bg-neutral-100 p-3"
        />
      </AppContainer>
    </div>

    <div class="relative">
      <div
        v-for="i of props.numberOfRows"
        :key="i"
        class="odd:bg-neutral-100"
      >
        <AppContainer class="grid grid-cols-table-skeleton gap-x-8 px-8 py-4">
          <div
            v-for="j of 4"
            :key="j"
            class="rounded-md bg-neutral-200 p-3"
          />
        </AppContainer>
      </div>

      <div class="absolute left-0 top-0 z-10 size-full bg-gradient-to-b from-transparent to-background" />
    </div>
  </div>
</template>
```

:::