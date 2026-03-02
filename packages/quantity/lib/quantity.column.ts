import { Column, ColumnOptions, ValueTransformer } from 'typeorm'
import { Quantity, QuantityConstructor } from './quantity.js'

export function QuantityColumn<U extends string, Q extends Quantity<U, Q>> (
  QuantityConstructor: QuantityConstructor<U, Q>,
  storeAsUnit: U,
  options?: Omit<ColumnOptions, 'type' | 'transformer'>
): PropertyDecorator {
  return Column({
    ...options,
    type: 'float',
    transformer: new QuantityTypeOrmTransformer(QuantityConstructor, storeAsUnit)
  })
}

export class QuantityTypeOrmTransformer<U extends string, Q extends Quantity<U, Q>>
implements ValueTransformer {
  constructor (
    private readonly QuantityConstructor: QuantityConstructor<U, Q>,
    private readonly storedUnit: U
  ) {}

  from (value: number): Q
  from (value: number | null): Q | null
  from (value: number | null): Q | null {
    if (value === null) {
      return null
    }

    return new this.QuantityConstructor(value, this.storedUnit)
  }

  to (quantity: Q): number
  to (quantity: Q | null): number | null
  to (quantity: Q | null | undefined): number | null {
    if (quantity === null) {
      return null
    }

    if (quantity === undefined) {
      return null
    }

    return quantity.asNumber(this.storedUnit)
  }
}
