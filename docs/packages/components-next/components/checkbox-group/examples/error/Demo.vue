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
    :errors="value.length > 0 ? [] : ['This field is required.']"
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
