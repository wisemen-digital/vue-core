<script setup lang="ts">
import { AppTextField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <AppTextField
    v-model="value"
    label="Email"
    placeholder="email@example.com"
    type="email"
    class="w-72"
    icon-left="translate01"
    icon-right="tool02"
  />
</template>
