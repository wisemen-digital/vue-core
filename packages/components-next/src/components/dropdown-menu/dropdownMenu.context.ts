import type {
  ComputedRef,
} from 'vue'

import type { DropdownMenuProps } from '@/components/dropdown-menu/dropdownMenu.props'
import type { CreateDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'
import { useContext } from '@/composables/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface DropdownMenuContext extends PropsToComputed<DropdownMenuProps> {
  isOpen: ComputedRef<boolean>
  customClassConfig: ComputedRef<ClassConfig<'dropdownMenu'>>
  style: ComputedRef<CreateDropdownMenuStyle>
}

export const [
  useProvideDropdownMenuContext,
  useInjectDropdownMenuContext,
] = useContext<DropdownMenuContext>('dropdownMenuContext')
