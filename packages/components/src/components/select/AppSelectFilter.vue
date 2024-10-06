<script setup lang="ts">
import { ListboxFilter } from 'reka-ui'

import AppTextField from '@/components/input-field/text-field/AppTextField.vue'

const model = defineModel<string>({
  required: true,
})
</script>

<template>
  <ListboxFilter :as-child="true">
    <AppTextField
      v-model="model"
      :style-config="{
        '--text-field-border-left-color-default': 'transparent',
        '--text-field-border-right-color-default': 'transparent',
        '--text-field-border-bottom-color-default': 'transparent',
        '--text-field-border-top-color-default': 'transparent',
        '--text-field-border-left-color-focus': 'transparent',
        '--text-field-border-right-color-focus': 'transparent',
        '--text-field-border-bottom-color-focus': 'transparent',
        '--text-field-border-top-color-focus': 'transparent',
        '--text-field-border-left-color-hover': 'transparent',
        '--text-field-border-right-color-hover': 'transparent',
        '--text-field-border-bottom-color-hover': 'transparent',
        '--text-field-border-top-color-hover': 'transparent',
        '--text-field-ring-color-focus': 'transparent',
        '--text-field-border-radius-bottom-left-default': '0px',
        '--text-field-border-radius-bottom-right-default': '0px',
        '--text-field-border-radius-top-left-default': '0px',
        '--text-field-border-radius-top-right-default': '0px',
      }"
      placeholder="Search..."
    />
  </ListboxFilter>
</template>
