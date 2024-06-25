<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import AppBreadcrumbEllipsis from '@/components/breadcrumbs/AppBreadcrumbEllipsis.vue'
import { useBreadcrumbsStyle } from '@/components/breadcrumbs/breadcrumbs.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppText from '@/components/text/AppText.vue'
import type { BreadcrumbItem } from '@/types/breadcrumbItem.type'

const props = defineProps<{
  item: BreadcrumbItem
}>()

const breadcrumbItemVariants = useBreadcrumbsStyle()

const breadcrumbRouteClasses = computed<string>(() => breadcrumbItemVariants.itemRoute())
const breadcrumbRouteIconClasses = computed<string>(() => breadcrumbItemVariants.itemRouteIcon())
const breadcrumbRouteTextClasses = computed<string>(() => breadcrumbItemVariants.itemRouteText())

const breadcrumbPageClasses = computed<string>(() => breadcrumbItemVariants.itemPage())
const breadcrumbPageIconClasses = computed<string>(() => breadcrumbItemVariants.itemPageIcon())
const breadcrumbPageTextClasses = computed<string>(() => breadcrumbItemVariants.itemPageText())
</script>

<template>
  <li>
    <RouterLink
      v-if="props.item.type === 'route'"
      :to="props.item.to"
      :class="breadcrumbRouteClasses"
    >
      <AppIcon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        :class="breadcrumbRouteIconClasses"
      />

      <AppText
        v-if="props.item.label !== undefined"
        :class="breadcrumbRouteTextClasses"
        variant="subtext"
      >
        {{ props.item.label }}
      </AppText>
    </RouterLink>

    <AppBreadcrumbEllipsis
      v-else-if="props.item.type === 'ellipsis'"
      :item="props.item"
    />

    <div
      v-else-if="props.item.type === 'page'"
      :class="breadcrumbPageClasses"
    >
      <AppIcon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        :class="breadcrumbPageIconClasses"
      />

      <AppText
        v-if="props.item.label !== undefined"
        :class="breadcrumbPageTextClasses"
        variant="subtext"
      >
        {{ props.item.label }}
      </AppText>
    </div>
  </li>
</template>
