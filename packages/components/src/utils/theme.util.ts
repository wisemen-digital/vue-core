export class ThemeUtil {
  static getClasses(theme: string, isDarkModeEnabled: boolean): string {
    const classes = [
      theme,
    ]

    if (isDarkModeEnabled) {
      classes.push('dark')
    }
    else {
      classes.push('light')
    }

    return classes.join(' ')
  }
}
