<script setup lang="ts">
import { DialogClose } from 'reka-ui'
import { useI18n } from 'vue-i18n'

import IconButton from '@/components/button/icon-button/IconButton.vue'

const { t } = useI18n()
</script>

<template>
  <DialogClose :as-child="true">
    <slot>
      <IconButton
        :label="t('shared.close')"
        icon="close"
        variant="tertiary"
        size="sm"
      />
    </slot>
  </DialogClose>
</template>
