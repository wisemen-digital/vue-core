<script setup lang="ts">
import { ref } from 'vue'

import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Button from '@/packages/@next/button/button/Button.vue'
import SelectGroup from '@/packages/@next/select/parts/SelectGroup.vue'
import SelectGroupLabel from '@/packages/@next/select/parts/SelectGroupLabel.vue'
import SelectItem from '@/packages/@next/select/parts/SelectItem.vue'
import SelectSeparator from '@/packages/@next/select/parts/SelectSeparator.vue'
import Select from '@/packages/@next/select/Select.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

const value = ref<string | null>(null)
const isLoading = ref<boolean>(false)
</script>

<template>
  <ConfigProvider
    locale="en-NL"
    teleport-target-selector="#test"
  >
    <ThemeProvider appearance="dark">
      <div class="flex w-full gap-lg h-[100vh] items-center justify-center bg-primary">
        <Select
          v-model="value"
          :is-disabled="false"
          :is-loading="isLoading"
          :filter="{
            isEnabled: true,
            isInline: true,
          }"
          :display-fn="option => option"
          placeholder="Placeholder"
          icon-left="search"
          class="w-72"
        >
          <template #base />

          <SelectItem value="First option">
            <span>
              First option
            </span>
          </SelectItem>

          <SelectSeparator />

          <SelectItem value="Second option">
            Second option
          </SelectItem>

          <SelectItem
            :is-disabled="true"
            value="Third option"
          >
            Third option
          </SelectItem>

          <SelectGroup>
            <SelectGroupLabel>
              Label
            </SelectGroupLabel>

            <SelectItem value="Fourth option">
              Fourth option
            </SelectItem>

            <SelectItem value="Fifth option">
              Fifth option
            </SelectItem>
          </SelectGroup>
        </Select>

        <Button @click="isLoading = !isLoading">
          Toggle
        </Button>
      </div>

      <div id="test" />
    </ThemeProvider>
  </ConfigProvider>
</template>
