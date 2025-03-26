<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useInjectButtonContext } from '@/components/button/default-button/button.context'
import AnimateSize from '@/components/shared/AnimateSize.vue'

const {
  isLoading,
  label,
  loadingLabel,
} = useInjectButtonContext()

const { t } = useI18n()

const computedLabel = computed<string>(() => {
  if (isLoading.value) {
    return loadingLabel.value ?? t('component.button.loading_label')
  }

  return label.value
})
</script>

<template>
  <AnimateSize class="relative">
    <AnimatePresence
      :initial="false"
      mode="popLayout"
    >
      <Motion
        :key="computedLabel"
        :initial="{
          opacity: 0,
          filter: 'blur(1px)',
          scale: 0.85,
        }"
        :animate="{
          opacity: 1,
          filter: 'blur(0)',
          scale: 1,
        }"
        :exit="{
          opacity: 0,
          filter: 'blur(1px)',
          scale: 0.85,
        }"
      >
        <span>
          {{ computedLabel }}
        </span>
      </Motion>
    </AnimatePresence>
  </AnimateSize>
</template>
