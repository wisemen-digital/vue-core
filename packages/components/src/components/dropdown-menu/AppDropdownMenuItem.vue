<script setup lang="ts">
import {
  DropdownMenuLabel,
  DropdownMenuPortal,
} from 'radix-vue'

import AppDropdownMenuCheckbox from '@/components/dropdown-menu/AppDropdownMenuCheckbox.vue'
import AppDropdownMenuDivider from '@/components/dropdown-menu/AppDropdownMenuDivider.vue'
import AppDropdownMenuGroup from '@/components/dropdown-menu/AppDropdownMenuGroup.vue'
import AppDropdownMenuOption from '@/components/dropdown-menu/AppDropdownMenuOption.vue'
import AppDropdownMenuRadioGroup from '@/components/dropdown-menu/AppDropdownMenuRadioGroup.vue'
import AppDropdownMenuSub from '@/components/dropdown-menu/AppDropdownMenuSub.vue'
import AppDropdownMenuSubContent from '@/components/dropdown-menu/AppDropdownMenuSubContent.vue'
import AppDropdownMenuSubTrigger from '@/components/dropdown-menu/AppDropdownMenuSubTrigger.vue'
import AppText from '@/components/text/AppText.vue'
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

  <AppDropdownMenuCheckbox
    v-else-if="props.item.type === 'checkbox'"
    :item="props.item"
  />

  <AppDropdownMenuRadioGroup
    v-else-if="props.item.type === 'radioGroup'"
    :item="props.item"
  />

  <AppDropdownMenuOption
    v-else-if="props.item.type === 'option'"
    :item="props.item"
  >
    <slot :item="props.item" />
  </AppDropdownMenuOption>

  <DropdownMenuLabel
    v-else-if="props.item.type === 'label'"
  >
    <AppText
      variant="subtext"
      class="px-2 py-1.5"
    >
      {{ props.item.label }}
    </AppText>
  </DropdownMenuLabel>
</template>
