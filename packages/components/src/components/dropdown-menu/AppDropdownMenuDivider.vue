<script setup lang="ts">
import { DropdownMenuSeparator } from 'radix-vue'
import { computed } from 'vue'

import { useDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'

const dropdownMenuStyle = useDropdownMenuStyle()

const dividerClasses = computed<string>(() => dropdownMenuStyle.divider())
</script>

<template>
  <DropdownMenuSeparator :class="dividerClasses" />
</template>
