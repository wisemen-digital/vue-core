<script setup lang="ts">
import { EditableEditTrigger } from 'radix-vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'

const { t } = useI18n()
</script>

<template>
  <EditableEditTrigger as-child>
    <slot>
      <AppButton>{{ t('components.editable.edit') }}</AppButton>
    </slot>
  </EditableEditTrigger>
</template>
