<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectIconButtonContext } from '@/packages/@next/button/icon-button/iconButton.context'
import Icon from '@/packages/@next/icon/Icon.vue'

const {
  classConfig,
  customClassConfig,
  icon,
  style,
} = useInjectIconButtonContext()
</script>

<template>
  <Icon
    v-if="icon !== null"
    :icon="icon"
    :class="style.icon({
      class: mergeClasses(customClassConfig.icon, classConfig?.icon),
    })"
  />
</template>
