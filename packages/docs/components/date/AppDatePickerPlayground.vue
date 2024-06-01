<!-- eslint-disable no-alert -->
<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppDatePicker from '@/components/date/AppDatePicker.vue'
import AppText from '@/components/text/AppText.vue'

const controls = createControls({
  id: {
    default: 'input-id',
    cols: 2,
    label: 'Id',
    type: 'text',
  },
  minDate: {
    default: null,
    label: 'Min date',
    type: 'date',
  },
  maxDate: {
    default: null,
    label: 'Max date',
    type: 'date',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
  isInvalid: {
    default: false,
    label: 'Is invalid',
    type: 'switch',
  },
})

const model = ref<Date | null>(null)

const { locale } = useI18n()

locale.value = 'nl'
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div>
        <AppDatePicker
          v-model="model"
          v-bind="values"
        />

        <AppText variant="caption">
          {{ `Model value: ${model ? new Date(model).toDateString() : 'null'}` }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
