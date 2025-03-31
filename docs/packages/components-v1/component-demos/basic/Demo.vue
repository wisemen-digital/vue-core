<script setup lang="ts">
import type { BreadcrumbItem } from '@wisemen/vue-core'
import { VcBreadcrumbs } from '@wisemen/vue-core'

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
