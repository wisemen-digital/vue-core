import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const usePaginationStyle = tv({
  slots: {
    page: 'cursor-default px-2 text-muted-foreground',
    pagesContainer: 'flex items-center',
  },
})

export type PaginationStyleProps = VariantProps<typeof usePaginationStyle>
