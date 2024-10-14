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

import Buttons from '@/Buttons.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import AppDarkModeToggle from '@/components/dark-mode-toggle/AppDarkModeToggle.vue'
import Dialogs from '@/Dialogs.vue'
import InputFields from '@/InputFields.vue'
import Popovers from '@/Popovers.vue'
import TablePlayground from '@/TablePlayground.vue'
import Tabs from '@/Tabs.vue'
import Tooltips from '@/Tooltips.vue'

import Checkboxes from './Checkboxes.vue'
import Switches from './Switches.vue'
</script>

<template>
  <ConfigProvider locale="en">
    <div class="flex justify-end p-8">
      <AppDarkModeToggle />
    </div>

    <TablePlayground />

    <div class="flex min-h-screen flex-col gap-y-24 p-24">
      <Dialogs />
      <Switches />
      <Checkboxes />
      <Tabs />
      <Popovers />
      <Tooltips />
      <InputFields />
      <Buttons />
    </div>
  </ConfigProvider>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
