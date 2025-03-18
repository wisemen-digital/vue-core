<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import Icon from '@/packages/@next/icon/Icon.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  classConfig,
  customClassConfig,
  iconRight,
  style,
} = useInjectSelectContext()
</script>

<template>
  <Icon
    v-if="iconRight !== null"
    :icon="iconRight"
    :class="style.iconRight({
      class: mergeClasses(customClassConfig.iconRight, classConfig?.iconRight),
    })"
  />
</template>
