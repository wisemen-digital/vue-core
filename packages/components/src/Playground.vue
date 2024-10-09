<script setup lang="ts">
import '@/styles/index.scss'

import { ref } from 'vue'

import AppCheckbox from './components/checkbox/AppCheckbox.vue'
import type { FormFieldErrors } from './types/formFieldErrors.type'

const isChecked = ref<boolean>(false)
const isIndeterminate = ref<boolean>(false)

const errors: FormFieldErrors | null = {
  _errors: [
    'This is an error',
  ],
}

const isDisabled = ref<boolean>(false)
const isReadonly = ref<boolean>(false)
const isRequired = ref<boolean>(false)
const isTouched = ref<boolean>(false)
</script>

<template>
  <div class="p-40">
    <div class="flex gap-2">
      <button @click="isDisabled = !isDisabled">
        Disabled
      </button>
      <button @click="isReadonly = !isReadonly">
        Readonly
      </button>
      <button @click="isRequired = !isRequired">
        Required
      </button>
      <button @click="isTouched = !isTouched">
        Touched
      </button>
      <button @click="isIndeterminate = !isIndeterminate">
        Indeterminate
      </button>
    </div>

    <AppCheckbox
      v-model="isChecked"
      :is-disabled
      :is-readonly
      :is-touched
      :is-required
      :is-indeterminate="isIndeterminate"
      :errors="errors"
      label="Checkbox"
      hint="This is a hint"
    />
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
