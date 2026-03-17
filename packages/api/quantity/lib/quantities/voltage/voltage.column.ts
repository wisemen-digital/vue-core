import { ColumnOptions } from 'typeorm'
import { QuantityColumn } from '../../quantity.column.js'
import { VoltageUnit } from './voltage-unit.enum.js'
import { Voltage } from './voltage.js'

export function VoltageColumn (
  storeAsUnit: VoltageUnit,
  options?: Omit<ColumnOptions, 'type' | 'transformer'>
) {
  return QuantityColumn(Voltage, storeAsUnit, options)
}
