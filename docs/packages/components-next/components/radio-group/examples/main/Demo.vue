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
    label="Select a fruit"
  >
    <VcRadioGroupItem
      value="banana"
      label="Banana"
      hint="It's yellow"
    />

    <VcRadioGroupItem
      value="orange"
      label="Orange"
      hint="It's orange"
    />

    <VcRadioGroupItem
      value="apple"
      label="Apple"
      hint="It's red, sometimes."
    />
  </VcRadioGroup>
</template>
