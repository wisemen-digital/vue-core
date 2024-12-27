<script setup lang="ts">
import { VcTextField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <VcTextField
    v-model="value"
    :is-required="true"
    type="email"
    class="w-72"
    label="Email"
    hint="email@example.com"
  />
</template>
