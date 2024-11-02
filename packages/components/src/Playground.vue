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

import AppAddressAutocomplete from '@/components/autocomplete/AppAddressAutocomplete.vue'
import AppConfigProvider from '@/components/config-provider/AppConfigProvider.vue'
import AppThemeProvider from '@/components/theme-provider/AppThemeProvider.vue'
import type { Address } from '@/types/addressAutoComplete'

const value = ref<Address | null>({
  bus: '',
  city: 'Diepenbeek',
  coordinates: {
    lat: 50.9105115,
    lng: 5.413977,
  },
  country: 'BE',
  postalCode: '3590',
  street: 'Kapelstraat',
  streetNumber: '63a',
})
</script>

<template>
  <AppConfigProvider
    :pagination="{ limit: 30 }"
    locale="nl"
  >
    <AppThemeProvider theme="light">
      <div class="p-24">
        <AppAddressAutocomplete
          v-model="value"
          icon-left="search"
          class="w-72"
        />
      </div>
    </AppThemeProvider>
  </AppConfigProvider>
</template>
