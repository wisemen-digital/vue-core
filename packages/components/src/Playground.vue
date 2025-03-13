<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider>
      <div class="h-screen flex items-center justify-center">
        <div class="relative">
          <p class="font-medium text-primary p-xs">
            Blur reveal text example longer longer more text.
          </p>

          <!-- <Transition
            :appear="true"
            enter-from-class="-translate-x-30"
            enter-to-class="translate-x-full"
            enter-active-class="duration-5000"
          > -->
          <Transition
            :appear="true"
            enter-from-class="-translate-x-[20%]"
            enter-to-class="translate-x-full"
            enter-active-class="duration-5000"
          >
            <div
              :style="{
                mask: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)',
                WebkitMask: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%)',
                backdropFilter: 'blur(3px)',
                backgroundSize: '4px 4px',
                backgroundImage: 'radial-gradient(transparent 1px, rgb(15, 17, 21) transparent 1px)',
              }"
              class="absolute top-0 left-0 h-full w-[120%]"
            />
          </Transition>

          <Transition
            :appear="true"
            enter-from-class="-translate-x-[20%]"
            enter-to-class="translate-x-full"
            enter-active-class="duration-5000"
          >
            <div
              class="absolute inset-0 flex w-[140%]"
            >
              <div class="bg-gradient-to-r from-transparent to-white w-20 h-full shrink-0" />
              <div class="bg-white size-full" />
            </div>
          </Transition>
        </div>
      </div>
    </ThemeProvider>
  </ConfigProvider>
</template>
