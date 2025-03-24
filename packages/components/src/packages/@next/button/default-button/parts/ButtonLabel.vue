<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'
import { computed, useId } from 'vue'
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

const id = useId()
</script>

<template>
  <AnimateSize class="relative">
    <AnimatePresence
      :initial="false"
      mode="popLayout"
    >
      <Motion
        :key="computedLabel"
        :layout-id="id"
        :initial="{ opacity: 0, filter: 'blur(1px)' }"
        :animate="{ opacity: 1, filter: 'blur(0)' }"
        :exit="{ opacity: 0, filter: 'blur(1px)' }"
      >
        <span>
          {{ computedLabel }}
        </span>
      </Motion>
    </AnimatePresence>
  </AnimateSize>
</template>
