import { NumberUtil } from '@/utils/number.util'

export class CalendarTime {
  value: Date = new Date()

  /*
  * Creates a new CalendarTime object
  * @param hours - The hours of the time
  * @param minutes - The minutes of the time
  * @param seconds - The seconds of the time
  */
  constructor(hours?: number, minutes?: number, seconds?: number, milliseconds?: number) {
    this.set({ hours, milliseconds, minutes, seconds })
  }

  /*
  * Parses a time string in the format 'HH:MM:SS'
  */
  static parse(value: string): CalendarTime {
    const [
      hours,
      minutes,
      seconds,
    ] = value.split(':').map(Number)

    return new CalendarTime(hours, minutes, seconds)
  }

  /*
  * Adds hours, minutes, or seconds to the time
  * @param value - The value to add to the time
  * @returns The updated time
  */
  add(value: { hours?: number, milliseconds?: number, minutes?: number, seconds?: number }): CalendarTime {
    if (value.hours !== undefined) {
      this.set({ hours: this.value.getHours() + value.hours })
    }
    if (value.minutes !== undefined) {
      this.set({ minutes: this.value.getMinutes() + value.minutes })
    }
    if (value.seconds !== undefined) {
      this.set({ seconds: this.value.getSeconds() + value.seconds })
    }
    if (value.milliseconds !== undefined) {
      this.set({ milliseconds: this.value.getMilliseconds() + value.milliseconds })
    }

    return this
  }

  /*
  * Returns the hours of the time as a number from 0 to 23
  */
  get hours(): number {
    return this.value.getHours()
  }

  /*
  * Compares the time with another time and returns true if the time is after the other time
  * @param other - The time to compare with
   */
  isAfter(other: CalendarTime): boolean {
    return this.value.getTime() > other.value.getTime()
  }

  /*
  * Compares the time with another time and returns true if the time is after the other time and returns false otherwise
  * @param other - The time to compare with
   */
  isBefore(other: CalendarTime): boolean {
    return this.value.getTime() < other.value.getTime()
  }

  /*
  * Compares the time with another time and returns true if the time is after the other time and returns false otherwise
  * @param time - The time to compare with
  * @param accuracy - The accuracy of the comparison
  */
  isEqualTo(other: CalendarTime, accuracy?: 'hours' | 'milliseconds' | 'minutes' | 'seconds'): boolean {
    if (accuracy === 'hours') {
      return this.hours === other.hours
    }
    if (accuracy === 'minutes') {
      return this.hours === other.hours && this.minutes === other.minutes
    }
    if (accuracy === 'seconds') {
      return this.hours === other.hours && this.minutes === other.minutes && this.seconds === other.seconds
    }

    return this.value.getTime() === other.value.getTime()
  }

  /*
  * Returns the milliseconds of the time as a number from 0 to 999
  * @returns The milliseconds of the time
  */
  get milliseconds(): number {
    return this.value.getMilliseconds()
  }

  /*
  * Returns the minutes of the time as a number from 0 to 59
  */
  get minutes(): number {
    return this.value.getMinutes()
  }

  /*
  * Returns the seconds of the time as a number from 0 to 59
  */
  get seconds(): number {
    return this.value.getSeconds()
  }

  /*
  * Sets the hours, minutes, and seconds of the time
  * @param hours - The hours of the time
  * @param minutes - The minutes of the time
  * @param seconds - The seconds of the time
  */
  set(newValue: { hours?: number, milliseconds?: number, minutes?: number, seconds?: number }): void {
    this.value = new Date(
      this.value.getFullYear(),
      this.value.getMonth(),
      this.value.getDate(),
      newValue.hours ?? this.value.getHours(),
      newValue.minutes ?? this.value.getMinutes(),
      newValue.seconds ?? this.value.getSeconds(),
      newValue.milliseconds ?? this.value.getMilliseconds(),
    )
  }

  /*
  * Subtracts hours, minutes, or seconds from the time
  * @param value - The value to subtract from the time
  * @returns The updated time
  */
  subtract(value: { hours?: number, milliseconds?: number, minutes?: number, seconds?: number }): CalendarTime {
    if (value.hours !== undefined) {
      this.set({ hours: this.value.getHours() - value.hours })
    }
    if (value.minutes !== undefined) {
      this.set({ minutes: this.value.getMinutes() - value.minutes })
    }
    if (value.seconds !== undefined) {
      this.set({ seconds: this.value.getSeconds() - value.seconds })
    }
    if (value.milliseconds !== undefined) {
      this.set({ milliseconds: this.value.getMilliseconds() - value.milliseconds })
    }

    return this
  }

  /*
  * Returns a Date object
  * @returns The time as a Date object
  */
  toDate(): Date {
    return this.value
  }

  /*
  * Returns the time as a string in the format 'HH:MM:SS.SSS'
  * @returns The time as a string
  */
  toFullISOString(): string {
    return `${NumberUtil.pad(this.hours, 2)}:${NumberUtil.pad(this.minutes, 2)}:${NumberUtil.pad(this.seconds, 2)}.${NumberUtil.pad(this.value.getMilliseconds(), 3)}`
  }

  /*
  * Returns the time as a string in the format 'HH:MM:SS'
  * @returns The time as a string
  */
  toISOString(): string {
    return `${NumberUtil.pad(this.hours, 2)}:${NumberUtil.pad(this.minutes, 2)}:${NumberUtil.pad(this.seconds, 2)}`
  }

  /*
  * Returns the time as a string in the format 'HH:MM'
  * @returns The time as a string
  */
  toString(): string {
    return `${NumberUtil.pad(this.hours, 2)}:${NumberUtil.pad(this.minutes, 2)}`
  }
}
