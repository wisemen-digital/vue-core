<script setup lang="ts">
import type { Component } from 'vue'
import {
  shallowRef,
  watch,
} from 'vue'

import type { IconProps } from '@/components/icon/icon.props'
import { icons } from '@/icons/icons'

const props = defineProps<IconProps>()

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
  />
</template>
