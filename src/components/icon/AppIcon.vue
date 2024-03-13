<script setup lang="ts">
import type { Component } from 'vue'
import { shallowRef, watch } from 'vue'

import type { Icon } from '@/icons/icons'
import { icons } from '@/icons/icons'
import { cn } from '@/utils/style.util'

import type { IconStyleProps } from './icon.style'
import { iconVariants } from './icon.style'

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

watch(
  () => props.icon,
  async () => {
    const resolvedComponent = await icons[props.icon]
    // @ts-expect-error TODO: Fix this
    svgComponent.value = resolvedComponent.default
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <Component
    :is="svgComponent"
    v-if="svgComponent !== null"
    :class="cn(iconVariants({ size }))"
  />
</template>
