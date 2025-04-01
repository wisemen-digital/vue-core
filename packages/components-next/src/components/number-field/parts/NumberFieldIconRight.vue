<script setup lang="ts">
import Icon from '@/components/icon/Icon.vue'
import { useInjectNumberFieldContext } from '@/components/number-field/numberField.context'
import { mergeClasses } from '@/customClassVariants'

const {
  isLoading,
  classConfig,
  customClassConfig,
  iconRight,
  style,
} = useInjectNumberFieldContext()
</script>

<template>
  <Icon
    v-if="iconRight !== null && !isLoading"
    :icon="iconRight"
    :class="style.iconRight({
      class: mergeClasses(customClassConfig.iconRight, classConfig?.iconRight),
    })"
  />
</template>
