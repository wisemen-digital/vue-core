<script setup lang="ts">
import { DropdownMenuArrow } from 'radix-vue'
import { computed } from 'vue'

import { useDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'

const dropdownMenuStyle = useDropdownMenuStyle()

const arrowContainerClasses = computed<string>(() => dropdownMenuStyle.arrowContainer())
const arrowClasses = computed<string>(() => dropdownMenuStyle.arrow())
</script>

<template>
  <DropdownMenuArrow :as-child="true">
    <div :class="arrowContainerClasses">
      <div
        :class="arrowClasses"
      />
    </div>
  </DropdownMenuArrow>
</template>
