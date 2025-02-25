<script setup lang="ts">
import { ref } from 'vue'

import AnimatedNumber from '@/components/animated-number/AnimatedNumber.vue'
import AnimatedNumberGroup from '@/components/animated-number/AnimatedNumberGroup.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import NumberField from '@/components/input-field/number-field/NumberField.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'
import TestTransition from '@/TestTransition.vue'
import type { SelectItem } from '@/types/select.type'

setupDefaultStyles()

const value = ref<string>(
  '1',
)

const selectItems: SelectItem<string>[] = [
  ...Array.from({ length: 20 }).fill(null).map((_, index) => ({
    type: 'option',
    value: index.toString(),
  })) as any,
]

const test = ref<number>(5)
</script>

<template>
  <ConfigProvider locale="en">
    <ThemeProvider>
      <div class="p-24">
        <TestTransition />
      </div>

      <div
        v-if="false"
        class="p-24 grid grid-cols-1 gap-4xl"
      >
        <NumberField v-model="test" />

        <div class="flex">
          <AnimatedNumberGroup>
            <AnimatedNumber
              :value="test"
              class="text-4xl"
              suffix=" Cows"
            />

            <AnimatedNumber
              :value="test"
              class="text-4xl"
              suffix=" Cows"
            />
          </AnimatedNumberGroup>
        </div>
      </div>
    </ThemeProvider>
  </ConfigProvider>
</template>
