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
import ConfigProvider from '@/components/config-provider/AppConfigProvider.vue'
import AppDarkModeToggle from '@/components/dark-mode-toggle/AppDarkModeToggle.vue'
import AppDropdownMenu from '@/components/dropdown-menu/AppDropdownMenu.vue'
import AppFilters from '@/components/filters/AppFilters.vue'
import AppDateField from '@/components/input-field/date-field/AppDateField.vue'
import AppTextField from '@/components/input-field/text-field/AppTextField.vue'
import AppKeyboardKey from '@/components/keyboard/AppKeyboardKey.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppThemeProvider from '@/components/theme-provider/AppThemeProvider.vue'
import AppToastContainer from '@/components/toast/AppToastContainer.vue'
import Dialogs from '@/Dialogs.vue'
import DropdownMenus from '@/DropdownMenus.vue'
import InputFields from '@/InputFields.vue'
import Popovers from '@/Popovers.vue'
import TablePlayground from '@/TablePlayground.vue'
import Tabs from '@/Tabs.vue'
import Tooltips from '@/Tooltips.vue'
import type { BreadcrumbItem } from '@/types/breadcrumb.type.js'

import Checkboxes from './Checkboxes.vue'
import Switches from './Switches.vue'

const breadcrumbs: BreadcrumbItem[] = [
  {
    icon: 'translate01',
    label: 'Page 1',
    type: 'page',
  },
  {
    label: 'Page 2',
    type: 'page',
  },
  {
    items: [],
    type: 'ellipsis',
  },
]
</script>

<template>
  <AppThemeProvider theme="light">
    <div class="p-48">
      <AppFilters />

      <div class="">
        <AppTextField :model-value="null" />

        <div class="size-4 bg-primary" />

        <AppPopover>
          <template #trigger>
            <AppButton variant="secondary">
              btn
            </AppButton>
          </template>

          <template #content>
            <div class="h-40 w-80" />
          </template>
        </AppPopover>

        <AppDropdownMenu
          :items="[
            {
              type: 'option',
              label: 'Option 1',
              onSelect: (): void => {
                //
              },
            },
          ]"
        >
          <template #trigger>
            <AppButton>
              btn
            </AppButton>
          </template>
        </AppDropdownMenu>
      </div>
    </div>

    <ConfigProvider
      locale="en"
    >
      <div class="flex justify-end p-8">
        <AppDarkModeToggle />
      </div>

      <div class="p-24">
        <AppDateField class="w-72" />
      </div>

      <div class="p-24">
        <div class="p-24">
          <AppButton icon-left="translate01">
            test
          </AppButton>

          <AppButton variant="secondary">
            test
          </AppButton>
        </div>

        <div class="flex gap-x-1">
          <AppKeyboardKey keyboard-key="shift" />
          <AppKeyboardKey keyboard-key="ctrl" />
          <AppKeyboardKey keyboard-key="f" />
          <AppKeyboardKey keyboard-key="meta" />
        </div>

        <div class="p-12">
          <AppButton>
            Button

            <template #right>
              <div class="flex items-center gap-x-1">
                <AppKeyboardKey
                  keyboard-key="meta"
                  class="ml-2"
                />

                <AppKeyboardKey keyboard-key="enter" />
              </div>
            </template>
          </AppButton>
        </div>

        <AppDateField
          v-if="false"
          class="w-72"
        />
      </div>

      <TablePlayground />

      <div class="flex min-h-screen flex-col gap-y-24 p-24">
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
  </AppThemeProvider>
</template>
