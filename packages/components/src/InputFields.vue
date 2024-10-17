<script setup lang="ts">
import { ref } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppDateField from '@/components/input-field/date-field/AppDateField.vue'
import AppNumberField from '@/components/input-field/number-field/AppNumberField.vue'
import AppPasswordField from '@/components/input-field/password-field/AppPasswordField.vue'
import AppPhoneNumberField from '@/components/input-field/phone-number-field/AppPhoneNumberField.vue'
import AppTextarea from '@/components/input-field/text-area/AppTextarea.vue'
import AppTextField from '@/components/input-field/text-field/AppTextField.vue'
import AppSelect from '@/components/select/AppSelect.vue'
import AppTag from '@/components/tag/AppTag.vue'
import type { SelectItem } from '@/types/select.type.js'

const value = ref<null | string>(null)
const password = ref<null | string>(null)
const textareaValue = ref<null | string>(null)
const phoneNumberValue = ref<null | string>(null)
const numberValue = ref<null | number>(null)
const dateValue = ref<Date | null>(null)

const selectValue = ref<null | string>(null)
const selectArrayValue = ref<string[]>([])
const selectItems = ref<SelectItem<string>[]>([
  {
    items: [
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
      {
        isDisabled: true,
        type: 'option',
        value: 'Grapes',
      },
      {
        isDisabled: true,
        type: 'option',
        value: 'Pineapple',
      },
      {
        type: 'option',
        value: 'Strawberry',
      },
    ],
    label: 'Fruits',
    type: 'group',
  },
  {
    type: 'separator',
  },
  {
    items: [
      {
        type: 'option',
        value: 'Aubergine',
      },
      {
        type: 'option',
        value: 'Broccoli',
      },
      {
        type: 'option',
        value: 'Carrot',
      },
    ],
    label: 'Vegetables',
    type: 'group',
  },
])

const isTouched = ref<boolean>(false)
</script>

<template>
  <div class="grid grid-cols-3 gap-12">
    <AppTextField
      v-model="value"
      icon-left="translate01"
      placeholder="email@example.com"
      hint="This is a hint."
      label="Email"
    />

    <AppTextField
      v-model="value"
      :is-disabled="true"
      icon-left="translate01"
      label="Email"
      hint="This is a hint."
    />

    <AppTextField
      v-model="value"
      :is-loading="true"
      icon-left="translate01"
      label="Email"
      hint="This is a hint."
    />

    <AppTextField
      v-model="value"
      :errors="value === 'wouter' ? null : {
        _errors: ['This is an error message.'],
      }"
      :is-touched="isTouched"
      icon-left="translate01"
      label="Email"
      @blur="isTouched = true"
    />

    <AppPasswordField
      v-model="password"
      :is-required="true"
      label="Password"
    />

    <AppPasswordField
      v-model="password"
      :is-required="true"
      :is-disabled="true"
      label="Password"
    />

    <AppNumberField
      v-model="numberValue"
      :min="0"
      :max="99"
      :is-disabled="false"
      label="Enter your age"
      class="w-48"
    />

    <AppTextarea
      v-model="textareaValue"
      :is-disabled="false"
      placeholder="Write something..."
      resize="auto-vertical"
      label="Tell us something about yourself"
    />

    <AppTextarea
      v-model="textareaValue"
      :is-disabled="true"
      placeholder="Write something..."
      resize="auto-vertical"
      label="Tell us something about yourself"
    />

    <AppTextarea
      v-model="textareaValue"
      :errors="{
        _errors: ['This is an error message.'],
      }"
      :is-touched="true"
      placeholder="Write something..."
      resize="auto-vertical"
      label="Tell us something about yourself"
    />

    <AppSelect
      v-model="selectValue"
      :items="selectItems"
      :display-fn="(value) => value"
      :is-loading="false"
      :filter-fn="(option, searchTerm) => option.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())"
      label="Select a fruit"
      placeholder="Select a fruit"
      icon-left="translate01"
      side="right"
      align="start"
      hint="You can only select 1 fruit."
    >
      <template #group-label="{ label }">
        <span class="text-xs font-bold uppercase">{{ label }}</span>
      </template>
    </AppSelect>

    <AppSelect
      v-model="selectArrayValue"
      :items="selectItems"
      :display-fn="(value) => value"
      :is-loading="false"
      label="Select a fruit"
      icon-left="translate01"
      placeholder="Select a fruit"
      hint="You can select multiple fruits."
    >
      <template #value="{ value: vv }">
        <div class="w-full items-center justify-between truncate pr-2">
          Fruits

          <AppTag>
            <span class="text-[12px]">{{ vv.length }} selected</span>
          </AppTag>
        </div>
      </template>
    </AppSelect>

    <AppSelect
      v-model="selectArrayValue"
      :items="selectItems"
      :display-fn="(value) => value"
      :filter-fn="(option, searchTerm) => option.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())"
      :is-loading="true"
      :is-touched="true"
      :errors="{
        _errors: ['This is an error message.'],
      }"
      :is-disabled="true"
      icon-left="translate01"
      label="Select a fruit"
      placeholder="Select a fruit"
      hint="You can select multiple fruits."
    >
      <!-- <template #tag="{ value: vv }">
        <AppSelectValueTag :value="vv">
          {{ vv }}
        </AppSelectValueTag>
      </template> -->

      <template #option-content="{ item }">
        <div class="flex items-center justify-between pr-4">
          <div class="flex items-center gap-x-2">
            <AppIcon icon="translate01" />
            {{ item.value }}
          </div>

          <AppTag>
            {{ item.value }}
          </AppTag>
        </div>
      </template>
    </AppSelect>

    <AppPhoneNumberField
      v-model="phoneNumberValue"
      label="Phone number"
    />

    <div>
      <AppDateField />
    </div>
  </div>
</template>
