<script setup lang="ts">
import { VcTextField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

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
    id="email"
    v-model="value"
    :class-config="{
      root: 'bg-transparent border-none bg-secondary h-9 shadow-none focus-within:ring-2',
      input: 'px-xxs',
      iconLeft: 'group-focus-within/text-field:scale-95 duration-200',
    }"
    icon-left="search"
    placeholder="example@example.com"
    class="w-72"
  >
    <template #right>
      <div
        class="
          gap-xs mr-md flex text-xs duration-200
          group-focus-within/text-field:scale-95
        "
      >
        <span
          class="bg-tertiary flex size-5 items-center justify-center rounded-xs"
        >
          ⌘
        </span>

        <span
          class="bg-tertiary flex size-5 items-center justify-center rounded-xs"
        >
          K
        </span>
      </div>
    </template>
  </VcTextField>
</template>
