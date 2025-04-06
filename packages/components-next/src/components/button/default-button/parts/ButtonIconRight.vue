<script setup lang="ts">
import { useInjectButtonContext } from '@/components/button/default-button/button.context'
import Icon from '@/components/icon/Icon.vue'
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
