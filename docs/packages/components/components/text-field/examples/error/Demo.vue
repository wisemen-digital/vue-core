<script setup lang="ts">
import { VcTextField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <VcTextField
    v-model="value"
    :error-message="value.length > 0 ? null : 'This field is required.'"
    :is-touched="true"
    label="Email"
    placeholder="example@example.com"
    class="w-72"
  />
</template>
