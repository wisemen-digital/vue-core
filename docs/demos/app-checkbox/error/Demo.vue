<script setup lang="ts">
import type { FormFieldErrors } from '@wisemen/vue-core'
import { AppCheckbox } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<boolean>(true)
const errors = ref<FormFieldErrors | null>({
  _errors: [
    'This is an error message.',
  ],
})
</script>

<template>
  <div>
    <AppCheckbox
      v-model="model"
      :is-touched="true"
      :errors="errors"
      label="Checkbox"
      hint="This is a checkbox."
    />
  </div>
</template>
