<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { injectPaginationContext } from '@/components/pagination/pagination.context'
import AppText from '@/components/text/AppText.vue'
import { toLocaleNumber } from '@/utils/number.util'

const { t } = useI18n()
const paginationContext = injectPaginationContext()

const currentPage = computed<number>(() => {
  return paginationContext.page.value + 1
})

const totalPages = computed<number>(() => {
  return paginationContext.totalPages.value
})
</script>

<template>
  <AppText variant="subtext">
    {{ t('components.table.page') }}
    <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
    {{ toLocaleNumber(currentPage) }}
    {{ t('components.table.of') }}
    {{ toLocaleNumber(totalPages) }}
  </AppText>
</template>
