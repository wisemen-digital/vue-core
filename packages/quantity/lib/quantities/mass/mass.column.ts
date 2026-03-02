import { ColumnOptions } from 'typeorm'
import { QuantityColumn } from '../../quantity.column.js'
import { MassUnit } from './mass-unit.enum.js'
import { Mass } from './mass.js'

export function MassColumn (
  storeAsUnit: MassUnit,
  options?: Omit<ColumnOptions, 'type' | 'transformer'>
) {
  return QuantityColumn(Mass, storeAsUnit, options)
}
