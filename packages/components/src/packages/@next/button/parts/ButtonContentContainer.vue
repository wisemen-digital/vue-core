<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectButtonContext } from '@/packages/@next/button/button.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectButtonContext()
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
