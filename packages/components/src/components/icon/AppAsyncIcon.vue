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
    size?: 'default' | 'lg' | 'sm' | 'xl' | 'xs'
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

const sizeClasses = computed<string>(() => {
  if (props.size === 'lg') {
    return 'w-icon-size-lg h-icon-size-lg'
  }

  if (props.size === 'xl') {
    return 'w-icon-size-xl h-icon-size-xl'
  }

  if (props.size === 'sm') {
    return 'w-icon-size-sm h-icon-size-sm'
  }

  if (props.size === 'xs') {
    return 'w-icon-size-xs h-icon-size-xs'
  }

  return 'w-icon-size-default h-icon-size-default'
})

await setIcon()
</script>

<template>
  <Component
    :is="svgComponent"
    v-if="svgComponent !== null"
    :class="sizeClasses"
    class="text-icon"
  />
</template>
