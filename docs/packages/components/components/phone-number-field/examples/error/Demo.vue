<script setup lang="ts">
import { VcPhoneNumberField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string | null>(null)
</script>

<template>
  <VcPhoneNumberField
    v-model="value"
    :is-required="true"
    :error-message="value === null ? 'This field is required' : undefined"
    :is-touched="true"
    class="w-72"
    label="Phone number"
  />
</template>
