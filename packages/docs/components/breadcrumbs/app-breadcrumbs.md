---
sidebar: auto
---


# AppBreadcrumbs
<script setup>
import AppBreadcrumbsPlayground from './AppBreadcrumbsPlayground.vue'
</script>

<AppBreadcrumbsPlayground />


## Props

| Prop  | Type               | Description                             | Default |
| ----- | ------------------ | --------------------------------------- | ------- |
| items | `BreadcrumbItem[]` | The items to display in the breadcrumb. |         |

## Types

::: code-group
```ts [BreadcrumbItem]
export interface BreadcrumbRoute {
  icon?: Icon
  label?: string
  to: RouteLocationNamedRaw
  type: 'route'
}

export interface BreadcrumbEllipsis {
  items: BreadcrumbRoute[]
  type: 'ellipsis'
}

export interface BreadcrumbCurrentRoute {
  icon?: Icon
  label?: string
  type: 'page'
}

export type BreadcrumbItem = BreadcrumbCurrentRoute | BreadcrumbEllipsis | BreadcrumbRoute
```
:::


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppBreadcrumbs } from '@wisemen/vue-core'

const items: BreadcrumbItem[] = [
  {
    icon: 'alertCircle',
    label: 'Page 1',
    type: 'page'
  },
  {
    label: 'Page 2',
    type: 'page'
  }
]
</script>
  
<template>
  <AppBreadcrumbs :items="items" />
</template>
```

```vue [Source code]
<script setup lang="ts">
import AppBreadcrumbDivider from '@/components/breadcrumbs/AppBreadcrumbDivider.vue'
import AppBreadcrumbItem from '@/components/breadcrumbs/AppBreadcrumbItem.vue'
import type { BreadcrumbItem } from '@/types/breadcrumbItem.type'

const props = defineProps<{
  /**
   * The items to display in the breadcrumb.
   */
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="flex items-center gap-x-3">
      <template
        v-for="(item, i) of props.items"
        :key="item.label"
      >
        <AppBreadcrumbItem :item="item" />

        <AppBreadcrumbDivider v-if="i < props.items.length - 1" />
      </template>
    </ol>
  </nav>
</template>
```

:::