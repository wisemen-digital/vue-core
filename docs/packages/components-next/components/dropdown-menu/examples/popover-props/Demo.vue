<script setup lang="ts">
import {
  VcButton,
  VcDropdownMenu,
  VcDropdownMenuGroup,
  VcDropdownMenuItem,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcDropdownMenu
    :is-popover-arrow-hidden="true"
    :popover-align-offset="20"
    popover-side="top"
  >
    <template #trigger>
      <VcButton variant="secondary">
        Share via
      </VcButton>
    </template>

    <template #content>
      <VcDropdownMenuGroup>
        <VcDropdownMenuItem label="Email" />
        <VcDropdownMenuItem label="Whatsapp" />
      </VcDropdownMenuGroup>
    </template>
  </VcDropdownMenu>
</template>
