<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
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
</script>

<template>
  <div class="absolute left-1/2 top-1/2 z-10 w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background/25 p-8 shadow-card-shadow backdrop-blur-sm">
    <AppIcon
      icon="search"
      size="xl"
      class="mx-auto text-muted-foreground"
    />

    <AppText
      variant="body"
      class="mt-4 text-center font-medium text-muted-foreground"
    >
      {{ emptyTextTitle }}
    </AppText>

    <div class="mt-2">
      <template v-if="props.activeFilterCount > 0">
        <AppText
          variant="subtext"
          class="text-center text-muted-foreground"
        >
          {{ emptyTextMessage }}
        </AppText>

        <AppButton
          variant="muted"
          icon-right="close"
          size="sm"
          class="mx-auto mt-4"
          @click="onClearFilters"
        >
          {{ t('components.table.clear_filter_filters', { count: props.activeFilterCount }) }}
        </AppButton>
      </template>

      <AppText
        v-else
        variant="subtext"
        class="text-center text-muted-foreground"
      >
        {{ emptyTextMessage }}
      </AppText>
    </div>
  </div>
</template>
