<script setup lang="ts">
import { VcPasswordField } from '@wisemen/vue-core-components'
import {
  computed,
  ref,
} from 'vue'

const value = ref<string | null>(null)

const error = computed<string | null>(() => {
  if (value.value === null) {
    return 'This field is required'
  }
  if (value.value.length < 8) {
    return 'Must contain at least 8 characters.'
  }

  return null
})
</script>

<template>
  <VcPasswordField
    v-model="value"
    :error-message="error"
    :is-touched="true"
    :is-required="true"
    hint="Must contain at least 8 characters."
    label="Password"
    placeholder="Enter your password"
    class="w-72"
  />
</template>
