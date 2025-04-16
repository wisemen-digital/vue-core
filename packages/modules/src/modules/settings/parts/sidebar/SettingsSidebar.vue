<script setup lang="ts">
import { ListboxRoot } from 'reka-ui'

import { useInjectSettingsContext } from '@/modules/settings/settings.context'
import type { HistoryItem } from '@/modules/settings/settingsHistory.composable'

const {
  activeItem, onShowItem,
} = useInjectSettingsContext()
</script>

<template>
  <ListboxRoot
    :model-value="activeItem"
    selection-behavior="replace"
    class="
      border-secondary p-3xl gap-y-3xl bg-secondary-subtle hidden w-72 flex-col
      border-r border-solid
      @3xl/settings:flex
    "
    @update:model-value="(item) => onShowItem(item as HistoryItem)"
  >
    <slot />
  </ListboxRoot>
</template>
