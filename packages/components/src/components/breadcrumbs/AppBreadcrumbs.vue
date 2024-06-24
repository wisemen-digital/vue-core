<script setup lang="ts">
import { computed } from 'vue'

import AppBreadcrumbDivider from '@/components/breadcrumbs/AppBreadcrumbDivider.vue'
import AppBreadcrumbItem from '@/components/breadcrumbs/AppBreadcrumbItem.vue'
import { useBreadcrumbsStyle } from '@/components/breadcrumbs/breadcrumbs.style'
import type { BreadcrumbItem } from '@/types/breadcrumbItem.type'

const props = defineProps<{
  /**
   * The items to display in the breadcrumb.
   */
  items: BreadcrumbItem[]
}>()

const breadcrumbsVariants = useBreadcrumbsStyle()
const breadcrumbsContainerClasses = computed<string>(() => breadcrumbsVariants.container())
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol :class="breadcrumbsContainerClasses">
      <template
        v-for="(item, i) of props.items"
        :key="i"
      >
        <AppBreadcrumbItem :item="item" />

        <AppBreadcrumbDivider v-if="i < props.items.length - 1" />
      </template>
    </ol>
  </nav>
</template>
