<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useInjectButtonContext } from '@/packages/@next/button/default-button/button.context'
import AnimateSize from '@/packages/@next/shared/AnimateSize.vue'

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
  <AnimateSize>
    <AnimatePresence
      :initial="false"
      mode="popLayout"
    >
      <Motion
        :key="computedLabel"
        :initial="{ opacity: 0, y: -24 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: 24 }"
      >
        <span>
          {{ computedLabel }}
        </span>
      </Motion>
    </AnimatePresence>
  </AnimateSize>
</template>
