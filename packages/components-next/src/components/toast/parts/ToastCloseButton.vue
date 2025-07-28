<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { useInjectToastContext } from '@/components/toast/toast.context'

const {
  onClose,
} = useInjectToastContext()

const {
  t,
} = useI18n()
</script>

<template>
  <IconButton
    :label="t('shared.close')"
    :class-config="{
      root: 'absolute top-1.5 right-1.5',
    }"
    icon="close"
    variant="tertiary"
    size="sm"
    @click="onClose"
  />
</template>
