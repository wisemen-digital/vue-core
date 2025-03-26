<script setup lang="ts">
import { useInjectRouterLinkButtonContext } from '@/components/button/router-link-button/routerLinkButton.context'
import { mergeClasses } from '@/customClassVariants'
import Icon from '@/components/icon/Icon.vue'

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
