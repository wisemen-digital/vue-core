<script setup lang="ts">
import { computed } from 'vue'

import type { BadgeStyleProps } from '@/components/badge/badge.style'
import { useBadgeStyle } from '@/components/badge/badge.style'
import AppText from '@/components/text/AppText.vue'

const props = withDefaults(
  defineProps<{
    /**
     * Set true to make the badge 'rounded-full'.
     */
    isFullyRounded?: boolean
    /**
     * Set true to remove border, padding and shadow classes.
     */
    isUnstyled?: boolean
    /**
     * Badge style variant.
     */
    variant?: BadgeStyleProps['variant']
  }>(),
  {
    isFullyRounded: false,
    isUnstyled: false,
    variant: 'default',
  },
)

defineSlots<{
  /** The content of the badge */
  default: () => void
}>()

const badgeStyle = useBadgeStyle()
const badgeClasses = computed<string>(() => badgeStyle.badge({
  rounded: props.isFullyRounded,
  unstyled: props.isUnstyled,
  variant: props.variant,
}))
</script>

<template>
  <div :class="badgeClasses">
    <AppText variant="caption">
      <slot />
    </AppText>
  </div>
</template>
