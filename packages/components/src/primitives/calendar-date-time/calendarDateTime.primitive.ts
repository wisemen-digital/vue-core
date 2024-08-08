interface DateTimeValue {
  days?: number
  hours?: number
  milliseconds?: number
  minutes?: number
  months?: number
  seconds?: number
  weeks?: number
  years?: number
}

export class CalendarDateTime {
  private value: Date = new Date()

  constructor(
    year?: number,
    month?: number,
    day?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    milliseconds?: number,
  ) {
    this.set({ days: day,
      hours,
      milliseconds,
      minutes,
      months: month,
      seconds,
      years: year })
  }

  /*
  * Adds days, months, weeks, years, hours, minutes, seconds, or milliseconds to the date
  * @param value - The value to add to the date
  * @returns The updated date
   */
  add(value: DateTimeValue): CalendarDateTime {
    if (value.years !== undefined) {
      this.set({ years: this.value.getFullYear() + value.years })
    }
    if (value.months !== undefined) {
      this.set({ months: this.value.getMonth() + value.months + 1 })
    }
    if (value.days !== undefined) {
      this.set({ days: this.value.getDate() + value.days })
    }
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
    if (value.weeks !== undefined) {
      this.set({ days: this.value.getDate() + value.weeks * 7 })
    }

    return this
  }

  /*
  * Creates a new CalendarDateTime object from a Date object
  * @param date - The Date object to create the CalendarDateTime from
  * @returns The new CalendarDateTime object
  */
  fromDate(date: Date): CalendarDateTime {
    return new CalendarDateTime(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    )
  }

  /*
  * Returns the day of the date as a number from 1 to 31
  * @returns The day of the date
  */
  getDay(): number {
    return this.value.getDate()
  }

  /*
  * Returns the hours of the date as a number from 0 to 23
  * @returns The hours of the date
  */
  getHours(): number {
    return this.value.getHours()
  }

  /*
  * Returns the milliseconds of the date as a number from 0 to 999
  * @returns The milliseconds of the date
  */
  getMilliseconds(): number {
    return this.value.getMilliseconds()
  }

  /*
  * Returns the minutes of the date as a number from 0 to 59
  * @returns The minutes of the date
  */
  getMinutes(): number {
    return this.value.getMinutes()
  }

  /*
  * Returns the month of the date as a number from 1 to 12
  * @returns The month of the date
  */
  getMonth(): number {
    return this.value.getMonth()
  }

  /*
  * Returns the seconds of the date as a number from 0 to 59
  * @returns The seconds of the date
  */
  getSeconds(): number {
    return this.value.getSeconds()
  }

  /*
  * Returns the year of the date as a number
  * @returns The year of the date
  */
  getYear(): number {
    return this.value.getFullYear()
  }

  /*
  * Compares the date with another date and returns true if the date is after the other date
  * @param other - The date to compare with
  * @returns True if the date is after the other date, false otherwise
  */
  isAfter(other: CalendarDateTime): boolean {
    return this.value > other.toDate()
  }

  /*
  * Compares the date with another date and returns true if the date is after or equal to the other date
  * @param other - The date to compare with
  * @returns True if the date is after or equal to the other date, false otherwise
  */
  isAfterOrEqualTo(other: CalendarDateTime): boolean {
    return this.value >= other.toDate()
  }

  /*
  * Compares the date with another date and returns true if the date is before the other date
  * @param other - The date to compare with
  * @returns True if the date is before the other date, false otherwise
  */
  isBefore(other: CalendarDateTime): boolean {
    return this.value < other.toDate()
  }

  /*
  * Compares the date with another date and returns true if the date is before or equal to the other date
  * @param other - The date to compare with
  * @returns True if the date is before or equal to the other date, false otherwise
  */
  isBeforeOrEqualTo(other: CalendarDateTime): boolean {
    return this.value <= other.toDate()
  }

  /*
  * Compares the date with another date and returns true if the date is equal to the other date
  * @param other - The date to compare with
  * @returns True if the date is equal to the other date, false otherwise
  */
  isEqualTo(other: CalendarDateTime): boolean {
    return this.value.getTime() === other.toDate().getTime()
  }

  parse(value: string): CalendarDateTime {
    const [
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
      milliseconds,
    ] = value.split(/[-T:.]/).map(Number)

    return new CalendarDateTime(year, month, day, hours, minutes, seconds, milliseconds)
  }

  /*
  * Sets the date to a specific day, month, year, hours, minutes, seconds, and milliseconds
  * @param value - The value to set the date to
  * @returns The updated date
  */
  set(value: DateTimeValue): CalendarDateTime {
    if (value.years !== undefined) {
      this.value.setFullYear(value.years)
    }
    if (value.months !== undefined) {
      this.value.setMonth(value.months - 1)
    }
    if (value.days !== undefined) {
      this.value.setDate(value.days)
    }
    if (value.hours !== undefined) {
      this.value.setHours(value.hours)
    }
    if (value.minutes !== undefined) {
      this.value.setMinutes(value.minutes)
    }
    if (value.seconds !== undefined) {
      this.value.setSeconds(value.seconds)
    }
    if (value.milliseconds !== undefined) {
      this.value.setMilliseconds(value.milliseconds)
    }

    return this
  }

  /*
  * Subtracts days, months, weeks, years, hours, minutes, seconds, or milliseconds from the date
  * @param value - The value to subtract from the date
  */
  subtract(value: DateTimeValue): CalendarDateTime {
    if (value.years !== undefined) {
      this.set({ years: this.value.getFullYear() - value.years })
    }
    if (value.months !== undefined) {
      this.set({ months: this.value.getMonth() - value.months + 1 })
    }
    if (value.days !== undefined) {
      this.set({ days: this.value.getDate() - value.days })
    }
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
    if (value.weeks !== undefined) {
      this.set({ days: this.value.getDate() - value.weeks * 7 })
    }

    return this
  }

  /*
  * Returns a Date object
  * @returns The date as a Date object
   */
  toDate(): Date {
    return this.value
  }

  /*
  * Returns the date as a string in the format 'YYYY-MM-DDTHH:MM:SS.SSSZ'
  * @returns The date as a string
  */
  toISOString(): string {
    return this.value.toISOString()
  }

  toString(): string {
    return this.value.toString()
  }
}
