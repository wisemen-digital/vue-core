<script setup lang="ts">
import { useInjectRouterLinkButtonContext } from '@/components/button/router-link-button/routerLinkButton.context'
import { mergeClasses } from '@/customClassVariants'
import Icon from '@/components/icon/Icon.vue'

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
