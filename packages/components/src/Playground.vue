<script setup lang="ts">
import { computed, ref } from 'vue'

import Checkbox from '@/components/checkbox/Checkbox.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import DateField from '@/components/input-field/date-field/DateField.vue'
import TextField from '@/components/input-field/text-field/TextField.vue'
import TimeField from '@/components/input-field/time-field/TimeField.vue'
import RadioGroup from '@/components/radio-group/RadioGroup.vue'
import RadioGroupItem from '@/components/radio-group/RadioGroupItem.vue'
import Select from '@/components/select/Select.vue'
import Switch from '@/components/switch/Switch.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'
import type { SelectItem } from '@/types/select.type'

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

const test = new Date()

test.setFullYear(2025)

const date = ref<Date>(test)

const locale = navigator.language
</script>

<template>
  <ConfigProvider
    :locale="locale"
    google-maps-api-key="AIzaSyATX2fY3BZwaKeURsQhwpEVLmLRr27s4vw"
  >
    <ThemeProvider
      :is-dark-mode-enabled="false"
      theme="default"
      class="p-11xl grid grid-cols-2 gap-xl bg-primary min-h-screen"
    >
      <DateField
        v-model="date"
        :is-date-disabled="(date) => {
          return date.getDay() === 4
        }"
        class="w-72"
        label="Date field"
        hint="Select a date"
      />

      <TimeField :model-value="null" />

      <Switch
        v-model="switchValue"
        icon-checked="check"
        icon-unchecked="close"
        label="Switch"
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
      <!--
      <div>
        <Button
          icon-left="translate"
          class="w-84"
        >
          Yeet
        </Button>
      </div> -->
    </ThemeProvider>
  </configprovider>
</template>
