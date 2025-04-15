<script setup lang="ts">
import { computed } from 'vue'

import { useProvideSettingsSectionContext } from '@/modules/settings/settingsSection.context'
import type { SettingsSection } from '@/modules/settings/types/settings.type'

const props = defineProps<{
  section: SettingsSection
}>()

useProvideSettingsSectionContext({ section: computed<SettingsSection>(() => props.section) })
</script>

<template>
  <slot />
</template>
