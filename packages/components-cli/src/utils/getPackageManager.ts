import path from 'node:path'

import { findUp } from 'find-up'

export interface DetectOptions {
  autoInstall?: boolean
  cwd?: string
  programmatic?: boolean
}

export type PackageManager = 'bun' | 'npm' | 'pnpm' | 'yarn'

export const LOCKS: Record<string, PackageManager> = {
  'bun.lockb': 'bun',
  'npm-shrinkwrap.json': 'npm',
  'package-lock.json': 'npm',
  'pnpm-lock.yaml': 'pnpm',
  'yarn.lock': 'yarn',
} as const

export async function getPackageManager() {
  const lockPath = await findUp(Object.keys(LOCKS)) ?? 'pnpm-lock.yaml'
  const agent = LOCKS[path.basename(lockPath)]

  return agent
}
