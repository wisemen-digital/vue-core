<script setup lang="ts">
import { VcFormField } from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField
    :is-required="true"
    label="Label"
    hint="This is a hint."
    for="input-id"
  >
    <input
      id="input-id"
      class="border border-solid border-primary rounded-md p-xs"
    >
  </VcFormField>
</template>
