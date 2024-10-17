<script setup lang="ts">
import {
  AppSwitch,
  type FormFieldErrors,
} from '@wisemen/vue-core'
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
    <AppSwitch
      v-model="model"
      :is-touched="true"
      :errors="errors"
      label="Switch"
      hint="This is a switch."
    />
  </div>
</template>
