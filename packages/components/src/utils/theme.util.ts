import type { DarkModeValue } from '@/composables/dark-mode/darkMode.composable'

export class ThemeUtil {
  static getClasses(theme: string, darkModeValue: DarkModeValue): string {
    const classes = [
      theme,
    ]

    classes.push(darkModeValue)

    return classes.join(' ')
  }
}
