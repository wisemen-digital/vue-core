<script setup lang="ts">
import { ref } from 'vue'

import Checkbox from '@/components/checkbox/Checkbox.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Button from '@/components-v2/button/Button.vue'
import ButtonIconLeft from '@/components-v2/button/parts/ButtonIconLeft.vue'
import ButtonIconRight from '@/components-v2/button/parts/ButtonIconRight.vue'
import ButtonLoader from '@/components-v2/button/parts/ButtonLoader.vue'
import ButtonRoot from '@/components-v2/button/parts/ButtonRoot.vue'
import { defineClassVariant } from '@/customClassVariants'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

// const dialog = useDialog({
//   overlay: () => import('...'),
//   transition: () => import('...'),
//   component: () => import('...'),
// })

defineClassVariant({
  config: {
    base: 'enabled:bg-gradient-to-r from-brand-600 to-brand-800',
  },
  target: {
    prop: 'variant',
    value: 'primary',
  },
  component: 'button',
})

const isLoading = ref<boolean>(false)
const isDisabled = ref<boolean>(false)
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider appearance="light">
      <div class="w-full h-screen flex-col gap-xl flex items-center justify-center">
        <div class="flex gap-xl">
          <Checkbox
            v-model="isLoading"
            label="Is loading"
          />
          <Checkbox
            v-model="isDisabled"
            label="Is disabled"
          />
        </div>

        <div class="grid grid-cols-4 gap-lg">
          <div>
            <Button
              :is-loading="isLoading"
              :is-disabled="isDisabled"
              icon-left="search"
            >
              A Button
            </Button>
          </div>

          <div>
            <ButtonRoot
              :is-loading="isLoading"
              :is-disabled="isDisabled"
              :class-config="{
                loader: 'size-4 mr-1',
              }"
              icon-left="search"
              variant="secondary-color"
            >
              <div class="flex items-center">
                <ButtonLoader v-if="isLoading" />

                <ButtonIconLeft v-if="!isLoading" />
                A Button
                <ButtonIconRight />
              </div>
            </ButtonRoot>
          </div>

          <div>
            <Button
              :is-loading="isLoading"
              :is-disabled="isDisabled"
              :class-config="{
                loader: 'size-auto',
              }"
              icon-left="search"
              size="sm"
            >
              A Button

              <template #loader>
                <ButtonLoader>
                  Loading...
                </ButtonLoader>
              </template>
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  </ConfigProvider>
</template>
