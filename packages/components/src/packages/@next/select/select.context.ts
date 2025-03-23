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
  hasInlineSearchInput: ComputedRef<boolean>
  hasInteractedWithInlineSearchInput: Ref<boolean>
  isDropdownVisible: ComputedRef<boolean>
  isMultiple: ComputedRef<boolean>
  allGroups: Ref<Map<string, Set<string>>>
  allItems: Ref<Map<string, unknown>>
  customClassConfig: ComputedRef<ClassConfig<'select'>>
  filteredGroups: ComputedRef<Map<string, Set<string>>>
  filteredItems: ComputedRef<Map<string, unknown>>
  inlinesearchInputElementRef: Ref<HTMLInputElement | null>
  modelValue: Ref<SelectValue>
  searchTerm: Ref<string>
  setIsDropdownVisible: (value: boolean) => void
  style: ComputedRef<CreateSelectStyle>
}

export const [
  useProvideSelectContext,
  useInjectSelectContext,
] = useContext<SelectContext>('selectContext')
