<script setup lang="ts">
import {
  VcRadioGroup,
  VcRadioGroupItem,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string | null>(null)
</script>

<template>
  <VcRadioGroup
    v-model="value"
    :is-disabled="true"
    label="Select a fruit"
  >
    <VcRadioGroupItem
      value="apple"
      label="Apple"
    />

    <VcRadioGroupItem
      value="banana"
      label="Banana"
    />

    <VcRadioGroupItem
      value="orange"
      label="Orange"
    />
  </VcRadioGroup>
</template>
