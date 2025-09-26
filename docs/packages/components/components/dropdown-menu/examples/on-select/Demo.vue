<script setup lang="ts">
import {
  VcButton,
  VcDropdownMenu,
  VcDropdownMenuGroup,
  VcDropdownMenuItem,
} from '@wisemen/vue-core-components'

function onShareViaEmail(): void {
  window.open('https://mail.google.com/', '_blank')
}

function onShareViaWhatsapp(): void {
  window.open('https://www.whatsapp.com/', '_blank')
}
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
        <VcDropdownMenuItem
          label="Email"
          @select="onShareViaEmail"
        />
        <VcDropdownMenuItem
          label="Whatsapp"
          @select="onShareViaWhatsapp"
        />
      </VcDropdownMenuGroup>
    </template>
  </VcDropdownMenu>
</template>
