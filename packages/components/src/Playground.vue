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

import Button from '@/components/button/button/Button.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import DialogContainer from '@/components/dialog/DialogContainer.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { useDialog } from '@/composables/index'
import type { SelectOption } from '@/types/select.type'

const value = ref<null | string>(null)
const selectItems = ref<SelectOption<string>[]>([
  {
    type: 'option',
    value: 'le',
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

/**
 * Probleem:
 *
 * In een config gebruik je soms variabelen van andere componenten.
 * Dit werkt niet tenzij je die class als sibling applied.
 * Logisch, omdat je je styles applied op die class en niet op root. Maar moet zo?
 */

const variants = [
  'default',
  'secondary',
  'secondary-color',
  'tertiary',
  'tertiary-color',
  'destructive-primary',
  'destructive-secondary',
  'destructive-tertiary',
] as const

const dialog = useDialog({
  shouldAnimateFromTrigger: true,
  component: () => import('./ExampleDialog.vue'),
})
</script>

<template>
  <ConfigProvider
    :pagination="{ limit: 30 }"
    google-maps-api-key="AIzaSyATX2fY3BZwaKeURsQhwpEVLmLRr27s4vw"
    locale="nl"
  >
    <ThemeProvider
      :is-dark-mode-enabled="false"
      theme="default"
    >
      <div class="grid grid-cols-2 p-8">
        <div>
          <Button
            v-bind="dialog.getTriggerProps('test1')"
            @click="dialog.open({
              id: 'test1',
            })"
          >
            Trigger A
          </Button>
        </div>

        <div>
          <Button
            v-bind="dialog.getTriggerProps('test2')"
            @click="dialog.open({
              id: 'test2',
            })"
          >
            Trigger B
          </Button>
        </div>
      </div>

      <DialogContainer />
    </ThemeProvider>
  </ConfigProvider>
</template>
