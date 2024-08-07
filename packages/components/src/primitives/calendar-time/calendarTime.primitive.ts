import { CalendarDateTime } from '@/primitives/calendar-date-time/calendarDateTime.primitive'
import { NumberUtil } from '@/utils/number.util'

export class CalendarTime {
  value: CalendarDateTime = new CalendarDateTime()

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
    this.value.add({
      hours: value.hours,
      milliseconds: value.milliseconds,
      minutes: value.minutes,
      seconds: value.seconds,
    })

    return this
  }

  /*
  * Returns the milliseconds of the time as a number from 0 to 999
  * @returns The milliseconds of the time
  */
  getMilliseconds(): number {
    return this.value.getMilliseconds()
  }

  /*
  * Returns the minutes of the time as a number from 0 to 59
  */
  getMinutes(): number {
    return this.value.getMinutes()
  }

  /*
  * Returns the seconds of the time as a number from 0 to 59
  */
  getSeconds(): number {
    return this.value.getSeconds()
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
    return this.value.isAfter(other.value)
  }

  /*
  * Compares the time with another time and returns true if the time is after or equal to
  * the other time and returns false otherwise
  * @param other - The time to compare with
   */
  isAfterOrEqualTo(other: CalendarTime): boolean {
    return this.value.isAfterOrEqualTo(other.value)
  }

  /*
  * Compares the time with another time and returns true if the time is after the other time and returns false otherwise
  * @param other - The time to compare with
   */
  isBefore(other: CalendarTime): boolean {
    return this.value.isBefore(other.value)
  }

  /*
  * Compares the time with another time and returns true if the time is before or equal to
  * the other time and returns false otherwise
  * @param other - The time to compare with
  * */
  isBeforeOrEqualTo(other: CalendarTime): boolean {
    return this.value.isBeforeOrEqualTo(other.value)
  }

  /*
  * Compares the time with another time and returns true if the time is after the other time and returns false otherwise
  * @param time - The time to compare with
  * @param accuracy - The accuracy of the comparison
  */
  isEqualTo(other: CalendarTime): boolean {
    return this.value.isEqualTo(other.value)
  }

  /*
  * Sets the hours, minutes, and seconds of the time
  * @param hours - The hours of the time
  * @param minutes - The minutes of the time
  * @param seconds - The seconds of the time
  */
  set(newValue: { hours?: number, milliseconds?: number, minutes?: number, seconds?: number }): void {
    this.value.set({
      hours: newValue.hours,
      milliseconds: newValue.milliseconds,
      minutes: newValue.minutes,
      seconds: newValue.seconds,
    })
  }

  /*
  * Subtracts hours, minutes, or seconds from the time
  * @param value - The value to subtract from the time
  * @returns The updated time
  */
  subtract(value: { hours?: number, milliseconds?: number, minutes?: number, seconds?: number }): CalendarTime {
    this.value.subtract({
      hours: value.hours,
      milliseconds: value.milliseconds,
      minutes: value.minutes,
      seconds: value.seconds,
    })

    return this
  }

  /*
  * Returns a Date object
  * @returns The time as a Date object
  */
  toDate(): Date {
    return this.value.toDate()
  }

  /*
  * Returns the time as a string in the format 'HH:MM:SS.SSS'
  * @returns The time as a string
  */
  toFullISOString(): string {
    const hours = NumberUtil.pad(this.hours, 2)
    const minutes = NumberUtil.pad(this.getMinutes(), 2)
    const seconds = NumberUtil.pad(this.getSeconds(), 2)
    const milliseconds = NumberUtil.pad(this.value.getMilliseconds(), 3)

    return `${hours}:${minutes}:${seconds}.${milliseconds}`
  }

  /*
  * Returns the time as a string in the format 'HH:MM:SS'
  * @returns The time as a string
  */
  toISOString(): string {
    const hours = NumberUtil.pad(this.hours, 2)
    const minutes = NumberUtil.pad(this.getMinutes(), 2)
    const seconds = NumberUtil.pad(this.getSeconds(), 2)

    return `${hours}:${minutes}:${seconds}`
  }

  /*
  * Returns the time as a string in the format 'HH:MM'
  * @returns The time as a string
  */
  toString(): string {
    const hours = NumberUtil.pad(this.hours, 2)
    const minutes = NumberUtil.pad(this.getMinutes(), 2)

    return `${hours}:${minutes}`
  }
}
