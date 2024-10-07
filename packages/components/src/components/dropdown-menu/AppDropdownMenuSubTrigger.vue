<script setup lang="ts">
import { DropdownMenuSubTrigger } from 'reka-ui'
import { computed } from 'vue'

import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style.js'
import AppIcon from '@/components/icon/AppIcon.vue'
import type { DropdownMenuSubMenu } from '@/types/dropdownMenu.type.js'

const props = defineProps<{
  item: DropdownMenuSubMenu
}>()

const style = dropdownMenuStyle()

const itemClasses = computed<string>(() => style.item())
const itemIconClasses = computed<string>(() => style.itemIcon())
</script>

<template>
  <DropdownMenuSubTrigger :class="itemClasses">
    <AppIcon
      v-if="props.item.icon !== undefined"
      :icon="props.item.icon"
      :class="itemIconClasses"
    />

    {{ props.item.label }}

    <AppIcon
      icon="chevronRight"
      class="ml-auto"
    />
  </DropdownMenuSubTrigger>
</template>
