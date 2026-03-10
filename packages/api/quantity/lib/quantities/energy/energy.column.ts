import { ColumnOptions } from 'typeorm'
import { QuantityColumn } from '../../quantity.column.js'
import { Energy } from './energy.js'
import { EnergyUnit } from './energy-unit.enum.js'

export function EnergyColumn (
  storeAsUnit: EnergyUnit,
  options?: Omit<ColumnOptions, 'type' | 'transformer'>
) {
  return QuantityColumn(Energy, storeAsUnit, options)
}
