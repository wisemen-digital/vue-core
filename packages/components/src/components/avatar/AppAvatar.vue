<script setup lang="ts">
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from 'radix-vue'
import { computed } from 'vue'

import AppTooltip from '@/components/tooltip/AppTooltip.vue'

import type { AvatarStyleProps } from './avatar.style'
import { useAvatarStyle } from './avatar.style'

export interface Props {
  /**
   * Wether the avatar has a tooltip. Also give the tooltip slot content then.
   */
  hasTooltip?: boolean
  /**
   * Delays rendering so the fallback only appears for those with slower connections.
   */
  delayMs?: number
  /**
   * Text for the avatar fallback
   */
  fallback: string
  /**
   * The size of the avatar.
   */
  size?: AvatarStyleProps['size']
  /**
   * Source of the image for the avatar
   */
  src: null | string
  /**
   * Defines multiple sizes of the same image, allowing the browser to select the appropriate image source.
   */
  srcset?: null | string
  /**
   * The variant of the fallback.
   */
  variant?: AvatarStyleProps['fallback']
}

const props = withDefaults(defineProps<Props>(), {
  hasTooltip: false,
  delayMs: 600,
  size: 'default',
  srcset: null,
  variant: 'default',
})

defineSlots<{
  /** Content of the tooltip. Only rendered if hasTooltip is true */
  tooltip: () => void
}>()

const avatarStyle = useAvatarStyle()

const fallbackClasses = computed<string>(() =>
  avatarStyle.fallback({
    fallback: props.variant,
    size: props.size,
  }))
const sizeClasses = computed<string>(() =>
  avatarStyle.size({
    size: props.size,
  }))
const rootClasses = computed<string>(() => avatarStyle.root())
const imageClasses = computed<string>(() => avatarStyle.image())
</script>

<template>
  <AvatarRoot
    v-if="!props.hasTooltip"
    :class="`${sizeClasses} ${rootClasses}`"
  >
    <AvatarImage
      :src="props.src ?? ''"
      :srcset="props.srcset ?? ''"
      :class="imageClasses"
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
        :class="`${sizeClasses} ${rootClasses}`"
      >
        <AvatarImage
          :src="props.src ?? ''"
          :srcset="props.srcset ?? ''"
          :class="imageClasses"
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
