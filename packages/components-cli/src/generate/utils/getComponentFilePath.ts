import path from 'node:path'

import type { ComponentFile } from '@/generate/components.type'
import { getComponentTypeFolder } from '@/generate/components.type'
import { BASE_COMPONENTS_PATH } from '@/generate/utils/generateRegistryFile'

export function getComponentFilePath(componentFile: ComponentFile): string {
  return path.join(process?.cwd(), `${BASE_COMPONENTS_PATH}${getComponentTypeFolder(componentFile.type)}`, componentFile.path)
}
