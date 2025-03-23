import type {
  ComputedRef,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { DialogProps } from '@/packages/@next/dialog/dialog.props'
import type {
  CreateDialogStyle,
} from '@/packages/@next/dialog/style/dialog.style'
import { useContext } from '@/packages/@next/shared/context.composable'
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
