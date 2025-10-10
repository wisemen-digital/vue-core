import type { PackageInfo } from '../types/index.js'
import { promises as fs } from 'node:fs'
import { join, relative } from 'node:path'
import { DOCS_ROOT, PACKAGES_ROOT } from '../constants.js'

/**
 * Get all package directories in the monorepo
 */
export async function getPackages(): Promise<PackageInfo[]> {
  const packages: PackageInfo[] = []
  const entries = await fs.readdir(PACKAGES_ROOT, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name !== 'node_modules' && !entry.name.startsWith('.')) {
      const pkgPath = join(PACKAGES_ROOT, entry.name)
      const pkgJsonPath = join(pkgPath, 'package.json')

      try {
        await fs.access(pkgJsonPath)

        let docsPath: string | undefined
        const possibleDocsPaths = [
          join(DOCS_ROOT, 'packages', entry.name),
          join(DOCS_ROOT, 'packages', `${entry.name}-v1`),
        ]

        for (const path of possibleDocsPaths) {
          try {
            await fs.access(path)
            docsPath = path
            break
          }
          catch {
            // Continue to next path
          }
        }

        packages.push({
          name: entry.name,
          path: pkgPath,
          docsPath,
        })
      }
      catch {
        // Skip directories without package.json
      }
    }
  }

  return packages
}

/**
 * List files in a directory recursively
 */
export async function listFiles(dir: string, baseDir: string = dir): Promise<string[]> {
  const files: string[] = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      if (['node_modules', '.git', 'dist', 'build', '.next', 'coverage'].includes(entry.name)) {
        continue
      }
      files.push(...await listFiles(fullPath, baseDir))
    }
    else {
      if (!entry.name.endsWith('.spec.ts') && !entry.name.endsWith('.test.ts')) {
        files.push(relative(baseDir, fullPath))
      }
    }
  }

  return files
}

/**
 * Read file content from a package
 */
export async function readFile(packageName: string, filePath: string): Promise<string> {
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  const fullPath = join(pkg.path, filePath)
  return await fs.readFile(fullPath, 'utf-8')
}
