<script setup lang="ts">
import '@/styles/index.scss'
import '@/components/icon/iconStyle.config'
import '@/components/button/button/buttonStyle.config'
import '@/components/input-field-hint/inputFieldHintStyle.config'
import '@/components/input-field-error/inputFieldErrorStyle.config'
import '@/components/input-field-label/inputFieldLabelStyle.config'
import '@/components/popover/popoverStyle.config'
import '@/components/button/icon-button/iconButtonStyle.config'
import '@/components/select/selectStyle.config'
import '@/components/input-field/text-field/textFieldStyle.config'
import '@/components/tooltip/tooltipStyle.config'
import '@/components/tabs/tabsStyle.config'
import '@/components/dropdown-menu/dropdownMenuStyle.config'

import { ref } from 'vue'

import AppSelect from '@/components/select/AppSelect.vue'
import type { SelectItem } from '@/types/select.type.js'

const model = ref<string[]>([])

const items: SelectItem<string>[] = [
  {
    isDisabled: false,
    type: 'option',
    value: 'Apple',
  },
  {
    isDisabled: false,
    type: 'option',
    value: 'Banana',
  },
]
</script>

<template>
  <div class="p-24">
    <AppSelect
      v-model="model"
      :items="items"
      :display-fn="(value) => value"
      :filter-fn="(option, searchTerm) => option.includes(searchTerm)"
      class="w-72"
    />
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
