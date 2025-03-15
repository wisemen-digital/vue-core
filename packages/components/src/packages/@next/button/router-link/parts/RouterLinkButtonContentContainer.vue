<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectRouterLinkButtonContext } from '@/packages/@next/button/router-link/routerLinkbutton.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectRouterLinkButtonContext()
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
