---
sidebar: auto
---


# AppIcon
<script setup>
import AppIconPlayground from './AppIconPlayground.vue'
</script>

<AppIconPlayground />


## Props

| Prop | Type                     | Description              | Default     |
| ---- | ------------------------ | ------------------------ | ----------- |
| icon | `Icon`                   | The icon to be displayed |             |
| size | `IconStyleProps['size']` | the size of the icon     | `'default'` |


## Types

::: code-group
```js [IconStyleProps['size']]
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

```vue [Source code]
<script setup lang="ts">
import type { Component } from 'vue'
import { shallowRef, watch } from 'vue'

import { type IconStyleProps, iconVariants } from '@/components/icon/icon.style'
import { type Icon, icons } from '@/icons/icons'
import { cn } from '@/utils/style.util'

const props = withDefaults(
  defineProps<{
    icon: Icon
    size?: IconStyleProps['size']
  }>(),
  {
    size: 'default',
  },
)

const svgComponent = shallowRef<Component | null>(null)

watch(
  () => props.icon,
  async () => {
    const resolvedComponent = await icons[props.icon]

    svgComponent.value = resolvedComponent.default
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <Component
    :is="svgComponent"
    v-if="svgComponent !== null"
    :class="cn(iconVariants({ size }))"
  />
</template>
```

:::