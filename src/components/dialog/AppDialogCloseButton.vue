<script setup lang="ts">
import { DialogClose } from 'radix-vue'
import { useI18n } from 'vue-i18n'

import AppIconButton from '../button/AppIconButton.vue'

const { t } = useI18n()
</script>

<template>
  <DialogClose :as-child="true">
    <slot>
      <AppIconButton
        :label="t('shared.close')"
        icon="close"
        icon-size="default"
        variant="ghost"
      />
    </slot>
  </DialogClose>
</template>
