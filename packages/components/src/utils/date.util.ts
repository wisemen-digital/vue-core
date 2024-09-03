export class DateUtil {
  static getDaysFromToday(days: number): Date {
    const date = new Date()

    return new Date(date.setDate(date.getDate() + days))
  }

  static getEndOfWeek(): Date {
    const date = new Date()
    const day = date.getDay()
    const diff = date.getDate() + 7 - day

    return new Date(date.setDate(diff))
  }

  static getMonthsFromToday(months: number): Date {
    const date = new Date()

    return new Date(date.setMonth(date.getMonth() + months))
  }

  static getStartOfWeek(): Date {
    const date = new Date()
    const day = date.getDay()
    const diff = date.getDate() - day + (day === 0 ? -6 : 1)

    return new Date(date.setDate(diff))
  }

  static getTomorrow(): Date {
    const date = new Date()

    return new Date(date.setDate(date.getDate() + 1))
  }
}
