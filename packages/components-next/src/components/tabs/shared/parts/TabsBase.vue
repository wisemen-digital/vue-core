<script setup lang="ts">
import { mergeClasses } from '@/class-variant/customClassVariants'
import { useInjectTabsContext } from '@/components/tabs/shared/tabs.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTabsContext()
</script>

<template>
  <div :class="style.base({ class: mergeClasses(customClassConfig.base, classConfig?.base) })">
    <slot />
  </div>
</template>
