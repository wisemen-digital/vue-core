import type {
  ComputedRef,
  Ref,
} from 'vue'

import type { SelectValue } from '@/types/select.type'

export interface MultiSelectFilter<TValue extends SelectValue> {
  items: ComputedRef<TValue[]>
  label: string
  type: 'multiselect'
  value: Ref<TValue[]>
}

export type Filter<TValue extends SelectValue> = MultiSelectFilter<TValue>
