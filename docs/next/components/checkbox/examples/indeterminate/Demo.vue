<script setup lang="ts">
import { VcCheckbox } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<boolean>(true)
</script>

<template>
  <VcCheckbox
    v-model="value"
    :is-indeterminate="true"
    label="I agree with the terms and conditions."
  />
</template>
