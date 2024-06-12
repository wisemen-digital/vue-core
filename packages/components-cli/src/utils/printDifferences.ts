import chalk from 'chalk'
import type { Change } from 'diff'

export function printDiff(diff: Change[]) {
  diff.forEach((part) => {
    if (part != null) {
      if (part.added != null) {
        return process.stdout.write(chalk.green(part.value))
      }
      if (part.removed != null) {
        return process.stdout.write(chalk.red(part.value))
      }

      return process.stdout.write(part.value)
    }
  })
}
