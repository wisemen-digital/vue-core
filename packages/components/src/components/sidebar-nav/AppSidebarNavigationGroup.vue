<script setup lang="ts">
import { computed } from 'vue'

import AppText from '@/components/text/AppText.vue'
import type { NavigationItemGroup } from '@/types/navigationItem.type'

import { useSidebarNavStyle } from './sidebarNav.style'

const props = defineProps<{
  item: NavigationItemGroup
}>()

const sidebarNavStyle = useSidebarNavStyle()

const groupContainerClasses = computed<string>(() => sidebarNavStyle.groupContainer())
const groupTitleClasses = computed<string>(() => sidebarNavStyle.groupTitle())
</script>

<template>
  <ul :class="groupContainerClasses">
    <AppText
      :class="groupTitleClasses"
      variant="caption"
    >
      {{ props.item.label }}
    </AppText>
    <slot />
  </ul>
</template>
