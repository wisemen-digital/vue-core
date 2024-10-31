<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { injectPaginationContext } from '@/components/pagination/pagination.context'
import AppText from '@/components/text/AppText.vue'
import { NumberUtil } from '@/utils/number.util'

const { t } = useI18n()
const paginationContext = injectPaginationContext()

const totalPages = computed<number>(() => {
  return paginationContext.totalPages.value
})

const currentPage = computed<number>(() => {
  if (totalPages.value === 0) {
    return 0
  }

  return paginationContext.page.value
})

const minPageItems = computed<number>(() => {
  if (totalPages.value === 0) {
    return 0
  }

  const min = (currentPage.value * paginationContext.perPage.value) + 1

  return Math.min(min, paginationContext.total.value)
})

const maxPageItems = computed<number>(() => {
  return Math.min((currentPage.value + 1) * paginationContext.perPage.value, paginationContext.total.value)
})

const maxItems = computed<number>(() => {
  return paginationContext.total.value
})

const label = computed<string>(() => {
  const min = NumberUtil.toLocaleNumber(minPageItems.value)
  const max = NumberUtil.toLocaleNumber(maxPageItems.value)
  const total = NumberUtil.toLocaleNumber(maxItems.value)

  return `${min} - ${max} ${t('components.table.of')} ${total}`
})
</script>

<template>
  <AppText variant="subtext">
    {{ label }}
  </AppText>
</template>
