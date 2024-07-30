export class NumberUtil {
  static generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  static toLocaleNumber(value: number): string {
    return value.toLocaleString('nl-BE')
  }
}
