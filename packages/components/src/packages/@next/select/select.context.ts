import type {
  ComputedRef,
  Ref,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { SelectProps, SelectValue } from '@/packages/@next/select/select.props'
import type { CreateSelectStyle } from '@/packages/@next/select/style/select.style'
import { useContext } from '@/packages/@next/shared/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface SelectContext extends PropsToComputed<SelectProps<any>> {
  isDropdownVisible: ComputedRef<boolean>
  isMultiple: ComputedRef<boolean>
  customClassConfig: ComputedRef<ClassConfig<'select'>>
  modelValue: Ref<SelectValue>
  searchInputElementRef: Ref<HTMLInputElement | null>
  searchTerm: Ref<string>
  setIsDropdownVisible: (value: boolean) => void
  style: ComputedRef<CreateSelectStyle>
}

export const [
  useProvideSelectContext,
  useInjectSelectContext,
] = useContext<SelectContext>('selectContext')
