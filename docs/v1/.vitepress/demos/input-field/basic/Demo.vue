<script setup lang="ts">
import { VcInputField } from '@wisemen/vue-core'
import { ref } from 'vue';

const model = ref<string | null>('#e66465')
</script>

<template>
  <div>
    <VcInputField 
      input-id="input-id"
      label="Custom color input"
      is-required
      :is-touched="true"
      :errors="['This is an error']"
      :hint="null"
    >
      <input id="input-id" type="color" v-model="model"/>
    </VcInputField>
  </div>
</template>