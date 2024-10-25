<script setup lang="ts">
import { AppNumberField } from '@wisemen/vue-core'
import { ref } from 'vue'

const currencyValue = ref<null | number>(null)
const percentValue = ref<null | number>(null)
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <AppNumberField
      v-model="currencyValue"
      :format-options="{
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'code',
        currencySign: 'accounting',
      }"
      class="w-52"
    />

    <AppNumberField
      v-model="percentValue"
      :format-options="{
        style: 'percent',
      }"
      :step="0.01"
      class="w-52"
    />
  </div>
</template>
