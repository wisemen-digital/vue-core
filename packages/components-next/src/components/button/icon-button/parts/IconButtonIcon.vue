<script setup lang="ts">
import { useInjectIconButtonContext } from '@/components/button/icon-button/iconButton.context'
import { mergeClasses } from '@/customClassVariants'
import Icon from '@/components/icon/Icon.vue'

const {
  isLoading,
  classConfig,
  customClassConfig,
  icon,
  style,
} = useInjectIconButtonContext()
</script>

<template>
  <Icon
    v-if="icon !== null && !isLoading"
    :icon="icon"
    :class="style.icon({
      class: mergeClasses(customClassConfig.icon, classConfig?.icon),
    })"
  />
</template>
