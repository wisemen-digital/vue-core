<script setup lang="ts">
import { VcTextField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <VcTextField
    v-model="value"
    icon-left="search"
    label="Email"
    placeholder="example@example.com"
    class="w-72"
  />
</template>
