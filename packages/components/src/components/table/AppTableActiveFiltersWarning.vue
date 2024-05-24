<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'
import AppText from '@/components/text/AppText.vue'

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
  <div
    class="sticky left-0 flex items-center justify-center gap-x-2 p-4"
  >
    <AppText
      variant="caption"
      class="text-muted-foreground"
    >
      {{ t('components.table.results_might_be_hidden_because_of_active_filters', { count: props.activeFilterCount }) }}
    </AppText>

    <AppButton
      size="xs"
      icon-right="close"
      variant="muted"
      @click="onClearFilters"
    >
      {{ t('components.table.clear_filters') }}
    </AppButton>
  </div>
</template>
