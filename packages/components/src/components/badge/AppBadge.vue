<script setup lang="ts">
import { computed } from 'vue'

import { useBadgeStyle } from '@/components/badge/badge.style'
import AppText from '@/components/text/AppText.vue'

const badgeStyle = useBadgeStyle()
const badgeClasses = computed<string>(() => badgeStyle.badge())

defineSlots<{
  /** The content of the badge */
  default: () => void
}>()
</script>

<template>
  <div :class="badgeClasses">
    <AppText variant="caption">
      <slot />
    </AppText>
  </div>
</template>
