import { ColumnOptions } from 'typeorm'
import { QuantityColumn } from '../../quantity.column.js'
import { PowerUnit } from './power-unit.enum.js'
import { Power } from './power.js'

export function PowerColumn (
  storeAsUnit: PowerUnit,
  options?: Omit<ColumnOptions, 'type' | 'transformer'>
) {
  return QuantityColumn(Power, storeAsUnit, options)
}
