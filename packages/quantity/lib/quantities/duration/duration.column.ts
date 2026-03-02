import { ColumnOptions } from 'typeorm'
import { QuantityColumn } from '../../quantity.column.js'
import { Duration } from './duration.js'
import { DurationUnit } from './duration-unit.enum.js'

export function DurationColumn (
  storeAsUnit: DurationUnit,
  options?: Omit<ColumnOptions, 'type' | 'transformer'>
) {
  return QuantityColumn(Duration, storeAsUnit, options)
}
