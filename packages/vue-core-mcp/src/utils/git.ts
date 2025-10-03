import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

import { getWorkspaceRoot } from './fs'

const execFileAsync = promisify(execFile)

async function runGit(args: string[]): Promise<string | undefined> {
  try {
    const { stdout } = await execFileAsync('git', args, {
      cwd: getWorkspaceRoot(),
      maxBuffer: 10 * 1024 * 1024,
    })
    return stdout.trim()
  }
  catch {
    return undefined
  }
}

export async function getCurrentRevision(): Promise<string | undefined> {
  return runGit(['rev-parse', 'HEAD'])
}

export async function getCurrentShortRevision(): Promise<string | undefined> {
  return runGit(['rev-parse', '--short', 'HEAD'])
}

export async function getNearestTag(): Promise<string | undefined> {
  return runGit(['describe', '--tags', '--abbrev=0'])
}

export async function listTags(): Promise<string[]> {
  const output = await runGit(['tag', '--list'])
  if (!output) {
    return []
  }

  return output.split('\n').map(tag => tag.trim()).filter(Boolean)
}

export async function readFileAtRevision(revision: string, filePath: string): Promise<string | undefined> {
  const output = await runGit(['show', `${revision}:${filePath}`])
  return output ?? undefined
}

export async function hasGit(): Promise<boolean> {
  const output = await runGit(['rev-parse', '--is-inside-work-tree'])
  return output === 'true'
}
