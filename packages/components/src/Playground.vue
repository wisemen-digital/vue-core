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

import AppConfigProvider from '@/components/config-provider/AppConfigProvider.vue'
import AppDateField from '@/components/input-field/date-field/AppDateField.vue'
import AppThemeProvider from '@/components/theme-provider/AppThemeProvider.vue'

import Dialogs from './Dialogs.vue'
</script>

<template>
  <AppConfigProvider
    :pagination="{ limit: 30 }"
    locale="nl"
  >
    <AppThemeProvider theme="light">
      <div class="p-24">
        <AppDateField class="w-72" />
      </div>

      <Dialogs />
    </AppThemeProvider>
  </AppConfigProvider>
</template>
