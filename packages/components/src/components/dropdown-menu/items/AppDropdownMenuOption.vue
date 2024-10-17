<script setup lang="ts">
import { DropdownMenuItem as RekaDropdownMenuItem } from 'reka-ui'
import { computed } from 'vue'

import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style.js'
import AppIcon from '@/components/icon/AppIcon.vue'
import type { DropdownMenuOption } from '@/types/dropdownMenu.type.js'

const props = defineProps<{
  item: DropdownMenuOption
}>()

const style = dropdownMenuStyle()

const itemClasses = computed<string>(() => style.item({
  isDestructive: props.item.isDestructive,
}))

const itemIconClasses = computed<string>(() => style.itemIcon({
  isDestructive: props.item.isDestructive,
}))
</script>

<template>
  <RekaDropdownMenuItem
    :class="itemClasses"
    :disabled="props.item.isDisabled"
    @select="props.item.onSelect"
  >
    <AppIcon
      v-if="props.item.icon !== undefined"
      :class="itemIconClasses"
      :icon="props.item.icon"
    />

    <slot name="option-content">
      {{ props.item.label }}
    </slot>
  </RekaDropdownMenuItem>
</template>
