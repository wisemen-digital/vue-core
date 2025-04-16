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
import { useId } from 'vue'
import { useI18n } from 'vue-i18n'

import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const { searchTerm } = useInjectSettingsContext()

const { t } = useI18n()
const id = useId()

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
    <label
      :for="id"
      class="sr-only"
    >
      {{ t('module.settings.search.placeholder') }}
    </label>

    <VcTextFieldRoot
      :id="id"
      v-model="searchTerm"
      :placeholder="t('module.settings.search.placeholder')"
      icon-left="search"
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
