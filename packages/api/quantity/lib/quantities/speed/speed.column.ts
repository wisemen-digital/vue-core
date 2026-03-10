import { ColumnOptions } from 'typeorm'
import { QuantityColumn } from '../../quantity.column.js'
import { SpeedUnit } from './speed-unit.enum.js'
import { Speed } from './speed.js'

export function SpeedColumn (
  storeAsUnit: SpeedUnit,
  options?: Omit<ColumnOptions, 'type' | 'transformer'>
) {
  return QuantityColumn(Speed, storeAsUnit, options)
}
