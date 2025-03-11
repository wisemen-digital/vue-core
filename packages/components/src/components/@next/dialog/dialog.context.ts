import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { DialogProps } from '@/components/@next/dialog/dialog.props'
import type {
  CreateDialogStyle,
} from '@/components/@next/dialog/style/dialog.style'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface DialogContext extends PropsToComputed<DialogProps> {
  isOpen: ComputedRef<boolean>
  customClassConfig: ComputedRef<ClassConfig<'dialog'>>
  style: ComputedRef<CreateDialogStyle>
}

const dialogContextKey: InjectionKey<DialogContext> = Symbol('dialogContext')

export function useProvideDialogContext(context: DialogContext): void {
  provide(dialogContextKey, context)
}

export function useInjectDialogContext(): DialogContext {
  const context = inject(dialogContextKey)

  if (context === undefined) {
    throw new Error('Dialog context is not provided. Make sure to wrap your components in `DialogRoot`.')
  }

  return context
}
