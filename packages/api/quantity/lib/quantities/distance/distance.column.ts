import { ColumnOptions } from 'typeorm'
import { QuantityColumn } from '../../quantity.column.js'
import { DistanceUnit } from './distance-unit.enum.js'
import { Distance } from './distance.js'

export function DistanceColumn (
  storeAsUnit: DistanceUnit,
  options?: Omit<ColumnOptions, 'type' | 'transformer'>
) {
  return QuantityColumn(Distance, storeAsUnit, options)
}
