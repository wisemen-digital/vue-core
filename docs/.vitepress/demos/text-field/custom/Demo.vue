<script setup lang="ts">
import { VcButton, VcIcon, VcTextField } from '@wisemen/vue-core'
import { ref, useId } from 'vue';

const value = ref<null | string>(null)
const id = useId()
</script>

<template>
  <VcTextField
    v-model="value"
    :id="id"
    label="Command"
    placeholder="Enter a command"
    hint="Enter a command to execute"
    class="w-72"
  >
    <template #label="{ label }">
      <label
        :for="id" 
        class="uppercase text-xs font-bold text-tertiary mb-1 block"
      >
        {{ label }}
      </label>
    </template>

    <template #hint="{ hint }">
      <div class="flex gap-x-2 items-center text-xs text-tertiary mt-2">
        <VcIcon icon="translate" class="size-3" />

        <span>
          {{ hint }}
        </span>
      </div>
    </template>

    <template #left>
      <div class="pl-3">
        <span class="whitespace-nowrap text-sm ext-tertiary">
          Command:
        </span>
      </div>
    </template>
  </VcTextField>
</template>