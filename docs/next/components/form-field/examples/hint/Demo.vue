<script setup lang="ts">
import { VcFormField } from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField
    :is-required="true"
    label="Label"
    hint="This is a hint."
  >
    /
  </VcFormField>
</template>
