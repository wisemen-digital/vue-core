<script setup lang="ts">
import Icon from '@/components/icon/Icon.vue'
import { useInjectTextFieldContext } from '@/components/text-field/textField.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  iconLeft,
  style,
} = useInjectTextFieldContext()
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
