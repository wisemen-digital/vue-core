---
sidebar: auto
---


# AppBreadcrumbs

<!-- @include: ./app-breadcrumbs-meta.md -->

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
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/breadcrumbs/AppBreadcrumbs.vue).