<script setup lang="ts">
import { VcBreadcrumbs, BreadcrumbItem } from '@wisemen/vue-core'

const items: BreadcrumbItem[] = [
  {
    label: 'Home',
    type: 'page',
  },
  {
    label: 'Calendar',
    type: 'page',
    icon: 'dateFieldIconRight',
  },
]
</script>

<template>
  <VcBreadcrumbs :items="items">
    Button
  </VcBreadcrumbs>
</template>
