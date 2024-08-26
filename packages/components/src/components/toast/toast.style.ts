import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useToastStyle = tv({
  slots: {
    actionButton: 'h-5',
    actionButtonText: 'font-medium text-muted-foreground',
    actionContainer: 'mt-4',
    actionLoader: 'size-5 text-muted-foreground',
    closeButton: 'flex size-5 items-center justify-center rounded-full border border-solid border-neutral-100 bg-background p-1',
    closeContainer: 'absolute right-0 top-0 -translate-y-1/3 translate-x-1/3',
    closeIcon: 'text-muted-foreground',
    container: 'pointer-events-auto relative z-above-everything w-[22rem] rounded-popover border border-solid border-neutral-100 bg-popover p-4 shadow-toast-shadow',
    contentContainer: 'flex shrink-0 items-start gap-x-4',
    contentDescription: 'mt-1',
    contentIcon: 'mt-[3px]',
    contentTitle: 'font-medium',
    contentWrapper: 'w-full pr-4',
  },
  variants: {
    variant: {
      error: {
        contentIcon: 'text-destructive',
      },
      info: {
        contentIcon: 'text-primary',
      },
      success: {
        contentIcon: 'text-success',
      },
    },
  },
})

export type ToastStyleProps = VariantProps<typeof useToastStyle>
