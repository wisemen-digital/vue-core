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

  add(value: DateTimeValue): void {
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
  }

  isAfter(other: CalendarDateTime): boolean {
    return this.value > other.toDate()
  }

  isAfterOrEqualTo(other: CalendarDateTime): boolean {
    return this.value >= other.toDate()
  }

  isBefore(other: CalendarDateTime): boolean {
    return this.value < other.toDate()
  }

  isBeforeOrEqualTo(other: CalendarDateTime): boolean {
    return this.value <= other.toDate()
  }

  isEqualTo(other: CalendarDateTime): boolean {
    return this.value.getTime() === other.toDate().getTime()
  }

  set(value: DateTimeValue): void {
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
  }

  subtract(value: DateTimeValue): void {
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
  }

  toDate(): Date {
    return this.value
  }

  toISOString(): string {
    return this.value.toISOString()
  }

  toString(): string {
    return this.value.toString()
  }
}
