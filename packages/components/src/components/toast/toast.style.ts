import { tv } from '@/libs/twVariants.lib'

export const toastStyle = tv({
  slots: {
    action: `
      rounded-lg px-md py-xs font-semibold whitespace-nowrap underline
      underline-offset-2 duration-200 outline-none
      focus-visible:ring-2
    `,
    closeButton: `
      flex size-8 items-center justify-center rounded-lg duration-200
      outline-none
      focus-visible:ring-2
    `,
    container: `
      z-toast pointer-events-auto flex w-(--toast-width-default) items-center
      justify-between gap-x-8 overflow-hidden rounded-xl border border-solid
      p-md text-sm shadow-lg
    `,
    iconContainer: `
      flex size-8 flex-shrink-0 items-center justify-center rounded-md
    `,
    message: 'truncate pr-2',
  },
  variants: {
    variant: {
      error: {
        action: 'ring-error-500',
        closeButton: `
          ring-error-500
          hover:bg-error-100
        `,
        container: 'border-error-200 bg-error-50 text-error-600',
        iconContainer: 'bg-error-100',
      },
      info: {
        action: 'ring-fg-primary',
        closeButton: `
          ring-fg-primary
          hover:bg-secondary-hover
        `,
        container: 'border-secondary bg-secondary text-secondary',
        iconContainer: 'bg-tertiary',
      },
      success: {
        action: 'ring-success-500',
        closeButton: `
          ring-success-500
          hover:bg-success-100
        `,
        container: 'border-success-200 bg-success-50 text-success-600',
        iconContainer: 'bg-success-100',
      },
    },
  },
})
