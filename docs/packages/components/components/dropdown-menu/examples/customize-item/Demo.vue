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
        <VcDropdownMenuItem label="Email">
          <div class="flex items-center gap-2">
            <img
              src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
              alt="GMail"
              class="w-8"
            >
            <p>GMail</p>
          </div>
        </VcDropdownMenuItem>
        <VcDropdownMenuItem label="Whatsapp">
          <div class="flex items-center gap-2">
            <img
              src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-whatsapp-icon-png-image_3584844.jpg"
              alt="Whatsapp"
              class="w-8"
            >
            <p>Whatsapp</p>
          </div>
        </VcDropdownMenuItem>
      </VcDropdownMenuGroup>
    </template>
  </VcDropdownMenu>
</template>
