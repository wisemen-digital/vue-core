<script setup lang="ts">
import { VcTextarea } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <VcTextarea
    v-model="value"
    :is-disabled="true"
    label="Message"
    placeholder="Enter your message here"
    class="w-full max-w-96"
  />
</template>
