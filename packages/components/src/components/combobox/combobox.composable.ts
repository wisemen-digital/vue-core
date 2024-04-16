import { computed, type ComputedRef } from 'vue'

import type { AcceptableValue } from '@/types/selectItem.type'

import type { ComboboxItem } from '../../types/comboboxItem.type'

interface UseComboboxParams {
  isLoading: ComputedRef<boolean>
  items: ComputedRef<ComboboxItem<AcceptableValue>[]>
  search: ComputedRef<null | string>
}

interface UseComboboxReturnType {
  canOpenDropdown: ComputedRef<boolean>
}

export function useCombobox(params: UseComboboxParams): UseComboboxReturnType {
  const canOpenDropdown = computed<boolean>(() => {
    // If there are options, the dropdown can be opened
    if (hasOptions(params.items.value)) {
      return true
    }

    // If there is a search term and the combobox is not loading, the dropdown can be opened
    if (params.search.value !== null && params.search.value.length > 0) {
      return !params.isLoading.value
    }

    // Otherwise, the dropdown cannot be opened
    return false
  })

  function hasOptions(items: ComboboxItem<AcceptableValue>[]): boolean {
    for (const item of items) {
      if (item.type === 'option') {
        return true
      }

      if (item.type === 'group' && hasOptions(item.items)) {
        return true
      }
    }

    return false
  }

  return {
    canOpenDropdown,
  }
}
