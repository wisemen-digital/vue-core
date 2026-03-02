import { Column, ColumnOptions, ValueTransformer } from 'typeorm'
import { Monetary } from './monetary.js'
import { Currency, CurrencyColumn } from './currency.enum.js'
import { PrecisionLossError } from './precision-loss-error.js'

export type EmbeddedMonetaryOptions = {
  currencyPrecisions?: Record<Currency, number>
  defaultPrecision: number
} & Omit<ColumnOptions, 'type' | 'transformer'>

export class EmbeddedMonetary {
  @Column({ type: 'int4' })
  amount: number

  @CurrencyColumn()
  currency: Currency
}

export class NullableEmbeddedMonetary {
  @Column({ type: 'int4', nullable: true })
  amount: number | null

  @CurrencyColumn({ nullable: true })
  currency: Currency | null
}

/** Stores the amount and currency as jsonb */
export function MonetaryColumn (options: EmbeddedMonetaryOptions): PropertyDecorator {
  return Column({
    ...options,
    type: 'jsonb',
    transformer: new MoneyTypeOrmTransformer(
      options.defaultPrecision,
      options.currencyPrecisions ?? {} as Record<Currency, number>
    )
  })
}

export class MoneyTypeOrmTransformer implements ValueTransformer {
  public constructor (
    private readonly defaultPrecision: number,
    private readonly currencyPrecision: Record<Currency, number>
  ) {
    if (
      !Number.isInteger(this.defaultPrecision)
      || Object.values(currencyPrecision).some(precision => !Number.isInteger(precision))
    ) {
      throw new Error('precision must be an integer')
    }
  }

  from (monetary: EmbeddedMonetary | NullableEmbeddedMonetary | null): Monetary | null {
    if (monetary === null) {
      return null
    }

    if (monetary.amount === null || monetary.currency === null) {
      return null
    }

    const precision = this.getPrecisionFor(monetary.currency)

    return new Monetary(monetary.amount, monetary.currency, precision)
  }

  to (
    monetary: Monetary | null | undefined
  ): EmbeddedMonetary | NullableEmbeddedMonetary | undefined {
    if (monetary === undefined) {
      return undefined
    }

    if (monetary === null) {
      return { amount: null, currency: null }
    }

    const precision = this.getPrecisionFor(monetary.currency)

    if (monetary.precision > precision) {
      throw new PrecisionLossError()
    }

    const normalizedMonetary = monetary.toPrecision(precision)

    if (!normalizedMonetary.isRounded()) {
      throw new Error('Attempting to store a non rounded monetary value!')
    }

    return {
      amount: normalizedMonetary.amount,
      currency: normalizedMonetary.currency
    }
  }

  private getPrecisionFor (currency: Currency) {
    return this.currencyPrecision[currency] ?? this.defaultPrecision
  }
}
