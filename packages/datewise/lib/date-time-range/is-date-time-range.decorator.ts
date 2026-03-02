import { applyDecorators } from '@nestjs/common'
import { IsObject, ValidateBy, ValidateNested, type ValidationArguments, ValidatorConstraint, type ValidatorConstraintInterface } from 'class-validator'
import { Type } from 'class-transformer'
import { Timestamp } from '../timestamp/timestamp.js'
import { DateTimeRangeDto } from './date-time-range.dto.js'

export interface IsDateTimeRangeValidationOptions {
  startsAfter?: () => Timestamp
  startsAfterOrAt?: () => Timestamp
  startsBefore?: () => Timestamp
  startsBeforeOrAt?: () => Timestamp
  endsBefore?: () => Timestamp
  endsBeforeOrAt?: () => Timestamp
  endsAfter?: () => Timestamp
  endsAfterOrAt?: () => Timestamp
  each?: boolean
}

export function IsDateTimeRange (options?: IsDateTimeRangeValidationOptions): PropertyDecorator {
  return applyDecorators(
    Type(() => DateTimeRangeDto),
    ValidateNested({ each: options?.each }),
    IsObject(),
    ValidateBy({ name: 'isDateTimeRange', validator: new IsDateTimeRangeValidator(options) })
  )
}

@ValidatorConstraint({ name: 'isDateRange', async: false })
export class IsDateTimeRangeValidator implements ValidatorConstraintInterface {
  private startsAfter?: () => Timestamp
  private startsAfterOrAt?: () => Timestamp
  private startsBefore?: () => Timestamp
  private startsBeforeOrAt?: () => Timestamp
  private endsBefore?: () => Timestamp
  private endsBeforeOrAt?: () => Timestamp
  private endsAfter?: () => Timestamp
  private endsAfterOrAt?: () => Timestamp

  constructor (options?: IsDateTimeRangeValidationOptions) {
    this.startsAfter = options?.startsAfter
    this.startsAfterOrAt = options?.startsAfterOrAt
    this.startsBefore = options?.startsBefore
    this.startsBeforeOrAt = options?.startsBeforeOrAt
    this.endsBefore = options?.endsBefore
    this.endsBeforeOrAt = options?.endsBeforeOrAt
    this.endsAfter = options?.endsAfter
    this.endsAfterOrAt = options?.endsAfterOrAt
  }

  validate (dateRange: unknown, _args: ValidationArguments): boolean {
    if (!(dateRange instanceof DateTimeRangeDto)) {
      return false
    }

    try {
      const range = dateRange.parse()

      if (this.startsAfter !== undefined && !range.startsAfter(this.startsAfter())) {
        return false
      }

      if (this.startsAfterOrAt !== undefined && !range.startsAfterOrAt(this.startsAfterOrAt())) {
        return false
      }

      if (this.startsBefore !== undefined && !range.startsBefore(this.startsBefore())) {
        return false
      }

      if (this.startsBeforeOrAt !== undefined && !range.startsBeforeOrAt(this.startsBeforeOrAt())) {
        return false
      }

      if (this.endsBefore !== undefined && !range.endsBeforeOrAt(this.endsBefore())) {
        return false
      }

      if (this.endsBeforeOrAt !== undefined && !range.endsBeforeOrAt(this.endsBeforeOrAt())) {
        return false
      }

      if (this.endsAfter !== undefined && !range.endsAfter(this.endsAfter())) {
        return false
      }

      if (this.endsAfterOrAt !== undefined && !range.endsAfterOrAt(this.endsAfterOrAt())) {
        return false
      }

      return true
    } catch {
      return false
    }
  }

  defaultMessage (args: ValidationArguments): string {
    let message = `${args.property} must be a valid date range`

    if (this.startsAfter !== undefined) {
      message += `\n\tthe range must start after ${this.startsAfter().toString()}`
    }

    if (this.startsAfterOrAt !== undefined) {
      message += `\n\tthe range must start after or at ${this.startsAfterOrAt().toString()}`
    }

    if (this.startsBefore !== undefined) {
      message += `\n\tthe range must start before ${this.startsBefore().toString()}`
    }

    if (this.startsBeforeOrAt !== undefined) {
      message += `\n\tthe range must start before or at ${this.startsBeforeOrAt().toString()}`
    }

    if (this.endsBefore !== undefined) {
      message += `\n\tthe range must end before or at ${this.endsBefore().toString()}`
    }

    if (this.endsBeforeOrAt !== undefined) {
      message += `\n\tthe range must end before or at ${this.endsBeforeOrAt().toString()}`
    }

    if (this.endsAfter !== undefined) {
      message += `\n\tthe range must end after ${this.endsAfter().toString()}`
    }

    if (this.endsAfterOrAt !== undefined) {
      message += `\n\tthe range must end after or at ${this.endsAfterOrAt().toString()}`
    }

    return message
  }
}
