<script setup lang="ts">
import { AppTextField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <AppTextField
    v-model="value"
    :is-required="true"
    type="email"
    class="w-72"
    label="Email"
    hint="email@example.com"
  />
</template>
