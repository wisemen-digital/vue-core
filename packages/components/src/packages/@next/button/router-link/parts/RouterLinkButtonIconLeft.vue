<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectRouterLinkButtonContext } from '@/packages/@next/button/router-link/routerLinkbutton.context'
import Icon from '@/packages/@next/icon/Icon.vue'

const {
  classConfig,
  customClassConfig,
  iconLeft,
  style,
} = useInjectRouterLinkButtonContext()
</script>

<template>
  <Icon
    v-if="iconLeft !== null"
    :icon="iconLeft"
    :class="style.iconLeft({
      class: mergeClasses(customClassConfig.iconLeft, classConfig?.iconLeft),
    })"
  />
</template>
