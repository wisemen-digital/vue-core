<script setup lang="ts">
import { useRouter } from 'vue-router'

import AppButton from '@/components/button/button/AppButton.vue'
import AppDropdownMenu from '@/components/dropdown-menu/AppDropdownMenu.vue'
import type { BreadcrumbEllipsis } from '@/types/breadcrumb.type.js'
import type { DropdownMenuItem } from '@/types/dropdownMenu.type.js'

const props = defineProps<{
  item: BreadcrumbEllipsis
}>()

const router = useRouter()

const dropdownMenuItems: DropdownMenuItem[] = [
  {
    items: props.item.items.map((item) => ({
      label: item.label ?? '',
      type: 'option',
      onSelect: (): void => {
        void router.push(item.to)
      },
    })),
    type: 'group',
  },
]
</script>

<template>
  <AppDropdownMenu :items="dropdownMenuItems">
    <AppButton
      variant="tertiary"
      size="sm"
    >
      ...
    </AppButton>
  </AppDropdownMenu>
</template>
