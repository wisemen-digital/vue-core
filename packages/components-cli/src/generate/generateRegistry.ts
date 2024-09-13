import { components } from '@/generate/components'
import { globalComponents } from '@/generate/globalComponents'
import { checkUsedFiles } from '@/generate/utils/checkUsedFiles'
import { generateRegistryFile } from '@/generate/utils/generateRegistryFile'

import { globalConfig } from './globalConfig'

try {
  const allComponents = [
    ...components,
    ...globalComponents,
    ...globalConfig,
  ]

  await checkUsedFiles(allComponents)

  void generateRegistryFile(components, 'components')
  void generateRegistryFile(globalComponents, 'globalComponents')
  void generateRegistryFile(globalConfig, 'globalConfig')
}
catch (e) {
  console.error(e)
}
