<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import Button from '@/components/button/default-button/Button.vue'
import { useInjectTableContext } from '@/components/table/table.context'

const {
  isEmpty,
  isLoading,
  activeFilterCount,
  onClearFiltersAndSearch,
} = useInjectTableContext()

const { t } = useI18n()
</script>

<template>
  <div
    v-if="activeFilterCount > 0 && !isLoading && !isEmpty"
    class="
      py-xl gap-x-lg border-t-secondary sticky left-0 col-span-full flex
      items-center justify-center border-t border-solid
    "
  >
    <span class="text-tertiary text-xs">
      {{
        t('component.table.results_may_be_hidden', {
          count: activeFilterCount,
        })
      }}
    </span>

    <Button
      :class-config="{
        root: 'h-6 text-xs px-sm font-regular',
      }"
      size="sm"
      variant="secondary"
      @click="onClearFiltersAndSearch"
    >
      {{
        t('component.table.clear_filter', {
          count: activeFilterCount,
        })
      }}
    </Button>
  </div>
</template>
