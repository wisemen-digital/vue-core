<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { PageChangeEvent, PaginationOptions } from '@/types/table.type'

import AppButton from '../button/AppButton.vue'
import AppIconButton from '../button/AppIconButton.vue'
import AppText from '../text/AppText.vue'

const props = defineProps<{
  paginationOptions: PaginationOptions<unknown>
  total: number
}>()

const emit = defineEmits<{
  page: [event: PageChangeEvent]
}>()

const { t } = useI18n()

const pageControls = computed<(number | string)[]>(() => {
  const { page, perPage } = props.paginationOptions.pagination

  const totalPages = Math.ceil(props.total / perPage)

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

const isFirstPage = computed<boolean>(() => {
  return props.paginationOptions.pagination.page === 0
})

const isLastPage = computed<boolean>(() => {
  const { page, perPage } = props.paginationOptions.pagination

  const totalPages = Math.ceil(props.total / perPage)

  return page === totalPages - 1
})

const hasMoreThanOnePage = computed<boolean>(() => {
  return props.total > props.paginationOptions.pagination.perPage
})

function setPage(page: number): void {
  const updatedPaginationOptions = {
    ...props.paginationOptions.pagination,
    page,
  } as PageChangeEvent

  emit('page', updatedPaginationOptions)
}

function handlePrevPage(): void {
  const { page } = props.paginationOptions.pagination

  if (page === 0) {
    return
  }

  setPage(page - 1)
}

function handleNextPage(): void {
  const { page, perPage } = props.paginationOptions.pagination

  const totalPages = Math.ceil(props.total / perPage)

  if (page === totalPages) {
    return
  }

  setPage(page + 1)
}

function handlePrevPageButtonClick(): void {
  handlePrevPage()
}

function handleNextPageButtonClick(): void {
  handleNextPage()
}

function handlePageButtonClick(page: number): void {
  setPage(page)
}

function pageControlButtonVariant(page: number): 'ghost' | 'secondary' {
  return page === props.paginationOptions.pagination.page ? 'secondary' : 'ghost'
}
</script>

<template>
  <div class="flex h-10 items-center rounded-md border">
    <AppIconButton
      v-if="hasMoreThanOnePage"
      :label="t('components.table.previous')"
      :is-disabled="isFirstPage"
      icon="arrowLeft"
      icon-size="sm"
      variant="ghost"
      @click="handlePrevPageButtonClick"
    />

    <div class="flex items-center">
      <div
        v-for="(page, index) of pageControls"
        :key="index"
      >
        <AppButton
          v-if="typeof page === 'number'"
          :variant="pageControlButtonVariant(page - 1)"
          class="duration-0"
          @click="handlePageButtonClick(page - 1)"
        >
          {{ page }}
        </AppButton>

        <AppText
          v-else
          class="cursor-default px-2 text-muted-foreground"
          variant="subtext"
        >
          {{ page }}
        </AppText>
      </div>
    </div>

    <AppIconButton
      v-if="hasMoreThanOnePage"
      :is-disabled="isLastPage"
      :label="t('components.table.next')"
      icon-size="sm"
      icon="arrowRight"
      variant="ghost"
      @click="handleNextPageButtonClick"
    />
  </div>
</template>
