<script setup lang="ts">
import {
  VcButton,
  VcTextarea,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <VcTextarea
    v-model="value"
    label="Message"
    placeholder="Enter your message here"
    class="w-full max-w-96"
  >
    <template #top>
      <div class="border-primary p-sm gap-md flex border-b border-solid">
        <VcButton
          size="sm"
          icon-left="stars"
          variant="tertiary"
        >
          Rewrite with AI
        </VcButton>
      </div>
    </template>

    <template #bottom>
      <div class="p-lg flex justify-end">
        <VcButton
          size="sm"
          variant="secondary"
        >
          Send
        </VcButton>
      </div>
    </template>
  </VcTextarea>
</template>
