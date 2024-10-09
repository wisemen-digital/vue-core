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
    }"
    :is-disabled="tagContext.isDisabled.value"
    icon="xClose"
    variant="ghost"
    label="Remove"
    class="-mr-1 ml-1.5"
    @click="tagContext.removeTag"
  />
</template>
