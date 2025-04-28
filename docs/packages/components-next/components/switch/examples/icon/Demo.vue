<script setup lang="ts">
import { VcSwitch } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<boolean>(false)
</script>

<template>
  <VcSwitch
    v-model="value"
    icon-checked="check"
    icon-unchecked="close"
    label="I agree with the terms and conditions."
  />
</template>
