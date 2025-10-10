import { promises as fs } from 'node:fs'
import { join } from 'node:path'
import { getPackages } from './packages.js'
import { listMarkdownFiles } from './search.js'

/**
 * Get package documentation overview
 */
export async function getPackageDocumentation(packageName: string): Promise<string> {
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  let documentation = `# ${packageName} Documentation\n\n`

  try {
    const readmePath = join(pkg.path, 'README.md')
    const readme = await fs.readFile(readmePath, 'utf-8')
    documentation += `## Package README\n\n${readme}\n\n`
  }
  catch {
    // No README in package
  }

  if (pkg.docsPath) {
    try {
      const docFiles = await listMarkdownFiles(pkg.docsPath)
      documentation += `## Available Documentation Files\n\n`
      documentation += `${docFiles.map(f => `- ${f}`).join('\n')}\n\n`

      const indexFiles = ['index.md', 'README.md', `${packageName}.md`]
      for (const indexFile of indexFiles) {
        try {
          const indexPath = join(pkg.docsPath, indexFile)
          const indexContent = await fs.readFile(indexPath, 'utf-8')
          documentation += `## Overview (from ${indexFile})\n\n${indexContent}\n\n`
          break
        }
        catch {
          // Continue to next index file
        }
      }
    }
    catch {
      documentation += `Note: Documentation folder exists but could not be read.\n\n`
    }
  }
  else {
    documentation += `Note: No separate documentation folder found for this package.\n\n`
  }

  try {
    const pkgJson = JSON.parse(await fs.readFile(join(pkg.path, 'package.json'), 'utf-8'))
    documentation += `## Package Info\n\n`
    documentation += `- Name: ${pkgJson.name}\n`
    documentation += `- Version: ${pkgJson.version}\n`
    if (pkgJson.description) {
      documentation += `- Description: ${pkgJson.description}\n`
    }
    if (pkgJson.main) {
      documentation += `- Main: ${pkgJson.main}\n`
    }
  }
  catch {
    // Could not read package.json
  }

  return documentation
}

/**
 * Get specific documentation file from a package
 */
export async function getDocumentationFile(packageName: string, filePath: string): Promise<string> {
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  if (!pkg.docsPath) {
    throw new Error(`No documentation folder found for package "${packageName}"`)
  }

  const fullPath = join(pkg.docsPath, filePath)

  const resolvedPath = await fs.realpath(fullPath)
  const resolvedDocsPath = await fs.realpath(pkg.docsPath)
  if (!resolvedPath.startsWith(resolvedDocsPath)) {
    throw new Error('Invalid file path')
  }

  return await fs.readFile(fullPath, 'utf-8')
}

/**
 * List components documentation (specific for components-next package)
 */
export async function listComponentDocs(packageName: string): Promise<string[]> {
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  if (!pkg.docsPath) {
    return []
  }

  const componentsDocsPath = join(pkg.docsPath, 'components')

  try {
    await fs.access(componentsDocsPath)
  }
  catch {
    return []
  }

  const components: string[] = []
  const entries = await fs.readdir(componentsDocsPath, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const componentDocPath = join(componentsDocsPath, entry.name, `${entry.name}.md`)
      try {
        await fs.access(componentDocPath)
        components.push(entry.name)
      }
      catch {
        // No main doc file for this component
      }
    }
  }

  return components
}

/**
 * Get component documentation
 */
export async function getComponentDocumentation(packageName: string, componentName: string): Promise<string> {
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  if (!pkg.docsPath) {
    throw new Error(`No documentation folder found for package "${packageName}"`)
  }

  const componentPath = join(pkg.docsPath, 'components', componentName)
  let documentation = `# ${componentName} Component\n\n`

  const mainDocPath = join(componentPath, `${componentName}.md`)
  try {
    const mainDoc = await fs.readFile(mainDocPath, 'utf-8')
    documentation += `${mainDoc}\n\n`
  }
  catch {
    throw new Error(`Component "${componentName}" documentation not found`)
  }

  const metaPath = join(componentPath, `${componentName}-meta.md`)
  try {
    const metaDoc = await fs.readFile(metaPath, 'utf-8')
    documentation += `## API Reference\n\n${metaDoc}\n\n`
  }
  catch {
    // No meta file
  }

  const examplesPath = join(componentPath, 'examples')
  try {
    const examples = await fs.readdir(examplesPath)
    if (examples.length > 0) {
      documentation += `## Available Examples\n\n`
      documentation += `${examples.map(e => `- ${e}`).join('\n')}\n`
    }
  }
  catch {
    // No examples folder
  }

  return documentation
}
