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
    :class-config="{
      root: 'w-60 p-xl border border-brand-200 rounded-xl hover:bg-brand-25 transition',
    }"
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
