import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const breadcrumbsStyle = tv({
  slots: {
    container: 'flex items-center gap-x-3',
    itemPage: 'flex items-center gap-x-2 p-0.5',
    itemPageIcon: 'text-muted-foreground',
    itemPageText: 'max-w-32 truncate text-muted-foreground',
    itemRoute: 'flex items-center gap-x-2 rounded p-0.5 outline-none ring-offset-background duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    itemRouteIcon: 'text-muted-foreground/75',
    itemRouteText: 'max-w-32 truncate text-muted-foreground/75',
  },
})

export type BadgeStyleProps = VariantProps<typeof breadcrumbsStyle>
