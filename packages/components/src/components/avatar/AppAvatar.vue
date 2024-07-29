<script setup lang="ts">
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from 'radix-vue'
import {
  computed,
} from 'vue'

import AppTooltip from '@/components/tooltip/AppTooltip.vue'

import type { AvatarStyleProps } from './avatar.style'
import { useAvatarStyle } from './avatar.style'

export interface Props {
  /**
   * Wether the avatar is a tooltip. Also give the tooltip slot content then.
   */
  isTooltip?: boolean
  /**
   * Delays rendering so the fallback only appears for those with slower connections.
   */
  delayMs?: number
  /**
   * Text for the avatar fallback
   */
  fallback: string
  /**
   * Source of the image for the avatar
   */
  src: null | string
  /**
   * The variant of the fallback.
   */
  variant?: AvatarStyleProps['fallback']
}

const props = withDefaults(defineProps<Props>(), {
  isTooltip: false,
  delayMs: 600,
  variant: 'default',
})

defineSlots<{
  /** Content of the tooltip. Only rendered if isTooltip is true */
  tooltip: () => void
}>()

const avatarStyle = useAvatarStyle()

const fallbackClasses = computed<string>(() =>
  avatarStyle.fallback({
    fallback: props.variant,
  }))
</script>

<template>
  <AvatarRoot
    v-if="!props.isTooltip"
    class="inline-flex size-11 select-none items-center justify-center overflow-hidden rounded-full align-middle"
  >
    <AvatarImage
      :src="props.src ?? ''"
      class="size-full rounded-[inherit] object-cover"
    />
    <AvatarFallback
      :delay-ms="props.delayMs"
      :class="fallbackClasses"
    >
      {{ props.fallback }}
    </AvatarFallback>
  </AvatarRoot>

  <AppTooltip v-else>
    <template #default>
      <AvatarRoot
        class="inline-flex size-11 select-none items-center justify-center overflow-hidden rounded-full align-middle"
      >
        <AvatarImage
          :src="props.src ?? ''"
          class="size-full rounded-[inherit] object-cover"
        />
        <AvatarFallback
          :delay-ms="props.delayMs"
          :class="fallbackClasses"
        >
          {{ props.fallback }}
        </AvatarFallback>
      </AvatarRoot>
    </template>
    <template #content>
      <slot name="tooltip" />
    </template>
  </AppTooltip>
</template>
