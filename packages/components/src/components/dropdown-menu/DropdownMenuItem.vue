<script setup lang="ts">
import DropdownMenuItem from '@/components/dropdown-menu/DropdownMenuItem.vue'
import DropdownMenuGroup from '@/components/dropdown-menu/items/DropdownMenuGroup.vue'
import DropdownMenuOption from '@/components/dropdown-menu/items/DropdownMenuOption.vue'
import DropdownMenuRoute from '@/components/dropdown-menu/items/DropdownMenuRoute.vue'
import DropdownMenuSeparator from '@/components/dropdown-menu/items/DropdownMenuSeparator.vue'
import DropdownMenuSubTrigger from '@/components/dropdown-menu/items/DropdownMenuSubTrigger.vue'
import type { DropdownMenuItem as DropdownMenuItemType } from '@/types/dropdownMenu.type'

const props = defineProps<{
  item: DropdownMenuItemType
}>()
</script>

<template>
  <DropdownMenuOption
    v-if="props.item.type === 'option'"
    :item="props.item"
  >
    <template #option-content>
      <slot
        :item="props.item"
        name="option-content"
      />
    </template>
  </DropdownMenuOption>

  <DropdownMenuRoute
    v-if="props.item.type === 'route'"
    :item="props.item"
  >
    <template #option-content>
      <slot
        :item="props.item"
        name="option-content"
      />
    </template>
  </DropdownMenuRoute>

  <DropdownMenuSeparator
    v-else-if="props.item.type === 'separator'"
  />

  <DropdownMenuSubTrigger
    v-else-if="props.item.type === 'subMenu'"
    :item="props.item"
  >
    <template #sub-menu-trigger-content>
      <slot
        :label="props.item.label"
        name="sub-menu-trigger-content"
      />
    </template>

    <template #default>
      <DropdownMenuItem
        v-for="(childItem, childItemIndex) of props.item.items"
        :key="childItemIndex"
        :item="childItem"
      >
        <template #option-content>
          <slot
            :item="childItem"
            name="option-content"
          />
        </template>

        <template #group-label="{ label }">
          <slot
            :label="label"
            name="group-label"
          />
        </template>
      </DropdownMenuItem>
    </template>
  </DropdownMenuSubTrigger>

  <DropdownMenuGroup
    v-else-if="props.item.type === 'group'"
    :item="props.item"
  >
    <template #group-label>
      <slot
        :label="props.item.label"
        name="group-label"
      />
    </template>

    <template #default>
      <DropdownMenuItem
        v-for="(childItem, childItemIndex) of props.item.items"
        :key="childItemIndex"
        :item="childItem"
      >
        <template #option-content>
          <slot
            :item="childItem"
            name="option-content"
          />
        </template>

        <template #group-label="{ label }">
          <slot
            :label="label"
            name="group-label"
          />
        </template>
      </DropdownMenuItem>
    </template>
  </DropdownMenuGroup>
</template>
