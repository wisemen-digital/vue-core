<script setup lang="ts">
import { PopoverClose } from 'reka-ui'

import IconButton from '@/components/button/icon-button/IconButton.vue'
</script>

<template>
  <PopoverClose :as-child="true">
    <slot>
      <IconButton
        icon="close"
        label="Close"
        size="sm"
        variant="tertiary"
      />
    </slot>
  </PopoverClose>
</template>
