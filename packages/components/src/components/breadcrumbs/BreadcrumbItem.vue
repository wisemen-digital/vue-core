<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import BreadcrumbEllipsis from '@/components/breadcrumbs/BreadcrumbEllipsis.vue'
import { useBreadcrumbsStyle } from '@/components/breadcrumbs/breadcrumbs.style'
import Icon from '@/components/icon/Icon.vue'
import type { BreadcrumbItem } from '@/types/breadcrumb.type'

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
      <Icon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        :class="breadcrumbRouteIconClasses"
      />

      <span
        v-if="props.item.label !== undefined"
        :class="breadcrumbRouteTextClasses"
        class="text-primary text-sm"
      >
        {{ props.item.label }}
      </span>
    </RouterLink>

    <BreadcrumbEllipsis
      v-else-if="props.item.type === 'ellipsis'"
      :item="props.item"
    />

    <div
      v-else-if="props.item.type === 'page'"
      :class="breadcrumbPageClasses"
    >
      <Icon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        :class="breadcrumbPageIconClasses"
      />

      <span
        v-if="props.item.label !== undefined"
        :class="breadcrumbPageTextClasses"
        class="text-primary text-sm"
      >
        {{ props.item.label }}
      </span>
    </div>
  </li>
</template>
