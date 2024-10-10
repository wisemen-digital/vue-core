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

import Buttons from '@/Buttons.vue'
import InputFields from '@/InputFields.vue'
import Popovers from '@/Popovers.vue'
import Tabs from '@/Tabs.vue'
import Tooltips from '@/Tooltips.vue'
</script>

<template>
  <div
    :style="{
      backgroundColor: 'var(--bg-primary)',
    }"
    class="flex min-h-screen flex-col gap-y-24 p-24"
  >
    <Tabs />
    <Popovers />
    <Tooltips />
    <InputFields />
    <Buttons />
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
