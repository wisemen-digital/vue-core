<script setup lang="ts">
import {
  type AcceptableValue,
  ListboxItem as RekaListboxItem,
} from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const props = defineProps<{
  value: AcceptableValue
}>()

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectSelectContext()
</script>

<template>
  <RekaListboxItem
    :value="props.value"
    :class="style.item({ class: mergeClasses(customClassConfig.item, classConfig?.item) })"
  >
    <slot />
  </RekaListboxItem>
</template>
