import { promises as fs } from 'node:fs'
import { join, relative } from 'node:path'
import { getPackages, listFiles } from './packages.js'

/**
 * Search for text in source code files within a package
 */
export async function searchFiles(packageName: string, query: string): Promise<string[]> {
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  const files = await listFiles(pkg.path)
  const results: string[] = []

  for (const file of files) {
    const fullPath = join(pkg.path, file)
    const content = await fs.readFile(fullPath, 'utf-8')

    if (content.toLowerCase().includes(query.toLowerCase())) {
      const lines = content.split('\n')
      const matchingLines: string[] = []

      lines.forEach((line, idx) => {
        if (line.toLowerCase().includes(query.toLowerCase())) {
          matchingLines.push(`${idx + 1}: ${line}`)
        }
      })

      results.push(`${file}:\n${matchingLines.join('\n')}`)
    }
  }

  return results
}

/**
 * List markdown files recursively
 */
export async function listMarkdownFiles(dir: string, baseDir: string = dir): Promise<string[]> {
  const files: string[] = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      if (['node_modules', '.git'].includes(entry.name)) {
        continue
      }
      files.push(...await listMarkdownFiles(fullPath, baseDir))
    }
    else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      files.push(relative(baseDir, fullPath))
    }
  }

  return files
}

/**
 * Search for text within documentation files of a package
 */
export async function searchDocumentation(packageName: string, query: string): Promise<string[]> {
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  if (!pkg.docsPath) {
    return [`No documentation folder found for package "${packageName}"`]
  }

  const docFiles = await listMarkdownFiles(pkg.docsPath)
  const results: string[] = []

  for (const file of docFiles) {
    const fullPath = join(pkg.docsPath, file)
    const content = await fs.readFile(fullPath, 'utf-8')

    if (content.toLowerCase().includes(query.toLowerCase())) {
      const lines = content.split('\n')
      const matchingLines: string[] = []

      lines.forEach((line, idx) => {
        if (line.toLowerCase().includes(query.toLowerCase())) {
          matchingLines.push(`${idx + 1}: ${line.trim()}`)
        }
      })

      if (matchingLines.length > 0) {
        results.push(`📄 ${file}:\n${matchingLines.slice(0, 5).join('\n')}`)
      }
    }
  }

  return results.length > 0 ? results : ['No matches found']
}
