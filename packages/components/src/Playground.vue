<script setup lang="ts">
import { ref } from 'vue'

import {
  VcConfigProvider,
  VcThemeProvider,
} from '@/components/index'
import PhoneNumberField from '@/components/input-field/phone-number-field/PhoneNumberField.vue'
import Button from '@/packages/@next/button/default-button/Button.vue'
import IconButton from '@/packages/@next/button/icon-button/IconButton.vue'
import Popover from '@/packages/@next/popover/Popover.vue'
import SelectItem from '@/packages/@next/select/parts/SelectItem.vue'
import SelectSeparator from '@/packages/@next/select/parts/SelectSeparator.vue'
import Select from '@/packages/@next/select/Select.vue'
import TextField from '@/packages/@next/text-field/TextField.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

const isLoading = ref<boolean>(false)

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
              icon-left="plus"
              loading-label="Creating project..."
              label="Create project"
              variant="primary"
              size="sm"
            />

            <Popover>
              <template #trigger>
                <IconButton
                  :is-loading="isLoading"
                  icon="filter"
                  label="Content"
                  variant="secondary-gray"
                />
              </template>

              <template #content>
                <div class="w-96 h-40" />
              </template>
            </Popover>

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

          <Select
            :model-value="null"
            :display-fn="(v) => v"
            :is-loading="false"
            :is-disabled="isLoading"
            :filter="{
              isEnabled: true,
              isInline: true,
            }"
            class="w-72"
            icon-left="search"
            placeholder="Search"
          >
            <SelectItem
              value="1"
            >
              First item
            </SelectItem>

            <SelectSeparator />

            <SelectItem
              value="2"
            >
              Second item
            </SelectItem>
          </Select>
        </div>
      </div>

      <div id="test" />
    </VcThemeProvider>
  </VcConfigProvider>
</template>
