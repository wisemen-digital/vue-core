import { computed, type ComputedRef } from 'vue'

import type { SelectProps } from '@/packages/@next/select/select.props'
import type { SelectValue } from '@/types'
import type { PropsToComputed } from '@/utils/props.util'

interface UseSelectReturnType {
  isMultiple: ComputedRef<boolean>
}

export function useSelect(props: PropsToComputed<SelectProps & { modelValue: SelectValue }>): UseSelectReturnType {
  const isMultiple = computed<boolean>(() => Array.isArray(props.modelValue))

  return {
    isMultiple,
  }
}
