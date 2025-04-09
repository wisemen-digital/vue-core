<script setup lang="ts">
import { VcCheckbox } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<boolean>(false)
</script>

<template>
  <VcCheckbox
    v-model="value"
    :is-touched="true"
    :error-message="value ? null : 'This field is required.'"
    label="I agree with the terms and conditions."
  />
</template>
