<script setup lang="ts">
import type { Component } from 'vue'
import {
  computed,
  shallowRef,
  watch,
} from 'vue'

import { type IconStyleProps, useIconStyle } from '@/components/icon/icon.style'
import { type Icon, icons } from '@/icons/icons'

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
const iconStyle = useIconStyle()

const iconClasses = computed<string>(() => iconStyle.icon({ size: props.size }))

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
    :class="iconClasses"
  />
</template>
