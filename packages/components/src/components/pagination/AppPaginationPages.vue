<script setup lang="ts">
import { computed } from 'vue'

import AppButton from '@/components/button/AppButton.vue'
import { injectPaginationContext } from '@/components/pagination/pagination.context'
import { usePaginationStyle } from '@/components/pagination/pagination.style'
import AppText from '@/components/text/AppText.vue'

const paginationContext = injectPaginationContext()

const pageControls = computed<(number | string)[]>(() => {
  const page = paginationContext.page.value
  const perPage = paginationContext.perPage.value

  const totalPages = Math.ceil(paginationContext.pages.value / perPage)

  const activePage = page + 1

  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  if (activePage < 3) {
    return [
      1,
      2,
      3,
      '...',
      totalPages,
    ]
  }

  if (activePage === 3) {
    return [
      1,
      2,
      3,
      4,
      '...',
      totalPages,
    ]
  }

  if (activePage > 2 && activePage < totalPages - 1) {
    return [
      1,
      '...',
      activePage - 1,
      activePage,
      activePage + 1,
      '...',
      totalPages,
    ]
  }

  return [
    1,
    '...',
    totalPages - 2,
    totalPages - 1,
    totalPages,
  ]
})

function pageControlButtonVariant(page: number): 'ghost' | 'muted' {
  return page === paginationContext.page.value ? 'muted' : 'ghost'
}

function onPageClick(page: number): void {
  paginationContext.onPageChange(page)
}

const paginationStyle = usePaginationStyle()
const pagesContainerClasses = computed<string>(() => paginationStyle.pagesContainer())
const pageClasses = computed<string>(() => paginationStyle.page())
</script>

<template>
  <div :class="pagesContainerClasses">
    <div
      v-for="(page, index) of pageControls"
      :key="index"
    >
      <AppButton
        v-if="typeof page === 'number'"
        :variant="pageControlButtonVariant(page - 1)"
        class="duration-0"
        @click="onPageClick(page - 1)"
      >
        {{ page }}
      </AppButton>

      <AppText
        v-else
        :class="pageClasses"
        variant="subtext"
      >
        {{ page }}
      </AppText>
    </div>
  </div>
</template>
