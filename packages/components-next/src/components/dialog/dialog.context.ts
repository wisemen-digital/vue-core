import type { ComputedRef } from 'vue'

import type { DialogProps } from '@/components/dialog/dialog.props'
import type { CreateDialogStyle } from '@/components/dialog/dialog.style'
import { useContext } from '@/composables/context/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface DialogContext extends PropsToComputed<DialogProps> {
  isOpen: ComputedRef<boolean>
  customClassConfig: ComputedRef<ClassConfig<'dialog'>>
  style: ComputedRef<CreateDialogStyle>
}

export const [
  useProvideDialogContext,
  useInjectDialogContext,
] = useContext<DialogContext>('dialogContext')
