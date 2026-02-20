import { ColumnOptions } from 'typeorm'
import { QuantityColumn } from '../../quantity.column.js'
import { CurrentUnit } from './current-unit.enum.js'
import { Current } from './current.js'

export function CurrentColumn (
  storeAsUnit: CurrentUnit,
  options?: Omit<ColumnOptions, 'type' | 'transformer'>
) {
  return QuantityColumn(Current, storeAsUnit, options)
}
