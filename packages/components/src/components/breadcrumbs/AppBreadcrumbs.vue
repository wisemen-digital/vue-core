<script setup lang="ts">
import type { BreadcrumbItem } from '../../types/breadcrumbItem.type'
import AppBreadcrumbDivider from './AppBreadcrumbDivider.vue'
import AppBreadcrumbItem from './AppBreadcrumbItem.vue'

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
