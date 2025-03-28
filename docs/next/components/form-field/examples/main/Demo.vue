<script setup lang="ts">
import { VcFormField } from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField
    label="Label"
    hint="This is a hint."
    for="input-id"
    :is-required="true"
  >
    <input 
      id="input-id"
      class="border border-solid border-primary rounded-md p-xs"
    />
  </VcFormField>
</template>