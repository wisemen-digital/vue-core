<script setup lang="ts">
import { DropdownMenuLabel } from 'radix-vue'
import { computed } from 'vue'

import { useDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import AppText from '@/components/text/AppText.vue'

const props = defineProps<{
  label: string
}>()

const dropdownMenuStyle = useDropdownMenuStyle()

const labelClasses = computed<string>(() => dropdownMenuStyle.itemLabel())
</script>

<template>
  <DropdownMenuLabel :class="labelClasses">
    <AppText variant="subtext">
      {{ props.label }}
    </AppText>
  </DropdownMenuLabel>
</template>
