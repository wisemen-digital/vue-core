<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectButtonContext } from '@/packages/@next/button/button/button.context'
import Icon from '@/packages/@next/icon/Icon.vue'

const {
  classConfig,
  customClassConfig,
  iconRight,
  style,
} = useInjectButtonContext()
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
