<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectRouterLinkButtonContext } from '@/packages/@next/button/router-link/routerLinkbutton.context'
import Icon from '@/packages/@next/icon/Icon.vue'

const {
  classConfig,
  customClassConfig,
  iconRight,
  style,
} = useInjectRouterLinkButtonContext()
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
