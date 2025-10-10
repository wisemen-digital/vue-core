import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const PACKAGES_ROOT = join(__dirname, '..', '..')
export const REPO_ROOT = join(PACKAGES_ROOT, '..')
export const DOCS_ROOT = join(REPO_ROOT, 'docs')
