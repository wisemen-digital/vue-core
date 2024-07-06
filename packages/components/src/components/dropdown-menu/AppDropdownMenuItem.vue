<script setup lang="ts">
import { DropdownMenuPortal } from 'radix-vue'

import AppDropdownMenuDivider from '@/components/dropdown-menu/AppDropdownMenuDivider.vue'
import AppDropdownMenuGroup from '@/components/dropdown-menu/AppDropdownMenuGroup.vue'
import AppDropdownMenuLabel from '@/components/dropdown-menu/AppDropdownMenuLabel.vue'
import AppDropdownMenuRadioGroup from '@/components/dropdown-menu/AppDropdownMenuRadioGroup.vue'
import AppDropdownMenuSub from '@/components/dropdown-menu/AppDropdownMenuSub.vue'
import AppDropdownMenuSubContent from '@/components/dropdown-menu/AppDropdownMenuSubContent.vue'
import AppDropdownMenuSubTrigger from '@/components/dropdown-menu/AppDropdownMenuSubTrigger.vue'
import AppDropdownMenuCheckboxOption from '@/components/dropdown-menu/option/AppDropdownMenuCheckboxOption.vue'
import AppDropdownMenuRenderOption from '@/components/dropdown-menu/option/AppDropdownMenuRenderOption.vue'
import AppDropdownMenuRouteOption from '@/components/dropdown-menu/option/AppDropdownMenuRouteOption.vue'
import AppDropdownMenuSelectOption from '@/components/dropdown-menu/option/AppDropdownMenuSelectOption.vue'
import type { DropdownMenuItem } from '@/types/dropdownMenuItem.type'

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
    />
  </AppDropdownMenuGroup>

  <AppDropdownMenuSub v-else-if="props.item.type === 'subMenu'">
    <AppDropdownMenuSubTrigger :item="props.item" />

    <DropdownMenuPortal>
      <AppDropdownMenuSubContent>
        <AppDropdownMenuItem
          v-for="(subItem, i) of props.item.items"
          :key="i"
          :item="subItem"
        />
      </AppDropdownMenuSubContent>
    </DropdownMenuPortal>
  </AppDropdownMenuSub>

  <AppDropdownMenuCheckboxOption
    v-else-if="props.item.type === 'checkboxOption'"
    :item="props.item"
  />

  <AppDropdownMenuRadioGroup
    v-else-if="props.item.type === 'radioGroup'"
    :item="props.item"
  />

  <AppDropdownMenuRouteOption
    v-else-if="props.item.type === 'routeOption'"
    :item="props.item"
  >
    <slot :item="props.item" />
  </AppDropdownMenuRouteOption>

  <AppDropdownMenuRenderOption
    v-else-if="props.item.type === 'renderOption'"
    :item="props.item"
  >
    <slot :item="props.item" />
  </AppDropdownMenuRenderOption>

  <AppDropdownMenuSelectOption
    v-else-if="props.item.type === 'selectOption'"
    :item="props.item"
  >
    <slot :item="props.item" />
  </AppDropdownMenuSelectOption>

  <AppDropdownMenuLabel
    v-else-if="props.item.type === 'label'"
    :label="props.item.label"
  />
</template>
