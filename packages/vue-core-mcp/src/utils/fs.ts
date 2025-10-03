import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import { constants } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { hashContent } from './cache'

const PACKAGE_ROOT = resolve(fileURLToPath(new URL('../..', import.meta.url)))
const WORKSPACE_ROOT = resolve(PACKAGE_ROOT, '..', '..')
const DIST_ROOT = resolve(PACKAGE_ROOT, 'dist')
const ARTIFACT_ROOT = resolve(DIST_ROOT, 'mcp')
const HISTORY_ROOT = resolve(ARTIFACT_ROOT, 'history')

export function getPackageRoot(): string {
  return PACKAGE_ROOT
}

export function getWorkspaceRoot(): string {
  return WORKSPACE_ROOT
}

export function getArtifactRoot(): string {
  return ARTIFACT_ROOT
}

export function getHistoryRoot(): string {
  return HISTORY_ROOT
}

export function resolveFromPackage(...segments: string[]): string {
  return resolve(PACKAGE_ROOT, ...segments)
}

export async function ensureDir(dir: string): Promise<void> {
  await mkdir(dir, { recursive: true })
}

export async function pathExists(path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK)
    return true
  }
  catch {
    return false
  }
}

export async function readJsonFile<T>(path: string): Promise<T> {
  const buffer = await readFile(path, 'utf8')
  return JSON.parse(buffer) as T
}

export async function readJsonIfExists<T>(path: string): Promise<T | undefined> {
  if (!(await pathExists(path))) {
    return undefined
  }

  return readJsonFile<T>(path)
}

export async function writeJsonFile(path: string, data: unknown): Promise<{ hash: string } | undefined> {
  const payload = JSON.stringify(data, null, 2)
  const nextHash = hashContent(payload)

  if (await pathExists(path)) {
    const existing = await readFile(path, 'utf8')
    const currentHash = hashContent(existing)
    if (currentHash === nextHash) {
      return undefined
    }
  }

  await ensureDir(dirname(path))
  await writeFile(path, payload, 'utf8')
  return { hash: nextHash }
}

export async function readFileSafe(path: string): Promise<string | undefined> {
  try {
    return await readFile(path, 'utf8')
  }
  catch {
    return undefined
  }
}
