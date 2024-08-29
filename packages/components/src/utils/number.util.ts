export class NumberUtil {
  static generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  static pad(value: number, length: number): string {
    return value.toString().padStart(length, '0')
  }

  static toLocaleNumber(value: number): string {
    return value.toLocaleString('nl-BE')
  }
}
