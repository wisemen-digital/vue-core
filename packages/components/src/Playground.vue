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

import AppButton from '@/components/button/button/AppButton.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppPopoverTrigger from '@/components/popover/AppPopoverTrigger.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'
</script>

<template>
  <div class="flex gap-x-24 p-24">
    <AppPopover>
      <AppPopoverTrigger>
        <AppButton>Button</AppButton>
      </AppPopoverTrigger>

      <template #content>
        <div class="h-40 w-80 p-2">
          Content
        </div>
      </template>
    </AppPopover>

    <AppTooltip>
      <template #default>
        <AppButton>Button</AppButton>
      </template>

      <template #content>
        <div class="h-40 w-80 p-2">
          Content
        </div>
      </template>
    </AppTooltip>
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
