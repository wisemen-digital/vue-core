<script setup lang="ts">
import { SelectValue } from 'radix-vue'
import { computed } from 'vue'

import { useSelectStyle } from '@/components/select/select.style'

const props = defineProps<{
  isEmpty: boolean
}>()

const selectStyle = useSelectStyle()

const valueClasses = computed<string>(() => selectStyle.value({
  isEmpty: props.isEmpty,
}))
</script>

<template>
  <SelectValue
    :class="valueClasses"
  >
    <slot />
  </SelectValue>
</template>
