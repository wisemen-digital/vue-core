<script setup lang="ts">
import { computed } from 'vue'

import { badgeStyle } from '@/components/badge/badge.style'
import AppText from '@/components/text/AppText.vue'

const badgeVariants = badgeStyle()
const badgeClasses = computed<string>(() => badgeVariants.badge())
</script>

<template>
  <div :class="badgeClasses">
    <AppText variant="caption">
      <slot />
    </AppText>
  </div>
</template>
