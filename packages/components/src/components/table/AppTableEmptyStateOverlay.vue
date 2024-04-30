<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppButton from '../button/AppButton.vue'
import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'

const props = defineProps<{
  activeFilterCount: number
}>()

const emit = defineEmits<{
  clearFilters: []
}>()

const { t } = useI18n()

function onClearFilters(): void {
  emit('clearFilters')
}
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
      {{ t('components.table.no_results_found') }}
    </AppText>

    <div class="mt-2">
      <template v-if="props.activeFilterCount > 0">
        <AppText
          variant="subtext"
          class="text-center text-muted-foreground"
        >
          {{ t('components.table.no_query_match') }}
        </AppText>

        <AppButton
          variant="secondary"
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
        {{ t('components.table.no_data') }}
      </AppText>
    </div>
  </div>
</template>
