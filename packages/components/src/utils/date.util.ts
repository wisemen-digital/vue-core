export class DateUtil {
  static getDaysFromToday(days: number): Date {
    const date = new Date()

    return new Date(date.setDate(date.getDate() + days))
  }

  static getTomorrow(): Date {
    const date = new Date()

    return new Date(date.setDate(date.getDate() + 1))
  }
}
