<script setup lang="ts">
import { useRouter } from 'vue-router'

import type { DropdownMenuItem } from '@/types/dropdownMenuItem.type'

import type { BreadcrumbEllipsis } from '../../types/breadcrumbItem.type'
import AppButton from '../button/AppButton.vue'
import AppDropdownMenu from '../dropdown-menu/AppDropdownMenu.vue'

const props = defineProps<{
  item: BreadcrumbEllipsis
}>()

const router = useRouter()

const dropdownMenuItems: DropdownMenuItem[] = [
  {
    items: props.item.items.map(item => ({
      label: item.label ?? '',
      onSelect: () => {
        void router.push(item.to)
      },
      type: 'option',
    })),
    type: 'group',
  },
]
</script>

<template>
  <AppDropdownMenu
    :items="dropdownMenuItems"
    :has-arrow="true"
  >
    <AppButton
      variant="ghost"
      size="sm"
    >
      ...
    </AppButton>
  </AppDropdownMenu>
</template>
