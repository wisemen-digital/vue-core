<script setup lang="ts">
import { ref } from 'vue'

import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import { VcIcon } from '@/components/index'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { defineComponentVariant } from '@/customClassVariants'
import Button from '@/packages/@next/button/button/Button.vue'
import IconButton from '@/packages/@next/button/icon/IconButton.vue'
import TextField from '@/packages/@next/text-field/TextField.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

import TextFieldOld from './components/input-field/text-field/TextField.vue'

setupDefaultStyles()

const isLoading = ref<boolean>(false)

defineComponentVariant({
  config: {
    asterisk: 'text-success-primary',
  },
  component: 'formField',
})

defineComponentVariant({
  config: {
    // root: 'border-none shadow-none focus-within:ring-0 focus-within:bg-secondary hover:bg-secondary',
  },
  component: 'textField',
})

const textFieldValue = ref<string | null>(null)
const isTouched = ref<boolean>(false)
</script>

<template>
  <ConfigProvider
    locale="en-US"
    teleport-target-selector="#test"
  >
    <ThemeProvider appearance="light">
      <<<<<<< HEAD
      <div class="flex w-full gap-lg h-[100vh] items-center justify-center">
        <Popover
          :is-close-button-hidden="false"
          popover-side="top"
          =="====="
          class="flex w-full gap-lg h-screen items-center justify-center"
          <div
        >
          <Button
            icon-left="search"
            variant="secondary-color"
            @click="isLoading = !isLoading"
          >
            >>>>>> @next/text-field
            >
            <template #trigger>
              <Button>Trigger</Button>
            </template>

            <<<<<<< HEAD
            <template #content>
              <div
                src="https://images.unsplash.com/photo-1740715537042-6de862cdaab4?q=80&w=2477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="w-80 h-40 p-xs rounded-xl"
              >
                <div class="flex justify-end">
                  <PopoverCloseButton />
                </div>
              </div>
            </template>
          </button>
        </Popover>
        =======
        <IconButton
          :is-loading="false"
          icon="search"
          variant="secondary-color"
          label="Search"
        />

        <div class="p-xl flex flex-col gap-lg">
          <TextFieldOld
            :model-value="null"
            :is-disabled="isLoading"
            placeholder="Placeholder"
            icon-left="search"
            class="w-72"
            label="Label"
          />

          <TextField
            v-model="textFieldValue"
            :is-disabled="isLoading"
            :is-required="true"
            :is-touched="isTouched"
            :errors="textFieldValue === null || textFieldValue.length === 0 ? ['Required'] : []"
            placeholder="Placeholder"
            icon-left="search"
            class="w-72"
            label="Username"
            hint="Please enter your username"
            @blur="isTouched = true"
          >
            <template #right>
              <div class="h-full flex items-center justify-center pr-lg text-tertiary">
                $
              </div>
            </template>

            <template #label-right>
              <VcIcon
                icon="infoCircle"
                class="size-4 text-secondary ml-xs"
              />
            </template>
          </TextField>

          bottom
        </div>
        >>>>>>> @next/text-field
      </div>

      <div id="test" />
    </ThemeProvider>
  </ConfigProvider>
</template>
