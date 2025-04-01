<script setup lang="ts">
import { VcTextarea } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <VcTextarea
    v-model="value"
    label="Message"
    placeholder="Enter your message here"
    class="max-w-96 w-full"
  />
</template>
