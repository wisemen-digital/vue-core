<script setup lang="ts">
import IconButton from '@/components/button/icon-button/IconButton.vue'
import { injectTagContext } from '@/components/tag/tag.context'

const tagContext = injectTagContext()
</script>

<template>
  <IconButton
    :style-config="{
      '--icon-button-size-default': '18px',
      '--icon-button-icon-size-default': '14px',
      '--button-bg-color-disabled': 'transparent',
      '--button-border-color-disabled': 'transparent',
    }"
    :is-disabled="tagContext.isDisabled.value"
    icon="close"
    variant="tertiary"
    label="Remove"
    class="-mr-1 ml-1.5"
    @click="tagContext.removeTag"
  />
</template>
