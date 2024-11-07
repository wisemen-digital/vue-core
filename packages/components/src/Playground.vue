<script setup lang="ts">
import '@/styles/index.scss'
import '@/components/icon/iconStyle.config'
import '@/components/button/button/buttonStyle.config'
import '@/components/input-field-hint/inputFieldHintStyle.config'
import '@/components/input-field-error/inputFieldErrorStyle.config'
import '@/components/input-field-label/inputFieldLabelStyle.config'
import '@/components/popover/popoverStyle.config'
import '@/components/button/icon-button/iconButtonStyle.config'
import '@/components/select/selectStyle.config'
import '@/components/input-field/text-field/textFieldStyle.config'
import '@/components/tooltip/tooltipStyle.config'
import '@/components/tabs/tabsStyle.config'
import '@/components/dropdown-menu/dropdownMenuStyle.config'
import '@/components/tag/tagStyle.config'
import '@/components/checkbox/checkboxStyle.config'
import '@/components/input-field/text-area/textareaStyle.config'
import '@/components/dialog/dialogStyle.config'
import '@/components/table/tableStyle.config'
import '@/components/switch/switchStyle.config'

import { ref } from 'vue'

import AppConfigProvider from '@/components/config-provider/AppConfigProvider.vue'
import AppSelect from '@/components/select/AppSelect.vue'
import AppTable from '@/components/table/AppTable.vue'
import AppThemeProvider from '@/components/theme-provider/AppThemeProvider.vue'
import { useDarkMode } from '@/composables/index'
import type { SelectOption } from '@/types/select.type'

const value = ref<null | string>(null)
const selectItems = ref<SelectOption<string>[]>([
  {
    type: 'option',
    value: 'Apple',
  },
  {
    type: 'option',
    value: 'Banana',
  },
  {
    type: 'option',
    value: 'Blueberry',
  },
])

useDarkMode().value.value = 'dark'
</script>

<template>
  <AppConfigProvider
    :pagination="{ limit: 30 }"
    locale="nl"
  >
    <AppThemeProvider theme="dark">
      <div class="flex h-full flex-col p-24">
        <AppTable
          :is-loading="false"
          :pagination="{
            paginationOptions: {
              value: {
                pagination: {
                  limit: 0,
                  offset: 0,
                },
                // filters: {
                //   test: 'hehe',
                // },
              },
            },
          }"
          :columns="[
            {
              key: 'name',
              headerLabel: 'Name',
              width: '500px',
            },
            {
              key: 'email',
              headerLabel: 'Email',
              width: '500px',
            },
            {
              key: 'age',
              headerLabel: 'Age',
              width: '1000px',
            },
          ]"
          :data="{
            data: [],
            meta: {
              total: 0,
              limit: 0,
              offset: 0,
            },
          }"
        />

        <AppSelect
          v-if="false"
          v-model="value"
          :items="selectItems"
          :display-fn="(value) => value"
          label="Select a fruit"
          placeholder="Select a fruit"
          class="w-72"
        />
      </div>
    </AppThemeProvider>
  </AppConfigProvider>
</template>
