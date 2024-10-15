<script setup lang="ts">
import {
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from 'reka-ui'
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
const dropdownClasses = computed<string>(() => style.dropdown())
const dropdownContentClasses = computed<string>(() => style.dropdownContent())
</script>

<template>
  <DropdownMenuSub>
    <DropdownMenuSubTrigger :class="itemClasses">
      <AppIcon
        v-if="props.item.icon !== undefined"
        :icon="props.item.icon"
        :class="itemIconClasses"
      />

      <slot name="sub-menu-trigger-content">
        {{ props.item.label }}
      </slot>

      <AppIcon
        icon="chevronRight"
        class="ml-auto"
      />
    </DropdownMenuSubTrigger>

    <DropdownMenuPortal>
      <DropdownMenuSubContent
        :class="[dropdownClasses, dropdownContentClasses]"
        :side-offset="10"
      >
        <slot />
      </DropdownMenuSubContent>
    </dropdownmenuportal>
  </DropdownMenuSub>
</template>
