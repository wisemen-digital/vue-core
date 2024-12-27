<script setup lang="ts">
import { computed } from 'vue'

import BreadcrumbItem from '@/components/breadcrumbs/BreadcrumbItem.vue'
import { useBreadcrumbsStyle } from '@/components/breadcrumbs/breadcrumbs.style'
import BreadcrumbSeparator from '@/components/breadcrumbs/BreadcrumbSeparator.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types/breadcrumb.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = defineProps<{
  /**
   * The items to display in the breadcrumb.
   */
  items: BreadcrumbItemType[]
}>()

const themeProviderContext = injectThemeProviderContext()

const breadcrumbsVariants = useBreadcrumbsStyle()
const breadcrumbsContainerClasses = computed<string>(() => breadcrumbsVariants.container())
</script>

<template>
  <nav
    :class="ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.isDarkModeEnabled.value)"
    aria-label="breadcrumb"
  >
    <ol :class="breadcrumbsContainerClasses">
      <template
        v-for="(item, i) of props.items"
        :key="i"
      >
        <BreadcrumbItem :item="item" />

        <BreadcrumbSeparator v-if="i < props.items.length - 1" />
      </template>
    </ol>
  </nav>
</template>
