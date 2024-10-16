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
import AppButton from '@/components/button/button/AppButton.vue'
import AppCalendar from '@/components/calendar/AppCalendar.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import AppDarkModeToggle from '@/components/dark-mode-toggle/AppDarkModeToggle.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppToastContainer from '@/components/toast/AppToastContainer.vue'
import { useToast } from '@/composables/toast.composable.js'
import Dialogs from '@/Dialogs.vue'
import DropdownMenus from '@/DropdownMenus.vue'
import InputFields from '@/InputFields.vue'
import Popovers from '@/Popovers.vue'
import TablePlayground from '@/TablePlayground.vue'
import Tabs from '@/Tabs.vue'
import Tooltips from '@/Tooltips.vue'

import Checkboxes from './Checkboxes.vue'
import Switches from './Switches.vue'

const toast = useToast()

setTimeout(() => {
  toast.error({
    message: 'This is an error toast message. You can do something about it.',
  })
}, 1000)

setTimeout(() => {
  toast.success({
    message: 'This is an success toast message. Enjoy!',
  })
}, 1200)
</script>

<template>
  <ConfigProvider locale="nl-BE">
    <div class="flex justify-end p-8">
      <AppDarkModeToggle />
    </div>

    <div class="p-24">
      <AppPopover
        side="right"
        align="start"
      >
        <template #trigger>
          <AppButton>
            Trigger
          </AppButton>
        </template>
        <template #content>
          <AppCalendar />
        </template>
      </AppPopover>
    </div>

    <TablePlayground v-if="false" />

    <div
      v-if="false"
      class="flex min-h-screen flex-col gap-y-24 p-24"
    >
      <DropdownMenus />
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

  <AppToastContainer />
</template>
