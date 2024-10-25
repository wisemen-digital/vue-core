<script setup lang="ts">
import { AppPhoneNumberField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <AppPhoneNumberField
    v-model="value"
    class="w-72"
  />
</template>
