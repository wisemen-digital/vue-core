<script setup lang="ts">
import { ref } from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import {
  VcConfigProvider,
  VcThemeProvider,
} from '@/components/index'
import PhoneNumberField from '@/components/input-field/phone-number-field/PhoneNumberField.vue'
import Button from '@/packages/@next/button/default-button/Button.vue'
import TextField from '@/packages/@next/text-field/TextField.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

const selectValue = ref<string | string[] | null>([])
const isLoading = ref<boolean>(false)

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`)

setupDefaultStyles()
</script>

<template>
  <VcConfigProvider
    locale="en-NL"
    teleport-target-selector="#test"
  >
    <VcThemeProvider appearance="light">
      <div class="flex items-center justify-center h-screen bg-primary">
        <div class="flex flex-col gap-md">
          <div class="w-96 flex gap-24 flex-col items-end">
            <Button
              :is-loading="isLoading"
              loading-label="Submitting..."
              label="Content"
              variant="secondary-gray"
              icon-left="search"
            />

            <IconButton
              :is-loading="isLoading"
              icon="search"
              label="Content"
            />

            <Button
              label="Toggle"
              @click="isLoading = !isLoading"
            />
          </div>

          <TextField
            v-if="false"
            :model-value="null"
            :is-loading="false"
            :is-disabled="false"
            icon-left="search"
            placeholder="Search"
          />

          <PhoneNumberField
            v-if="false"
            :model-value="null"
          />

          <!-- <Select
            v-if="false"
            v-model="selectValue"
            :display-fn="(v) => v"
            :is-loading="false"
            :is-disabled="isLoading"
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
              v-for="item in items.slice(0, 5)"
              :key="item"
              :value="item"
            >
              {{ item }}
            </SelectItem>

            <SelectSeparator />

            <SelectItem
              v-for="item in items.slice(5)"
              :key="item"
              :value="item"
            >
              {{ item }}
            </SelectItem>
          </Select> -->
        </div>
      </div>

      <div id="test" />
    </VcThemeProvider>
  </VcConfigProvider>
</template>
