<script setup lang="ts">
import { ref } from 'vue'

import AppTextField from '@/components/text-field/AppTextField.vue'

const themes = [
  'default',
  'leander',
  'retro',
  'blushy',
  'modern',
]

const theme = ref<string>('default')
</script>

<template>
  <div class="p-24">
    <div class="mb-12 flex flex-col gap-y-4 rounded-md border border-solid border-gray-200 bg-gray-100 p-2">
      <template
        v-for="t of themes"
        :key="t"
      >
        <label>
          <input
            v-model="theme"
            :value="t"
            type="radio"
          >

          {{ t }}
        </label>
      </template>
    </div>

    <div class="grid grid-cols-3 items-end gap-12">
      <AppTextField :class="theme" />

      <AppTextField
        :class="theme"
        icon-left="search"
        placeholder="Search..."
      />

      <AppTextField
        :class="theme"
        icon-right="calendar"
        label="Make a reservation"
      />

      <AppTextField
        :class="theme"
        hint="Make sure to include your email address."
      />
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
