<script setup lang="ts">
import RadioGroupItemIndicator from '@/components/radio-group-item/parts/RadioGroupItemIndicator.vue'
import RadioGroupItemIndicatorTransition from '@/components/radio-group-item/parts/RadioGroupItemIndicatorTransition.vue'
import { useInjectRadioGroupItemContext } from '@/components/radio-group-item/radioGroupItem.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectRadioGroupItemContext()
</script>

<template>
  <div
    :class="style.control({
      class: mergeClasses(classConfig?.control, customClassConfig?.control),
    })"
  >
    <RadioGroupItemIndicator>
      <RadioGroupItemIndicatorTransition />
    </RadioGroupItemIndicator>
  </div>
</template>
