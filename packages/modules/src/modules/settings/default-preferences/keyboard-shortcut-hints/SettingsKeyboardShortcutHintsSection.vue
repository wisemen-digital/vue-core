<script setup lang="ts">
import {
  VcButton,
  VcKeyboardShortcut,
  VcSwitch,
} from '@wisemen/vue-core-components'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useDefaultPreference } from '@/modules/settings/default-preferences/defaultPreferences'
import SettingsSection from '@/modules/settings/parts/content/SettingsSection.vue'
import { isMobileDevice } from '@/utils/device.util'

const { t } = useI18n()
const value = useDefaultPreference('enableKeyboardShortcutHints')

const label = computed<string>(() => {
  if (value.value) {
    return t('module.settings.section.keyboard_shortcut_hints.enabled.label')
  }

  return t('module.settings.section.keyboard_shortcut_hints.disabled.label')
})
</script>

<template>
  <SettingsSection>
    <form>
      <p
        v-if="isMobileDevice()"
        class="
          py-sm px-md bg-brand-primary text-brand-primary rounded-md text-sm
          font-medium
        "
      >
        {{ t('module.settings.section.keyboard_shortcut_hints.not_available_on_mobile') }}
      </p>

      <div v-else>
        <VcSwitch
          v-model="value"
          :label="label"
        />

        <VcButton
          variant="secondary"
          size="sm"
          class="mt-2xl"
        >
          {{ t('module.settings.section.keyboard_shortcut_hints.example') }}

          <VcKeyboardShortcut
            v-if="value"
            :aria-hidden="true"
            :keyboard-keys="['meta', 'k']"
            :class-config="{
              keyboardKey: {
                key: 'bg-secondary text-tertiary shadow-none',
              },
            }"
            class="ml-md"
          />
        </VcButton>
      </div>
    </form>
  </SettingsSection>
</template>
