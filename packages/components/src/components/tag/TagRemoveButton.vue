<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { injectTagContext } from '@/components/tag/tag.context'

const tagContext = injectTagContext()
const { t } = useI18n()
</script>

<template>
  <IconButton
    :style-config="{
      '--icon-button-size-default': '1.125rem',
      '--icon-button-icon-size-default': '0.875rem',
      '--icon-button-border-radius-default': 'var(--radius-sm)',
      '--icon-button-bg-color-disabled': 'transparent',
      '--icon-button-border-color-disabled': 'transparent',
    }"
    :is-disabled="tagContext.isDisabled.value"
    :is-tooltip-hidden="true"
    :label="t('component.tag.remove')"
    icon="close"
    variant="tertiary"
    class="-mr-xs ml-sm"
    @click="tagContext.removeTag"
  />
</template>
