<script setup lang="ts">
import { ref } from 'vue'
import { VcTextField } from '@wisemen/vue-core-components'

const value = ref<string>('')
</script>

<template>
  <VcTextField 
    v-model="value"
    label="Email"
    placeholder="example@example.com"
    class="w-72" 
  />
</template>