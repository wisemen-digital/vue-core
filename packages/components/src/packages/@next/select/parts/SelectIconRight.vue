<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

import { mergeClasses } from '@/customClassVariants'
import Icon from '@/packages/@next/icon/Icon.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  isLoading,
  classConfig,
  customClassConfig,
  iconRight,
  style,
} = useInjectSelectContext()
</script>

<template>
  <AnimatePresence mode="popLayout">
    <Motion
      v-if="iconRight !== null && !isLoading"
      :initial="{ opacity: 0, scale: 0.75 }"
      :animate="{ opacity: 1, scale: 1 }"
      :exit="{ opacity: 0, scale: 0.75 }"
      :transition="{
        duration: 0.3,
        type: 'spring',
        bounce: 0,
      }"
      tabindex="-1"
    >
      <Icon
        :icon="iconRight"
        :class="style.iconRight({
          class: mergeClasses(customClassConfig.iconRight, classConfig?.iconRight),
        })"
      />
    </Motion>
  </AnimatePresence>
</template>
