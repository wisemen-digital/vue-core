import { relative } from 'node:path'
import { simpleGit } from 'simple-git'
import { getPackages } from './packages.js'

/**
 * Get git log for a package
 */
export async function getGitLog(packageName: string, maxCount: number = 10): Promise<string> {
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  const git = simpleGit()
  const log = await git.log({
    file: pkg.path,
    maxCount,
  })

  return log.all.map(commit =>
    `${commit.hash.substring(0, 7)} - ${commit.date} - ${commit.message} (${commit.author_name})`,
  ).join('\n')
}

/**
 * Get git diff for a package
 */
export async function getGitDiff(packageName: string, ref1?: string, ref2?: string): Promise<string> {
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  const git = simpleGit()
  const relativePath = relative(process.cwd(), pkg.path) || '.'

  if (ref1 && ref2) {
    return await git.diff([ref1, ref2, '--', relativePath])
  }
  else if (ref1) {
    return await git.diff([ref1, '--', relativePath])
  }
  else {
    return await git.diff(['--', relativePath])
  }
}

/**
 * Get git status for a package
 */
export async function getGitStatus(packageName: string): Promise<string> {
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  const git = simpleGit()
  const status = await git.status()
  const relativePath = relative(process.cwd(), pkg.path)

  const packageFiles = status.files.filter(file =>
    file.path.startsWith(relativePath),
  )

  return packageFiles.map(file =>
    `${file.working_dir}${file.index} ${file.path}`,
  ).join('\n') || 'No changes'
}
