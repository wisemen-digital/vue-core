<script setup lang="ts">
import { useInjectButtonContext } from '@/components/@next/button/button.context'
import Icon from '@/components/@next/icon/Icon.vue'
import { mergeClasses } from '@/customClassVariants'

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
