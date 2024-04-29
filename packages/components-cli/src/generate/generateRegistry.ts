import { components } from './components'
import { globalComponents } from './globalComponents'
import { globalConfig } from './globalConfig'
import { generateRegistryFile } from './utils/generateRegistryFile'

try {
  void generateRegistryFile(components, 'components')
  void generateRegistryFile(globalComponents, 'globalComponents')
  void generateRegistryFile(globalConfig, 'globalConfig')
}
catch (e) {
  console.error(e)
}
