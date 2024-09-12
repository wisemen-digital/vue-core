import path from 'node:path'

import fs from 'fs-extra'
import type { PackageJson } from 'type-fest'

export function getPackageInfo() {
  try {
    const packageJsonPath = path.join('package.json')

    return fs.readJSONSync(packageJsonPath) as PackageJson
  }
  catch {
    throw new Error('No package.json found')
  }
}
