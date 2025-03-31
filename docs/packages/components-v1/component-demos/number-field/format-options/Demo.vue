<script setup lang="ts">
import { VcNumberField } from '@wisemen/vue-core'
import { ref } from 'vue'

const currencyValue = ref<number | null>(0)
const percentValue = ref<number | null>(0)
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <VcNumberField
      v-model="currencyValue"
      :format-options="{
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'code',
        currencySign: 'accounting',
      }"
      class="w-52"
    />

    <VcNumberField
      v-model="percentValue"
      :format-options="{
        style: 'percent',
      }"
      :step="0.01"
      class="w-52"
    />
  </div>
</template>
