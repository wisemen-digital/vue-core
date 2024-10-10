<script setup lang="ts">
import { PopoverClose } from 'reka-ui'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
</script>

<template>
  <PopoverClose :as-child="true">
    <slot>
      <AppIconButton
        icon="xClose"
        label="Close"
        size="sm"
        variant="tertiary"
      />
    </slot>
  </PopoverClose>
</template>
