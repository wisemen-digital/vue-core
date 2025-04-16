<script setup lang="ts">
import { ListboxRoot } from 'reka-ui'

import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const {
  activeViewOrSectionId, onSelectViewOrSection,
} = useInjectSettingsContext()
</script>

<template>
  <ListboxRoot
    :model-value="activeViewOrSectionId"
    selection-behavior="replace"
    class="
      border-secondary p-3xl gap-y-3xl bg-secondary-subtle hidden w-72 flex-col
      border-r border-solid
      @3xl/settings:flex
    "
    @update:model-value="(id) => onSelectViewOrSection(id as string)"
  >
    <slot />
  </ListboxRoot>
</template>
