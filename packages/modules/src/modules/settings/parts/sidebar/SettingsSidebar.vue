<script setup lang="ts">
import { ListboxRoot } from 'reka-ui'

import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const {
  activeViewId, onChangeView,
} = useInjectSettingsContext()
</script>

<template>
  <ListboxRoot
    :model-value="activeViewId"
    selection-behavior="replace"
    class="
      border-secondary p-3xl gap-y-3xl bg-secondary-subtle flex w-72 flex-col
      border-r border-solid
    "
    @update:model-value="(id) => onChangeView(id as string)"
  >
    <slot />
  </ListboxRoot>
</template>
