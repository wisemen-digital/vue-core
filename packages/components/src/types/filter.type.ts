import type { ComputedRef, Ref } from 'vue'

import type { SelectItem, SelectValue } from '@/types/select.type'

export interface MultiSelectFilter<TValue extends SelectValue> {
  items: ComputedRef<SelectItem<TValue>[]>
  type: 'multiselect'
  value: Ref<TValue[]>
}

export type Filter<TValue extends SelectValue> = MultiSelectFilter<TValue>
