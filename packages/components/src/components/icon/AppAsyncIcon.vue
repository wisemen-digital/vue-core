<script setup lang="ts">
import type { Component } from 'vue'
import {
  computed,
  shallowRef,
  watch,
} from 'vue'

import { type Icon, icons } from '@/icons/icons'

const props = withDefaults(
  defineProps<{
    icon: Icon
    size?: 'default' | 'full' | 'lg' | 'sm' | 'xl' | 'xs'
  }>(),
  {
    size: 'default',
  },
)

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

// const iconClasses = computed<string>(() => iconStyle.icon({ size: props.size }))

const sizeClass = computed<null | string>(() => {
  if (props.size === 'lg') {
    return 'icon-lg'
  }

  if (props.size === 'xl') {
    return 'icon-xl'
  }

  if (props.size === 'sm') {
    return 'icon-sm'
  }

  if (props.size === 'xs') {
    return 'icon-xs'
  }

  if (props.size === 'full') {
    return 'icon-full'
  }

  return null
})

await setIcon()
</script>

<template>
  <Component
    :is="svgComponent"
    v-if="svgComponent !== null"
    :class="sizeClass"
    class="h-icon-size w-icon-size text-icon"
  />
</template>
