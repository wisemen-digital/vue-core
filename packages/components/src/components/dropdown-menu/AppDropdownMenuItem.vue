<script setup lang="ts">
import AppDropdownMenuItem from '@/components/dropdown-menu/AppDropdownMenuItem.vue'
import AppDropdownMenuGroup from '@/components/dropdown-menu/items/AppDropdownMenuGroup.vue'
import AppDropdownMenuOption from '@/components/dropdown-menu/items/AppDropdownMenuOption.vue'
import AppDropdownMenuRoute from '@/components/dropdown-menu/items/AppDropdownMenuRoute.vue'
import AppDropdownMenuSeparator from '@/components/dropdown-menu/items/AppDropdownMenuSeparator.vue'
import AppDropdownMenuSubTrigger from '@/components/dropdown-menu/items/AppDropdownMenuSubTrigger.vue'
import type { DropdownMenuItem } from '@/types/dropdownMenu.type.js'

const props = defineProps<{
  item: DropdownMenuItem
}>()
</script>

<template>
  <AppDropdownMenuOption
    v-if="props.item.type === 'option'"
    :item="props.item"
  >
    <template #option-content>
      <slot
        :item="props.item"
        name="option-content"
      />
    </template>
  </AppDropdownMenuOption>

  <AppDropdownMenuRoute
    v-if="props.item.type === 'route'"
    :item="props.item"
  >
    <template #option-content>
      <slot
        :item="props.item"
        name="option-content"
      />
    </template>
  </AppDropdownMenuRoute>

  <AppDropdownMenuSeparator
    v-else-if="props.item.type === 'separator'"
  />

  <AppDropdownMenuSubTrigger
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
      <AppDropdownMenuItem
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

        <!-- @vue-expect-error -->
        <template #group-label="{ label }">
          <slot
            :label="label"
            name="group-label"
          />
        </template>
      </AppDropdownMenuItem>
    </template>
  </AppDropdownMenuSubTrigger>

  <AppDropdownMenuGroup
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
      <AppDropdownMenuItem
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

        <!-- @vue-expect-error -->
        <template #group-label="{ label }">
          <slot
            :label="label"
            name="group-label"
          />
        </template>
      </AppDropdownMenuItem>
    </template>
  </AppDropdownMenuGroup>
</template>
