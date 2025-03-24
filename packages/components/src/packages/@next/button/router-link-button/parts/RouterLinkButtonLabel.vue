<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

import { useInjectRouterLinkButtonContext } from '@/packages/@next/button/router-link-button/routerLinkButton.context'
import AnimateSize from '@/packages/@next/shared/AnimateSize.vue'

const { label } = useInjectRouterLinkButtonContext()
</script>

<template>
  <AnimateSize class="overflow-hidden relative">
    <AnimatePresence
      :initial="false"
      mode="popLayout"
    >
      <Motion
        :key="label"
        :initial="{ opacity: 0, y: -24 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: 24 }"
      >
        <span>
          {{ label }}
        </span>
      </Motion>
    </AnimatePresence>
  </AnimateSize>
</template>
