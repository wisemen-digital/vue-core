<script setup lang="ts">
import type { Component } from 'vue'
import {
  onServerPrefetch,
  shallowRef,
  watch,
} from 'vue'

import { type IconStyleProps, iconVariants } from '@/components/icon/icon.style'
import { type Icon, icons } from '@/icons/icons'
import { cn } from '@/utils/style.util'

const props = withDefaults(
  defineProps<{
    icon: Icon
    size?: IconStyleProps['size']
  }>(),
  {
    size: 'default',
  },
)

const svgComponent = shallowRef<Component | null>(null)

async function setIcon(): Promise<void> {
  const resolvedComponent = await icons[props.icon]

  // @ts-expect-error TODO: Fix this
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

onServerPrefetch(async () => {
  await setIcon()
})
</script>

<template>
  <Component
    :is="svgComponent"
    v-if="svgComponent !== null"
    :class="cn(iconVariants({ size }))"
  />
</template>
