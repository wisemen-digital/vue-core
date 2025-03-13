<script setup lang="ts">
import { VcPhoneNumberField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<string | null>(null)
const value2 = ref<string | null>(null)

const defaultCountryCode = 'NL' // This could be based on your current locale, for example
</script>

<template>
  <div class="flex flex-col gap-6">
    <VcPhoneNumberField
      v-model="value"
      :default-country-code="defaultCountryCode"
      :is-required="true"
      label="Primary contact"
      hint="Phone number of your primary emergency contact, for example a partner."
      class="w-96"
    />
    <VcPhoneNumberField
      v-model="value2"
      :default-country-code="defaultCountryCode"
      label="Other contact"
      hint="Another emergency contact, preferably not from the same household."
      class="w-96"
    />
  </div>
</template>
