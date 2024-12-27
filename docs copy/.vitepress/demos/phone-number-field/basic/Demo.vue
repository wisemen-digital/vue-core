<script setup lang="ts">
import { VcPhoneNumberField } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)
</script>

<template>
  <VcPhoneNumberField
    v-model="value"
    class="w-72"
  />
</template>
