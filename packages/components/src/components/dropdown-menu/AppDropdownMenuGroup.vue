<script setup lang="ts">
import { DropdownMenuGroup } from 'radix-vue'
import { computed } from 'vue'

import { useDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'

const dropdownMenuStyle = useDropdownMenuStyle()

const groupClasses = computed<string>(() => dropdownMenuStyle.group())
</script>

<template>
  <DropdownMenuGroup :class="groupClasses">
    <slot />
  </DropdownMenuGroup>
</template>
