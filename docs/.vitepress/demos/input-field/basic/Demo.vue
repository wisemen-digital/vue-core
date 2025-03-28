<script setup lang="ts">
import { VcInputField } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<string | null>('#e66465')
</script>

<template>
  <div>
    <VcInputField
      :is-touched="true"
      :errors="['This is an error']"
      :hint="null"
      input-id="input-id"
      label="Custom color input"
      is-required
    >
      <input
        id="input-id"
        v-model="model"
        type="color"
      >
    </VcInputField>
  </div>
</template>
