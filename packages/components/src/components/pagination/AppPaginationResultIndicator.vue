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

  return paginationContext.page.value + 1
})
</script>

<template>
  <AppText variant="subtext">
    {{ t('components.table.page') }}
    {{ NumberUtil.toLocaleNumber(currentPage) }}
    {{ t('components.table.of') }}
    {{ NumberUtil.toLocaleNumber(totalPages) }}
  </AppText>
</template>
