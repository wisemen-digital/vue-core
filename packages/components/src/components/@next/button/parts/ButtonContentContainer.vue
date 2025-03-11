<script setup lang="ts">
import { useInjectButtonContext } from '@/components/@next/button/button.context'
import { mergeClasses } from '@/customClassVariants'

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
