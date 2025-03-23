<script setup lang="ts">
import { ref } from 'vue'

import {
  VcConfigProvider,
  VcThemeProvider,
} from '@/components/index'
import PhoneNumberField from '@/components/input-field/phone-number-field/PhoneNumberField.vue'
import Button from '@/packages/@next/button/button/Button.vue'
import SelectItem from '@/packages/@next/select/parts/SelectItem.vue'
import Select from '@/packages/@next/select/Select.vue'
import TextField from '@/packages/@next/text-field/TextField.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

const selectValue = ref<string | string[] | null>([])
const isDisabled = ref<boolean>(false)

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`)

setupDefaultStyles()
</script>

<template>
  <VcConfigProvider
    locale="en-NL"
    teleport-target-selector="#test"
  >
    <VcThemeProvider appearance="light">
      <div class="flex items-center justify-center h-screen">
        <div class="flex flex-col gap-md">
          <Button @click="isDisabled = !isDisabled">
            Toggle disabled
          </Button>

          <TextField
            :model-value="null"
            :is-loading="false"
            :is-disabled="false"
            icon-left="search"
            placeholder="Search"
          />

          <PhoneNumberField :model-value="null" />

          <Select
            v-model="selectValue"
            :display-fn="(v) => v"
            :is-loading="false"
            :is-disabled="isDisabled"
            :virtual-list="{
              isEnabled: false,
              items,
            }"
            :filter="{
              isEnabled: true,
              isInline: true,
            }"
            class="w-72"
            icon-left="search"
            placeholder="Search"
          >
            <SelectItem
              v-for="item in items"
              :key="item"
              :value="item"
            >
              {{ item }}
            </SelectItem>
          </Select>
        </div>
      </div>

      <div id="test" />
    </VcThemeProvider>
  </VcConfigProvider>
</template>
