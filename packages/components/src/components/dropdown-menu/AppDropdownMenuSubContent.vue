<script setup lang="ts">
import { DropdownMenuSubContent } from 'radix-vue'
import { computed } from 'vue'

import { useDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'

const dropdownMenuStyle = useDropdownMenuStyle()

const subContentClasses = computed<string>(() => dropdownMenuStyle.itemSubContent())
</script>

<template>
  <DropdownMenuSubContent
    :side-offset="4"
    :align-offset="-5"
    :class="subContentClasses"
  >
    <slot />
  </DropdownMenuSubContent>
</template>
