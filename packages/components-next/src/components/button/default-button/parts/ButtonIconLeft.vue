<script setup lang="ts">
import { useInjectButtonContext } from '@/components/button/default-button/button.context'
import Icon from '@/components/icon/Icon.vue'
import { mergeClasses } from '@/customClassVariants'

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
