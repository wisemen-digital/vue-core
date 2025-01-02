<script setup lang="ts">
import { computed, ref } from 'vue'

import Checkbox from '@/components/checkbox/Checkbox.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import DateField from '@/components/input-field/date-field/DateField.vue'
import NumberField from '@/components/input-field/number-field/NumberField.vue'
import PasswordField from '@/components/input-field/password-field/PasswordField.vue'
import TextField from '@/components/input-field/text-field/TextField.vue'
import TimeField from '@/components/input-field/time-field/TimeField.vue'
import Popover from '@/components/popover/Popover.vue'
import RadioGroup from '@/components/radio-group/RadioGroup.vue'
import RadioGroupItem from '@/components/radio-group/RadioGroupItem.vue'
import Select from '@/components/select/Select.vue'
import Switch from '@/components/switch/Switch.vue'
import Tooltip from '@/components/tooltip/Tooltip.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'
import type { SelectItem } from '@/types/select.type'

import Button from './components/button/button/Button.vue'
import ThemeProvider from './components/theme-provider/ThemeProvider.vue'
import { useDarkMode } from './composables'
import { defineStyleConfig } from './styling/defineStyleConfig'

setupDefaultStyles()

const items = [
  'a',
  'b',
  'c',
]

const selectItems = computed<SelectItem<string>[]>(() => [
  {
    type: 'option',
    value: 'a',
  },
  {
    type: 'option',
    value: 'b',
  },
  {
    type: 'option',
    value: 'c',
  },
])

const selectedItem = ref<string>('Apple')

const radioItems = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    isDisabled: true,
    hint: 'This is a disabled.',
    label: 'Banana',
    value: 'Banana',
  },
  {
    hint: 'This is a hint.',
    label: 'Blueberry',
    value: 'Blueberry',
  },
]

const value = ref<string | null>(null)
const switchValue = ref<boolean>(false)
const darkMode = useDarkMode()

const test = new Date()

test.setFullYear(2025)

const date = ref<Date>(test)

const locale = navigator.language

defineStyleConfig({
  colorScheme: 'dark',
  config: {
    '--button-bg-color-default': 'red',
  },
  theme: '*',
  variant: 'primary',
  component: 'button',
})

defineStyleConfig({
  colorScheme: 'light',
  config: {
    '--button-bg-color-default': 'blue',
  },
  theme: '*',
  variant: 'primary',
  component: 'button',
})
</script>

<template>
  <ThemeProvider :dark-mode-value="darkMode">
    <ConfigProvider
      :locale="locale"
      teleport-target-selector="#teleport-target"
      google-maps-api-key="AIzaSyATX2fY3BZwaKeURsQhwpEVLmLRr27s4vw"
    >
      <div
        class="p-11xl grid grid-cols-2 gap-xl bg-primary min-h-screen"
      >
        <Button
          variant="secondary-color"
          @click="darkMode = 'dark'"
        >
          Dark
        </Button>
        <Button @click="darkMode = 'light'">
          Light
        </Button>
        <Button @click="darkMode = 'system'">
          System
        </Button>
        <ThemeProvider dark-mode-value="system">
          <Button
            variant="secondary-color"
            @click="darkMode = 'system'"
          >
            System
          </Button>
        </ThemeProvider>

        <div>
          <NumberField
            :model-value="0"
            :format-options="{
              minimumFractionDigits: 2,
            }"
            :step="0.01"
            class="w-72"
          />
        </div>

        <div>
          <Popover :show-on-hover="true">
            <template #trigger>
              <button>test</button>
            </template>

            <template #content>
              test
            </template>
          </Popover>
        </div>

        <PasswordField
          :model-value="null"
          label="Password"
        />

        <Tooltip>
          <template #trigger>
            <button>
              test
            </button>
          </template>

          <template #content>
            content
          </template>
        </Tooltip>

        <DateField
          v-model="date"
          :is-date-disabled="(date) => {
            return date.getDay() === 4
          }"
          :hide-dropdown-trigger="false"
          class="w-72"
          label="Date field"
          hint="Select a date"
        >
          <template #date="{ date: d }">
            <div
              v-if="d.getDay() === 5"
              class="absolute bottom-1 size-1 bg-black rounded-full left-1/2 -translate-x-1/2 group-data-[selected]:bg-white"
            />
          </template>
        </DateField>

        <TimeField :model-value="null" />

        <Switch
          v-model="switchValue"
          icon-checked="checkboxIndicator"
          icon-unchecked="close"
          label="Switch"
          size="sm"
        />

        <Checkbox
          v-model="switchValue"
          label="Checkbox"
        />

        <RadioGroup
          v-model="selectedItem"
          :errors="['This is an error message.']"
          :is-disabled="false"
          :items="items"
          label="Radio Group"
          hint="This is a radio group."
        >
          <RadioGroupItem
            v-for="item of radioItems"
            :key="item.label"
            :value="item.value"
          >
            <div class="group-data-[state=checked]:bg-brand-primary-500">
              content
            </div>
          </RadioGroupItem>
        </RadioGroup>

        <Checkbox label="Checkbox" />

        <TextField
          v-model="value"
          :is-touched="true"
          :errors="['This is an error message.']"
          icon-left="check"
          label="Label"
        />

        <Select
          v-model="value"
          :items="selectItems"
          :display-fn="(value) => value"
          :style-config="{}"
          label="Yeet!"
          placeholder="Select a value"
        />

        <div>
          <Button
            icon-left="translate"
            class="w-84"
          >
            Yeet
          </Button>
        </div>
      </div>

      <div id="teleport-target" />
    </ConfigProvider>
  </ThemeProvider>
</template>
