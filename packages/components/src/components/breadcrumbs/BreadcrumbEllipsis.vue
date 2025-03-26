<script setup lang="ts">
import { useRouter } from 'vue-router'

import Button from '@/components/button/button/Button.vue'
import DropdownMenu from '@/components/dropdown-menu/DropdownMenu.vue'
import type { BreadcrumbEllipsis } from '@/types/breadcrumb.type'
import type { DropdownMenuItem } from '@/types/dropdownMenu.type'

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
  <DropdownMenu :items="dropdownMenuItems">
    <Button
      variant="tertiary"
      size="sm"
    >
      ...
    </Button>
  </DropdownMenu>
</template>
