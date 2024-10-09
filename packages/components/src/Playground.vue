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

import AppButton from '@/components/button/button/AppButton.vue'
</script>

<template>
  <div
    :style="{
      backgroundColor: 'var(--bg-primary)',
    }"
    class="grid min-h-screen grid-cols-3 gap-12 p-24"
  >
    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="secondary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="secondary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="secondary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="tertiary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="tertiary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="tertiary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="destructive-primary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="destructive-primary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="destructive-primary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="destructive-secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="destructive-secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="destructive-secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="destructive-tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="destructive-tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="destructive-tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
