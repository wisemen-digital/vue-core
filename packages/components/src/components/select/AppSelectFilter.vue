<script setup lang="ts">
import { ListboxFilter } from 'reka-ui'

import AppTextField from '@/components/input-field/text-field/AppTextField.vue'
import { injectSelectContext } from '@/components/select/select.context'

const selectContext = injectSelectContext()
</script>

<template>
  <ListboxFilter :as-child="true">
    <AppTextField
      v-model="selectContext.searchTerm.value"
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
        '--text-field-shadow-default': '0 0 0 0 transparent',
        '--text-field-shadow-focus': '0 0 0 0 transparent',
        '--text-field-shadow-hover': '0 0 0 0 transparent',

        '--text-field-bg-color-default': 'var(--bg-secondary)',
        '--text-field-bg-color-focus': 'var(--bg-secondary)',
        '--text-field-bg-color-hover': 'var(--bg-secondary)',
        '--text-field-height-default': '32px',
        '--text-field-with-icon-left-padding-left-default': 'var(--spacing-md)',
        '--text-field-icon-left-spacing-default': 'var(--spacing-md)',
      }"
      icon-left="searchLg"
      placeholder="Search..."
      class="pb-select-dropdown-padding-y-default"
    />
  </ListboxFilter>
</template>
