<script setup lang="ts">
import type { Component } from 'vue'
import {
  shallowRef,
  watch,
} from 'vue'

import type { IconProps } from '@/components/icon/icon.props'
<<<<<<<< HEAD:packages/components-next/src/components/icon/AsyncIcon.vue
import { icons } from '@/icons/icons'
========
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { icons } from '@/icons/icons'
import { ThemeUtil } from '@/utils/theme.util'
>>>>>>>> main:packages/components/src/components-v2/icon/AsyncIcon.vue

const props = defineProps<IconProps>()

const themeProviderContext = injectThemeProviderContext()
const svgComponent = shallowRef<Component | null>(null)

async function setIcon(): Promise<void> {
  const resolvedComponent = await icons[props.icon]

  // @ts-expect-error Property 'default' does not exist on type 'Component'
  svgComponent.value = resolvedComponent.default
}

watch(
  () => props.icon,
  async () => {
    await setIcon()
  },
  {
    immediate: true,
  },
)

await setIcon()
</script>

<template>
  <Component
    :is="svgComponent"
    v-if="svgComponent !== null"
<<<<<<<< HEAD:packages/components-next/src/components/icon/AsyncIcon.vue
========
    :class="ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value)"
>>>>>>>> main:packages/components/src/components-v2/icon/AsyncIcon.vue
  />
</template>
