import type {
  AcceptableValue,
  SelectItem,
} from '@wisemen/vue-core'

import type { Icon } from '@/icons/icons'

export type FilterType = 'multiselect' | 'range' | 'select'

interface BaseFilter<TFilter, TKey extends keyof TFilter> {
  icon?: Icon
  key: TKey
  label: string
  placeholder?: string
  type: FilterType
}

export interface MultiSelectFilter<
  TFilter,
  TKey extends keyof TFilter = keyof TFilter,
  TValue extends AcceptableValue = TFilter[TKey] extends AcceptableValue ? TFilter[TKey] : never,
> extends BaseFilter<TFilter, TKey> {
  displayFn: (value: TFilter[TKey] extends Array<infer U> ? U : TFilter[TKey]) => string
  items: SelectItem<TValue extends AcceptableValue[] ? TValue[number] : TValue>[]
  type: 'multiselect'
}

export interface SelectFilter<
  TFilter,
  TKey extends keyof TFilter = keyof TFilter,
  TValue extends AcceptableValue = TFilter[TKey] extends AcceptableValue ? TFilter[TKey] : never,
> extends BaseFilter<TFilter, TKey> {
  displayFn: (item: TFilter[TKey]) => string
  hideClearButton?: boolean
  items: SelectItem<TValue>[]
  type: 'select'
}

interface RangeFilter<TFilter, TKey extends keyof TFilter = keyof TFilter> extends BaseFilter<TFilter, TKey> {
  max: number
  min: number
  type: 'range'
}

export type FilterMap<TFilter> = {
  [K in keyof TFilter]:
    | MultiSelectFilter<TFilter, K>
    | RangeFilter<TFilter, K>
    | SelectFilter<TFilter, K>
}

export type Filter<TFilter> = FilterMap<TFilter>[keyof TFilter]
