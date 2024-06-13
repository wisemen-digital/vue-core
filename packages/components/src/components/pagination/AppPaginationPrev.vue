<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppIconButton from '@/components/button/AppIconButton.vue'
import { injectPaginationContext } from '@/components/pagination/pagination.context'

const { t } = useI18n()
const paginationContext = injectPaginationContext()

const isFirstPage = computed<boolean>(() => paginationContext.page.value === 0)

function onPrevClick(): void {
  paginationContext.onPageChange(paginationContext.page.value - 1)
}
</script>

<template>
  <AppIconButton
    v-if="paginationContext.hasMoreThanOnePage.value"
    :label="t('components.table.previous')"
    :is-disabled="isFirstPage"
    icon="arrowLeft"
    variant="ghost"
    @click="onPrevClick"
  />
</template>
