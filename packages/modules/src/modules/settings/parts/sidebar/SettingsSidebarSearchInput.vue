<script setup lang="ts">
import type { VcKeyboardShortcutProps } from '@wisemen/vue-core-components'
import {
  VcKeyboardShortcut,
  VcKeyboardShortcutProvider,
  VcTextFieldIconLeft,
  VcTextFieldInput,
  VcTextFieldRoot,
} from '@wisemen/vue-core-components'
import { ListboxFilter } from 'reka-ui'

import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const { searchTerm } = useInjectSettingsContext()

const SHORTCUT_KEYS: VcKeyboardShortcutProps['keyboardKeys'] = [
  'meta',
  'f',
]
</script>

<template>
  <VcKeyboardShortcutProvider
    :keyboard-keys="SHORTCUT_KEYS"
    :prevent-default="true"
  >
    <VcTextFieldRoot
      v-model="searchTerm"
      icon-left="search"
      placeholder="Search..."
    >
      <VcTextFieldIconLeft />

      <ListboxFilter :as-child="true">
        <VcTextFieldInput />
      </ListboxFilter>

      <VcKeyboardShortcut
        v-if="false"
        :keyboard-keys="SHORTCUT_KEYS"
        :class-config="{
          keyboardKey: {
            key: 'bg-tertiary',
          },
        }"
        class="mr-md"
      />
    </VcTextFieldRoot>
  </VcKeyboardShortcutProvider>
</template>
