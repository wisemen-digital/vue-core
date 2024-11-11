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

import AddressAutocomplete from '@/components/autocomplete/AddressAutocomplete.vue'
import Button from '@/components/button/button/Button.vue'
import IconButton from '@/components/button/icon-button/IconButton.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import TextField from '@/components/input-field/text-field/TextField.vue'
import TimeField from '@/components/input-field/time-field/TimeField.vue'
import Select from '@/components/select/Select.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { useDarkMode } from '@/composables/index'
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

const darkMode = useDarkMode()
</script>

<template>
  <ConfigProvider
    :pagination="{ limit: 30 }"
    google-maps-api-key="AIzaSyATX2fY3BZwaKeURsQhwpEVLmLRr27s4vw"
    locale="nl"
  >
    <ThemeProvider
      :is-dark-mode-enabled="darkMode.isEnabled.value"
      theme="default"
    >
      <div class="grid grid-cols-3 gap-24 bg-primary p-24">
        <div
          v-for="variant of variants"
          :key="variant"
        >
          <Button
            :variant="variant"
            :is-loading="false"
            icon-left="translate"
          >
            A Button
          </Button>
        </div>

        <AddressAutocomplete :model-value="null" />

        <Select
          :display-fn="(value) => value"
          :items="[
            {
              type: 'option',
              value: '1',
            },
          ]"
          model-value="1"
        />

        <div
          v-for="variant of variants"
          :key="variant"
        >
          <IconButton
            :variant="variant"
            :is-loading="false"
            label="label"
            icon="translate"
          />
        </div>

        <TextField
          v-if="false"
          v-model="value"
          class="w-72"
          label="Email address"
        />
      </div>

      <div
        v-if="false"
        class="flex h-full flex-col p-24"
      >
        value: {{ time }}
        <TimeField
          v-model="time"
          icon-left="search"
        />

        <Select
          v-if="false"
          v-model="value"
          :items="selectItems"
          :display-fn="(value) => value"
          label="Select a fruit"
          placeholder="Select a fruit"
          class="w-72"
        />
      </div>
    </ThemeProvider>
  </ConfigProvider>
</template>
