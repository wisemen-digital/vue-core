<script setup lang="ts">
import {
  DropdownMenuGroup as RekaDropdownMenuGroup,
  DropdownMenuLabel,
} from 'reka-ui'
import { computed } from 'vue'

import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style.js'
import type { DropdownMenuGroup } from '@/types/dropdownMenu.type.js'

const props = defineProps<{
  item: DropdownMenuGroup
}>()

const style = dropdownMenuStyle()

const groupLabelClasses = computed<string>(() => style.groupLabel())
const groupContentClasses = computed<string>(() => style.groupContent())
</script>

<template>
  <RekaDropdownMenuGroup>
    <DropdownMenuLabel
      v-if="props.item.label !== undefined"
      :class="groupLabelClasses"
    >
      <slot name="group-label">
        {{ props.item.label }}
      </slot>
    </DropdownMenuLabel>

    <div :class="groupContentClasses">
      <slot />
    </div>
  </RekaDropdownMenuGroup>
</template>
