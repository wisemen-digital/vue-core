<script setup lang="ts">
import Icon from '@/components/icon/Icon.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import { mergeClasses } from '@/customClassVariants'

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
