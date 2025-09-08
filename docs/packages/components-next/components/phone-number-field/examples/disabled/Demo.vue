<script setup lang="ts">
import { VcPhoneNumberField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string | null>(null)
</script>

<template>
  <VcPhoneNumberField
    v-model="value"
    :is-disabled="true"
    class="w-72"
    label="Phone number"
  />
</template>
