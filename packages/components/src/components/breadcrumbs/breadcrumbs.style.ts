import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useBreadcrumbsStyle = tv({
  slots: {
    container: 'flex items-center gap-x-3',
    itemPage: 'flex items-center gap-x-2 p-0.5',
    itemPageIcon: 'text-secondary size-4',
    itemPageText: 'max-w-32 truncate text-secondary',
    itemRoute: 'flex items-center gap-x-2 rounded p-0.5 outline-none duration-200 focus-visible:ring-2 focus-visible:ring-brand-primary-500 focus-visible:ring-offset-1',
    itemRouteIcon: 'text-tertiary size-4',
    itemRouteText: 'max-w-32 truncate text-tertiary',
  },
})

export type BreadcrumbsStyleProps = VariantProps<typeof useBreadcrumbsStyle>
