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
import '@/components/tag/tagStyle.config'
import '@/components/checkbox/checkboxStyle.config'
import '@/components/input-field/text-area/textareaStyle.config'
import '@/components/dialog/dialogStyle.config'
import '@/components/table/tableStyle.config'
import '@/components/switch/switchStyle.config'

import { ref } from 'vue'

import AppConfigProvider from '@/components/config-provider/AppConfigProvider.vue'
import AppTimeField from '@/components/input-field/time-field/AppTimeField.vue'
import AppSelect from '@/components/select/AppSelect.vue'
import AppThemeProvider from '@/components/theme-provider/AppThemeProvider.vue'
import type { SelectOption } from '@/types/select.type'

const value = ref<null | string>(null)
const selectItems = ref<SelectOption<string>[]>([
  {
    type: 'option',
    value: 'Apple',
  },
  {
    type: 'option',
    value: 'Banana',
  },
  {
    type: 'option',
    value: 'Blueberry',
  },
])

const time = ref<null | string>(null)
</script>

<template>
  <AppConfigProvider
    :pagination="{ limit: 30 }"
    locale="nl"
  >
    <AppThemeProvider theme="light">
      <div class="flex h-full flex-col p-24">
        value: {{ time }}
        <AppTimeField
          v-model="time"
          icon-left="search"
        />

        <AppSelect
          v-if="false"
          v-model="value"
          :items="selectItems"
          :display-fn="(value) => value"
          label="Select a fruit"
          placeholder="Select a fruit"
          class="w-72"
        />
      </div>
    </AppThemeProvider>
  </AppConfigProvider>
</template>
