<script setup lang="ts" generic="T extends string">
import { RadioGroupItem } from 'radix-vue'
import { computed } from 'vue'

import { useRadioGroupStyle } from '@/components/radio-group/radioGroup.style'

const props = defineProps<{
  unstyled?: boolean
  value: T
}>()

const radioGroupStyle = useRadioGroupStyle()

const itemClasses = computed<string>(() => radioGroupStyle.item())
</script>

<template>
  <RadioGroupItem
    :value="props.value"
    :class="itemClasses"
  >
    <slot />
  </RadioGroupItem>
</template>
