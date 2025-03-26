<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'
import { useI18n } from 'vue-i18n'

import { useInjectSelectContext } from '@/components/select/select.context'
import Spinner from '@/components/spinner/Spinner.vue'
import { mergeClasses } from '@/customClassVariants'

const {
  isLoading,
  classConfig,
  customClassConfig,
  style,
} = useInjectSelectContext()

const { t } = useI18n()
</script>

<template>
  <AnimatePresence mode="popLayout">
    <Motion
      v-if="isLoading"
      :class="style.loader({
        class: mergeClasses(customClassConfig.loader, classConfig?.loader),
      })"
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
      <span class="sr-only">
        {{ t('shared.loading') }}
      </span>

      <slot>
        <Spinner :aria-hidden="true" />
      </slot>
    </Motion>
  </AnimatePresence>
</template>
