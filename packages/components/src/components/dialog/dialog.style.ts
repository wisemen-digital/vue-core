import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useDialogStyle = tv({
  slots: {
    closeButton: '!absolute right-2 top-2',
    content: 'fixed left-1/2 top-1/2 z-dialog -translate-x-1/2 -translate-y-1/2 rounded-dialog bg-background shadow-dialog-shadow outline-none',
    overlay: 'custom-dialog-overlay fixed inset-0 z-dialog-overlay bg-black/30 backdrop-blur-sm',
  },
})

export type DialogStyleProps = VariantProps<typeof useDialogStyle>
