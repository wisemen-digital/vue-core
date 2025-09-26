<script setup lang="ts">
import {
  VcCheckbox,
  VcCheckboxGroup,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string[]>([])
</script>

<template>
  <VcCheckboxGroup
    v-model="value"
    :is-touched="true"
    :error-message="null"
    hint="Select your favorite fruits"
    label="Fruits"
  >
    <VcCheckbox
      value="apple"
      label="Apple"
    />

    <VcCheckbox
      value="banana"
      label="Banana"
    />

    <VcCheckbox
      value="orange"
      label="Orange"
    />
  </VcCheckboxGroup>
</template>
