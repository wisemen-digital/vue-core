<script setup lang="ts">
import { DropdownMenuSeparator } from 'reka-ui'
import { computed } from 'vue'

import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style.js'

const style = dropdownMenuStyle()

const separatorClasses = computed<string>(() => style.separator())
</script>

<template>
  <DropdownMenuSeparator :class="separatorClasses" />
</template>
