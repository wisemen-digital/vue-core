export class TimeUtil {
  static formatHoursMinutesToTime(hours: number, minutes: number): string | null {
    if (hours < 24 && minutes < 60) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    }

    return null
  }

  static formatNumberToTime(time: number): string | null {
    const timeString = time.toString()

    if (time < 24) {
      return `${timeString.padStart(2, '0')}:00`
    }
    else if (time < 60) {
      return `00:${timeString.padStart(2, '0')}`
    }
    else if (time < 100) {
      return `01:${(time - 60).toString().padStart(2, '0')}`
    }
    else if (timeString.length === 3) {
      return `${timeString.slice(0, 1)}:${timeString.slice(1)}`
    }
    else if (timeString.length === 4) {
      return `${timeString.slice(0, 2)}:${timeString.slice(2)}`
    }

    return null
  }
}
