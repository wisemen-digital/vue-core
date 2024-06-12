import { existsSync } from 'node:fs'
import path from 'node:path'

import fs from 'fs-extra'

export async function getProjectInfo() {
  const info = {
    appDir: false,
    componentsUiDir: false,
    srcComponentsUiDir: false,
    srcDir: false,
    tsconfig: null,
  }

  try {
    const tsconfig = await getTsConfig()

    return {
      appDir:
        existsSync(path.resolve('./app'))
        || existsSync(path.resolve('./src/app')),
      componentsUiDir: existsSync(path.resolve('./components/ui')),
      srcComponentsUiDir: existsSync(path.resolve('./src/components/ui')),
      srcDir: existsSync(path.resolve('./src')),
      tsconfig,
    }
  }
  catch (error) {
    return info
  }
}

export async function getTsConfig() {
  try {
    const tsconfigPath = path.join('tsconfig.json')
    const tsconfig = await fs.readJSON(tsconfigPath)

    if (tsconfig == null) {
      throw new Error('tsconfig.json is missing')
    }

    return tsconfig
  }
  catch (error) {
    return null
  }
}
