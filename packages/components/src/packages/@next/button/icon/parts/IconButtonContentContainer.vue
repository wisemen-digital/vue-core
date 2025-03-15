<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectIconButtonContext } from '@/packages/@next/button/icon/iconButton.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectIconButtonContext()
</script>

<template>
  <div
    :class="style.contentContainer({
      class: mergeClasses(customClassConfig.contentContainer, classConfig?.contentContainer),
    })"
  >
    <slot />
  </div>
</template>
