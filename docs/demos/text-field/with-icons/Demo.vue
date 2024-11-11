<script setup lang="ts">
import { VcTextField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <VcTextField
    v-model="value"
    label="Email"
    placeholder="email@example.com"
    type="email"
    class="w-72"
    icon-left="search"
    icon-right="arrowRight"
  />
</template>
