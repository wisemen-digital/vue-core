<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { injectPaginationContext } from '@/components/pagination/pagination.context'
import AppText from '@/components/text/AppText.vue'
import { toLocaleNumber } from '@/utils/number.util'

const { t } = useI18n()
const paginationContext = injectPaginationContext()

const currentPageFrom = computed<number>(() => {
  const page = paginationContext.page.value
  const perPage = paginationContext.perPage.value

  return perPage * page + 1
})

const currentPageUntil = computed<number>(() => {
  const page = paginationContext.page.value
  const perPage = paginationContext.perPage.value
  const pages = paginationContext.totalPages.value

  return Math.min(perPage * (page + 1), pages ?? 0)
})
</script>

<template>
  <AppText variant="subtext">
    <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
    {{ toLocaleNumber(currentPageFrom) }} -
    {{ toLocaleNumber(currentPageUntil) }} {{ t('components.table.of') }}
    {{ toLocaleNumber(paginationContext.totalPages.value) }}
  </AppText>
</template>
