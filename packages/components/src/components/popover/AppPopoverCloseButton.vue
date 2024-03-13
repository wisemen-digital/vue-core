<script setup lang="ts">
import { PopoverClose } from 'radix-vue'
import { useI18n } from 'vue-i18n'

import AppIconButton from '../button/AppIconButton.vue'

const { t } = useI18n()
</script>

<template>
  <PopoverClose :as-child="true">
    <AppIconButton
      :label="t('shared.close')"
      variant="ghost"
      icon="close"
      icon-size="default"
    />
  </PopoverClose>
</template>
