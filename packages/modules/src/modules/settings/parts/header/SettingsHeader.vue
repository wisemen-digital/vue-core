<script setup lang="ts">
import SettingsHeaderCloseButton from '@/modules/settings/parts/header/SettingsHeaderCloseButton.vue'
import SettingsHeaderControls from '@/modules/settings/parts/header/SettingsHeaderControls.vue'
import SettingsHeaderExpandButton from '@/modules/settings/parts/header/SettingsHeaderExpandButton.vue'
import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const { activeView } = useInjectSettingsContext()
</script>

<template>
  <header
    class="
      py-xl pl-4xl pr-2xl border-secondary flex items-center justify-between
      border-b border-solid
    "
  >
    <div class="flex items-center">
      <SettingsHeaderControls />

      <h2 class="text-primary ml-md text-lg font-semibold">
        {{ activeView.title }}
      </h2>
    </div>

    <div class="gap-x-xs flex items-center">
      <slot name="header-right" />
      <SettingsHeaderExpandButton />
      <SettingsHeaderCloseButton />
    </div>
  </header>
</template>
