import {
  type ComputedRef,
  inject,
  provide,
} from 'vue'

interface PaginationContext {
  hasMoreThanOnePage: ComputedRef<boolean>
  page: ComputedRef<number>
  perPage: ComputedRef<number>
  totalPages: ComputedRef<number>
  onPageChange: (value: number) => void
}

export function providePaginationContext(context: PaginationContext): void {
  provide('paginationContext', context)
}

export function injectPaginationContext(): PaginationContext {
  const context = inject('paginationContext')

  if (context === undefined) {
    throw new Error('Component must be used within a `PaginationRoot`')
  }

  return context as PaginationContext
}
