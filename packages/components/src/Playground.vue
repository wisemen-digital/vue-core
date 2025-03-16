<script setup lang="ts">
import { ref } from 'vue'

import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Button from '@/packages/@next/button/button/Button.vue'
import IconButton from '@/packages/@next/button/icon/IconButton.vue'
import TextField from '@/packages/@next/text-field/TextField.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

import ButtonOld from './components/button/button/Button.vue'
import TextFieldOld from './components/input-field/text-field/TextField.vue'

setupDefaultStyles()

const isLoading = ref(true)
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider appearance="light">
      <div class="flex w-full gap-lg h-screen items-center justify-center">
        <Button
          icon-left="search"
          variant="secondary-color"
          @click="isLoading = !isLoading"
        >
          Button
        </Button>

        <IconButton
          :is-loading="false"
          icon="search"
          variant="secondary-color"
          label="Search"
        />

        <ButtonOld>
          test
        </ButtonOld>

        <div class="p-xl flex flex-col gap-lg">
          <TextFieldOld
            :model-value="null"
            :is-disabled="isLoading"
            icon-left="search"
            class="w-72"
          />
          <TextField
            :is-disabled="isLoading"
            icon-left="search"
            class="w-72"
          />
        </div>
      </div>
    </ThemeProvider>
  </ConfigProvider>
</template>
