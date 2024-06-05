<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import type { BreadcrumbItem } from '@wisemen/vue-core'
import { AppBreadcrumbs } from '@wisemen/vue-core'

const items: BreadcrumbItem[] = [
  {
    icon: 'alertCircle',
    label: 'Page 1',
    type: 'page',
  },
  {
    label: 'Page 2',
    type: 'page',
  },
]
</script>

<template>
  <ComponentPlayground :controls="null">
    <template #default="{ values }">
      <AppBreadcrumbs
        v-bind="values"
        :items="items"
      />
    </template>
  </ComponentPlayground>
</template>
