<script setup lang="ts">
import {
  VcButton,
  VcDropdownMenu,
  VcDropdownMenuGroup,
  VcDropdownMenuItem,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcDropdownMenu>
    <template #trigger>
      <VcButton variant="secondary">
        Share via
      </VcButton>
    </template>

    <template #content>
      <VcDropdownMenuGroup>
        <VcDropdownMenuItem label="Email" />
        <VcDropdownMenuItem
          :is-disabled="true"
          label="Whatsapp"
        />
      </VcDropdownMenuGroup>
    </template>
  </VcDropdownMenu>
</template>
