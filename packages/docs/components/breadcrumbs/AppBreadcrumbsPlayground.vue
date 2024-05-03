<script setup lang="ts">
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue';
import { BreadcrumbItem } from '@/index';
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

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
  <ComponentPlayground :controls="null">
    <template #default="{ values }">
      <AppBreadcrumbs v-bind="values" :items="items" />
    </template>
  </ComponentPlayground>
</template>
