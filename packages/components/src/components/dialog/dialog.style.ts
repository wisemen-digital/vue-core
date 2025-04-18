import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useDialogStyle = tv({
  slots: {
    content: new StyleBuilder()
      .withClasses('fixed left-1/2 top-1/2 z-dialog -translate-x-1/2 -translate-y-1/2 outline-none overflow-hidden')
      .withBorderRadius('rounded-(--dialog-border-radius-default)')
      .withBorder('border-solid border-(--dialog-border-color-default)')
      .withBackgroundColor('bg-(--dialog-bg-color-default)')
      .withShadow('shadow-(--dialog-shadow-default)')
      .build(),
    overlay: new StyleBuilder()
      .withClasses('custom-dialog-overlay fixed inset-0 z-dialog-overlay bg-black/30')
      .build(),
  },
})
