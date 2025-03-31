<script setup lang="ts">
import {
  VcButton,
  VcDropdownMenu,
  VcDropdownMenuGroup,
  VcDropdownMenuItem,
  VcDropdownMenuSeparator,
  VcDropdownMenuSubMenu,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcDropdownMenu>
    <template #trigger>
      <VcButton variant="secondary">
        Manage
      </VcButton>
    </template>

    <template #content>
      <VcDropdownMenuGroup>
        <VcDropdownMenuItem
          label="Translations"
          icon="translate"
        />
      </VcDropdownMenuGroup>

      <VcDropdownMenuSeparator />

      <VcDropdownMenuGroup>
        <VcDropdownMenuItem label="Billing" />

        <VcDropdownMenuSubMenu label="Invite">
          <VcDropdownMenuGroup>
            <VcDropdownMenuItem label="Email" />
            <VcDropdownMenuItem label="App" />
          </VcDropdownMenuGroup>

          <VcDropdownMenuSeparator />

          <VcDropdownMenuGroup>
            <VcDropdownMenuItem label="Other" />
          </VcDropdownMenuGroup>
        </VcDropdownMenuSubMenu>
      </VcDropdownMenuGroup>

      <VcDropdownMenuSeparator />

      <VcDropdownMenuGroup>
        <VcDropdownMenuItem
          :is-destructive="true"
          label="Logout"
        />
      </VcDropdownMenuGroup>
    </template>
  </VcDropdownMenu>
</template>
