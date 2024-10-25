<script setup lang="ts">
import { computed } from 'vue'

import AppBreadcrumbItem from '@/components/breadcrumbs/AppBreadcrumbItem.vue'
import AppBreadcrumbSeparator from '@/components/breadcrumbs/AppBreadcrumbSeparator.vue'
import { useBreadcrumbsStyle } from '@/components/breadcrumbs/breadcrumbs.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { BreadcrumbItem } from '@/types/breadcrumb.type'

const props = defineProps<{
  /**
   * The items to display in the breadcrumb.
   */
  items: BreadcrumbItem[]
}>()

const themeProviderContext = injectThemeProviderContext()

const breadcrumbsVariants = useBreadcrumbsStyle()
const breadcrumbsContainerClasses = computed<string>(() => breadcrumbsVariants.container())
</script>

<template>
  <nav
    :class="themeProviderContext.theme.value"
    aria-label="breadcrumb"
  >
    <ol :class="breadcrumbsContainerClasses">
      <template
        v-for="(item, i) of props.items"
        :key="i"
      >
        <AppBreadcrumbItem :item="item" />

        <AppBreadcrumbSeparator v-if="i < props.items.length - 1" />
      </template>
    </ol>
  </nav>
</template>
