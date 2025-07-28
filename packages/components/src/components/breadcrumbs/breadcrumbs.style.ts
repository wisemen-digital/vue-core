import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useBreadcrumbsStyle = tv({
  slots: {
    container: 'flex items-center gap-x-3',
    itemPage: 'flex items-center gap-x-2 p-0.5',
    itemPageIcon: 'size-4 text-secondary',
    itemPageText: 'max-w-32 truncate text-secondary',
    itemRoute: `
      focus-visible:ring-brand-primary-500 focus-visible:ring-2
      focus-visible:ring-offset-1
      rounded flex items-center gap-x-2 p-0.5 duration-200 outline-none
    `,
    itemRouteIcon: 'size-4 text-tertiary',
    itemRouteText: 'max-w-32 truncate text-tertiary',
  },
})

export type BreadcrumbsStyleProps = VariantProps<typeof useBreadcrumbsStyle>
