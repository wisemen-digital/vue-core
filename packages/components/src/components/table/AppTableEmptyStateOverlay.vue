<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import { useTableStyle } from '@/components/table/table.style'
import AppText from '@/components/text/AppText.vue'
import type { TableEmptyTextProp } from '@/types/table.type'

const props = defineProps<{
  activeFilterCount: number
  emptyText: TableEmptyTextProp | null
}>()

const emit = defineEmits<{
  clearFilters: []
}>()

const { t } = useI18n()

function onClearFilters(): void {
  emit('clearFilters')
}

const emptyTextTitle = computed<string>(() => {
  const hasActiveFilters = props.activeFilterCount > 0

  if (hasActiveFilters) {
    return props.emptyText?.noResults.title ?? t('components.table.empty_state.no_results.title')
  }

  return props.emptyText?.noData.title ?? t('components.table.empty_state.no_data.title')
})

const emptyTextMessage = computed<string>(() => {
  const hasActiveFilters = props.activeFilterCount > 0

  if (hasActiveFilters) {
    return props.emptyText?.noResults.message ?? t('components.table.empty_state.no_results.message')
  }

  return props.emptyText?.noData.message ?? t('components.table.empty_state.no_data.message')
})

const tableStyle = useTableStyle()

const emptyOverlayContainerClasses = computed<string>(() => tableStyle.emptyOverlayContainer())
const emptyOverlayContentClasses = computed<string>(() => tableStyle.emptyOverlayContent())
const emptyOverlayIconClasses = computed<string>(() => tableStyle.emptyOverlayIcon())
const emptyOverlayTextClasses = computed<string>(() => tableStyle.emptyOverlayText())
const emptyOverlayTitleClasses = computed<string>(() => tableStyle.emptyOverlayTitle())
const emptyOverlayClearButtonClasses = computed<string>(() => tableStyle.emptyOverlayClearButton())
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <div
    :class="emptyOverlayContainerClasses"
    class="overlayContainer"
  >
    <AppIcon
      :class="emptyOverlayIconClasses"
      icon="search"
      size="xl"
    />

    <AppText
      :class="emptyOverlayTitleClasses"
      variant="body"
    >
      {{ emptyTextTitle }}
    </AppText>

    <div :class="emptyOverlayContentClasses">
      <template v-if="props.activeFilterCount > 0">
        <AppText
          :class="emptyOverlayTextClasses"
          variant="subtext"
        >
          {{ emptyTextMessage }}
        </AppText>

        <AppButton
          :class="emptyOverlayClearButtonClasses"
          variant="muted"
          icon-right="close"
          size="sm"
          @click="onClearFilters"
        >
          {{ t('components.table.clear_filter_filters', { count: props.activeFilterCount }) }}
        </AppButton>
      </template>

      <AppText
        v-else
        :class="emptyOverlayTextClasses"
        variant="subtext"
      >
        {{ emptyTextMessage }}
      </AppText>
    </div>
  </div>
</template>

<style scoped>
@-moz-document url-prefix() {
  .overlayContainer {
    background: rgba(var(--background))
  }
}
</style>
