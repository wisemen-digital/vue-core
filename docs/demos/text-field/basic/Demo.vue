<script setup lang="ts">
import { VcTextField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <VcTextField
    v-model="value"
    class="w-72"
  />
</template>
