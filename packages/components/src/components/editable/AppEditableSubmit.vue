<script setup lang="ts">
import { EditableSubmitTrigger } from 'radix-vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'

const { t } = useI18n()
</script>

<template>
  <EditableSubmitTrigger as-child>
    <slot>
      <AppButton>{{ t('components.editable.submit') }}</AppButton>
    </slot>
  </EditableSubmitTrigger>
</template>
