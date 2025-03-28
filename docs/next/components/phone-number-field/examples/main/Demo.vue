<script setup lang="ts">
import { ref } from 'vue'
import { VcPhoneNumberField } from '@wisemen/vue-core-components'

const value = ref<string | null>(null)
</script>

<template>
  <VcPhoneNumberField 
    v-model="value"
    class="w-72"
  />
</template>