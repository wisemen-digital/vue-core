<script setup lang="ts">
import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
import { injectTagContext } from '@/components/tag/tag.context.js'

const tagContext = injectTagContext()
</script>

<template>
  <AppIconButton
    :style-config="{
      '--icon-button-size-default': '18px',
      '--icon-button-icon-size-default': '14px',
      '--button-bg-color-hover': 'transparent',
      '--button-bg-color-active': 'transparent',
      '--button-bg-color-focus': 'transparent',
      '--button-bg-color-disabled': 'transparent',
      '--button-bg-color-default': 'transparent',
      '--button-border-color-active': 'transparent',
      '--button-border-color-default': 'transparent',
      '--button-border-color-disabled': 'transparent',
      '--button-border-color-focus': 'transparent',
    }"
    :is-disabled="tagContext.isDisabled.value"
    icon="xClose"
    variant="tertiary"
    label="Remove"
    class="-mr-1 ml-1.5"
    @click="tagContext.removeTag"
  />
</template>
