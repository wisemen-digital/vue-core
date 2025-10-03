#!/usr/bin/env node
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const packageRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))
const distEntry = resolve(packageRoot, 'dist/indexer/index.js')

if (existsSync(distEntry)) {
  const { runCli } = await import(distEntry)
  await runCli(process.argv)
}
else {
  const { runCli } = await import('../src/indexer/index.ts')
  await runCli(process.argv)
}
