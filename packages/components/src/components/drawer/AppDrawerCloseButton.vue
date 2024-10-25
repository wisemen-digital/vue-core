<script setup lang="ts">
import { DialogClose } from 'reka-ui'
import { useI18n } from 'vue-i18n'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'

const { t } = useI18n()
</script>

<template>
  <DialogClose :as-child="true">
    <slot>
      <AppIconButton
        :label="t('shared.close')"
        icon="xClose"
        variant="tertiary"
        size="sm"
      />
    </slot>
  </DialogClose>
</template>
