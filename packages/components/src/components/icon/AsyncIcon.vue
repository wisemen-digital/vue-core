<script setup lang="ts">
import type { Component } from 'vue'
import {
  shallowRef,
  watch,
} from 'vue'

import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { type Icon, icons } from '@/icons/icons'
import type { StyleConfig } from '@/types/style.type'

const props = withDefaults(
  defineProps<{
    icon: Icon
    styleConfig?: StyleConfig<'icon'> | null
  }>(),
  {
    size: 'default',
    styleConfig: null,
  },
)

const themeProviderContext = injectThemeProviderContext()
const svgComponent = shallowRef<Component | null>(null)

async function setIcon(): Promise<void> {
  const resolvedComponent = await icons[props.icon]

  // @ts-expect-error TODO fix this
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
    :class="[themeProviderContext.theme.value]"
    :style="props.styleConfig"
    class="icon-default text-icon"
  />
</template>
