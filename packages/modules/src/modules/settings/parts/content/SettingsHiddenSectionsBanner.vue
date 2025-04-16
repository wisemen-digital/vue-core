<script setup lang="ts">
import { VcButton } from '@wisemen/vue-core-components'
import { useI18n } from 'vue-i18n'

import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const props = defineProps<{
  hiddenSectionCount: number
}>()

const {
  activeView, onSelectViewOrSection,
} = useInjectSettingsContext()

const { t } = useI18n()

function onShowAll(): void {
  onSelectViewOrSection(activeView.value.id)
}
</script>

<template>
  <div class="gap-x-md mt-2xl flex items-center justify-center">
    <p class="text-tertiary text-xs">
      {{ t('module.settings.settings_are_hidden.label', { count: props.hiddenSectionCount, viewName: activeView.title }) }}
    </p>

    <VcButton
      :class-config="{
        root: 'h-6 text-xs px-sm font-regular',
      }"
      variant="secondary"
      size="sm"
      @click="onShowAll"
    >
      {{ t('module.settings.settings_are_hidden.show_all.label') }}
    </VcButton>
  </div>
</template>
