<script setup lang="ts">
import { useInjectButtonContext } from '@/components/button/default-button/button.context'
import { mergeClasses } from '@/customClassVariants'
import Icon from '@/components/icon/Icon.vue'

const {
  isLoading,
  classConfig,
  customClassConfig,
  iconRight,
  style,
} = useInjectButtonContext()
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
