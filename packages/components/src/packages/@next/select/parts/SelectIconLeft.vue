<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import Icon from '@/packages/@next/icon/Icon.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  classConfig,
  customClassConfig,
  iconLeft,
  style,
} = useInjectSelectContext()
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
