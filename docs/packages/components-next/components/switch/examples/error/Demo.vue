<script setup lang="ts">
import { VcSwitch } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<boolean>(false)
</script>

<template>
  <VcSwitch
    v-model="value"
    :errors="value === false ? ['This field is required.'] : []"
    :is-touched="true"
    label="I agree with the terms and conditions."
  />
</template>
