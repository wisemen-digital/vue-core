<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { BreadcrumbItem } from '../../types/breadcrumbItem.type'
import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'
import AppBreadcrumbEllipsis from './AppBreadcrumbEllipsis.vue'

const props = defineProps<{
  item: BreadcrumbItem
}>()
</script>

<template>
  <li>
    <RouterLink
      v-if="props.item.type === 'route'"
      :to="props.item.to"
      class="flex items-center gap-x-2 rounded p-0.5 outline-none ring-offset-background duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <AppIcon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        class="text-muted-foreground/75"
      />

      <AppText
        v-if="props.item.label !== undefined"
        variant="subtext"
        class="max-w-32 truncate text-muted-foreground/75"
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
      class="flex items-center gap-x-2 p-0.5"
    >
      <AppIcon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        class="text-muted-foreground"
      />

      <AppText
        v-if="props.item.label !== undefined"
        variant="subtext"
        class="max-w-32 truncate text-muted-foreground"
      >
        {{ props.item.label }}
      </AppText>
    </div>
  </li>
</template>
