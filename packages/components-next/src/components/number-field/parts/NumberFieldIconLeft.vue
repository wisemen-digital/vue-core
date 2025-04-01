<script setup lang="ts">
import Icon from '@/components/icon/Icon.vue'
import { useInjectNumberFieldContext } from '@/components/number-field/numberField.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  iconLeft,
  style,
} = useInjectNumberFieldContext()
</script>

<template>
  <Icon
    v-if="iconLeft !== null"
    :icon="iconLeft"
    :class="style.iconLeft({
      class: mergeClasses(customClassConfig.iconLeft, classConfig?.iconLeft),
    })"
  />
</template>
