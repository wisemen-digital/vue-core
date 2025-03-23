<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectButtonContext } from '@/packages/@next/button/default-button/button.context'
import Icon from '@/packages/@next/icon/Icon.vue'

const {
  classConfig,
  customClassConfig,
  iconLeft,
  style,
} = useInjectButtonContext()
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
