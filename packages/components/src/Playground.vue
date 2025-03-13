<script setup lang="ts">
import { ref } from 'vue'

import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Icon from '@/packages/@next/icon/Icon.vue'
import Tabs from '@/packages/@next/tabs/button/ButtonTabs.vue'
import TabsItem from '@/packages/@next/tabs/button/parts/ButtonTabsItem.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

const tabValue = ref<string>('underline')
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider appearance="light">
      <div class="p-8xl flex">
        <Tabs
          v-model="tabValue"
          variant="underline"
        >
          <template #items>
            <TabsItem value="underline">
              Settings
            </TabsItem>

            <TabsItem value="button-border">
              Profile
            </TabsItem>

            <TabsItem
              :is-disabled="true"
              value="button-brand"
            >
              <div class="flex items-center gap-x-2 justify-center">
                <Icon
                  icon="search"
                  class="size-4"
                />

                Search
              </div>
            </TabsItem>
          </template>
        </Tabs>
      </div>
    </ThemeProvider>
  </ConfigProvider>
</template>
