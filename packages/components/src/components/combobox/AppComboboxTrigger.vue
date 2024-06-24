<script setup lang="ts">
import { ComboboxTrigger } from 'radix-vue'
import { computed } from 'vue'

import { useComboboxStyle } from '@/components/combobox/combobox.style'
import AppIcon from '@/components/icon/AppIcon.vue'

const props = defineProps<{
  isDisabled: boolean
}>()

const comboboxStyle = useComboboxStyle()

const iconClasses = computed<string>(() => comboboxStyle.icon())
const triggerClasses = computed<string>(() => comboboxStyle.trigger({
  isDisabled: props.isDisabled,
}))
</script>

<template>
  <ComboboxTrigger
    :disabled="props.isDisabled"
    :class="triggerClasses"
  >
    <AppIcon
      :class="iconClasses"
      icon="chevronDown"
      size="sm"
    />
  </ComboboxTrigger>
</template>
