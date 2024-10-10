<script setup lang="ts">
import { ref } from 'vue'

import AppTextField from '@/components/input-field/text-field/AppTextField.vue'

const value = ref<null | string>(null)
</script>

<template>
  <div class="grid grid-cols-3 gap-12">
    <AppTextField
      v-model="value"
      icon-left="translate01"
      label="Email"
      placeholder="email@example.com"
      hint="This is a hint."
    />

    <AppTextField
      v-model="value"
      :is-disabled="true"
      icon-left="translate01"
      label="Email"
      hint="This is a hint."
    />

    <AppTextField
      v-model="value"
      :is-loading="true"
      icon-left="translate01"
      label="Email"
      hint="This is a hint."
    />

    <AppTextField
      v-model="value"
      :errors="{
        _errors: ['This is an error message.'],
      }"
      :is-touched="true"
      icon-left="translate01"
      label="Email"
      hint="This is a hint."
    />
  </div>
</template>
