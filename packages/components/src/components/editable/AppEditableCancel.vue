<script setup lang="ts">
import { EditableCancelTrigger } from 'radix-vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'

const { t } = useI18n()
</script>

<template>
  <EditableCancelTrigger as-child>
    <slot>
      <AppButton>{{ t('components.editable.cancel') }}</AppButton>
    </slot>
  </EditableCancelTrigger>
</template>
