<script setup lang="ts">
import { AppNumberField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | number>(0)
</script>

<template>
  <AppNumberField
    v-model="value"
    :are-controls-hidden="true"
    class="w-52"
  />
</template>
