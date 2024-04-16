<script setup lang="ts">
import { DropdownMenuPortal } from 'radix-vue'

import type { DropdownMenuItem } from '../../types/dropdownMenuItem.type'
import AppDropdownMenuDivider from './AppDropdownMenuDivider.vue'
import AppDropdownMenuGroup from './AppDropdownMenuGroup.vue'
import AppDropdownMenuOption from './AppDropdownMenuOption.vue'
import AppDropdownMenuSub from './AppDropdownMenuSub.vue'
import AppDropdownMenuSubContent from './AppDropdownMenuSubContent.vue'
import AppDropdownMenuSubTrigger from './AppDropdownMenuSubTrigger.vue'

const props = defineProps<{
  item: DropdownMenuItem
}>()
</script>

<template>
  <AppDropdownMenuDivider v-if="props.item.type === 'divider'" />

  <AppDropdownMenuGroup v-else-if="props.item.type === 'group'">
    <AppDropdownMenuItem
      v-for="(groupItem, i) of props.item.items"
      :key="i"
      :item="groupItem"
    >
      <template #default="{ item: itemValue }">
        <slot :item="itemValue" />
      </template>
    </AppDropdownMenuItem>
  </AppDropdownMenuGroup>

  <AppDropdownMenuSub v-else-if="props.item.type === 'subMenu'">
    <AppDropdownMenuSubTrigger :item="props.item">
      <template #default="{ item: itemValue }">
        <slot :item="itemValue" />
      </template>
    </AppDropdownMenuSubTrigger>

    <DropdownMenuPortal>
      <AppDropdownMenuSubContent>
        <AppDropdownMenuItem
          v-for="(subItem, i) of props.item.items"
          :key="i"
          :item="subItem"
        >
          <template #default="{ item: itemValue }">
            <slot :item="itemValue" />
          </template>
        </AppDropdownMenuItem>
      </AppDropdownMenuSubContent>
    </DropdownMenuPortal>
  </AppDropdownMenuSub>

  <AppDropdownMenuOption
    v-if="props.item.type === 'option'"
    :item="props.item"
  >
    <slot :item="props.item" />
  </AppDropdownMenuOption>
</template>
