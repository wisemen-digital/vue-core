<script setup lang="ts">
import { ref } from 'vue'
import { defineComponentVariant, VcTextField } from '@wisemen/vue-core-components'

const value = ref<string>('')
</script>

<template>
  <label 
    for="email"
    class="sr-only"
  >
    Email
  </label>

  <VcTextField 
    v-model="value"
    id="email"
    :class-config="{
      root: 'bg-transparent border-none bg-secondary h-9 shadow-none focus-within:ring-2',
      input: 'px-xxs',
      iconLeft: 'group-focus-within/text-field:scale-95 duration-200'
    }"
    icon-left="search"
    placeholder="example@example.com"
    class="w-72" 
  >
    <template #right>
      <div class="flex gap-xs text-xs mr-md group-focus-within/text-field:scale-95 duration-200">
        <span class="bg-tertiary size-5 flex items-center justify-center rounded-xs">
          ⌘
        </span>

        <span class="bg-tertiary size-5 flex items-center justify-center rounded-xs">
          K
        </span>
      </div>
    </template>
  </VcTextField>
</template>