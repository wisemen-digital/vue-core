import { createModuleRegistry } from '@wisemen/vue-core-module-registry'
import { createTemplateModule } from '@wisemen/template-module'

/**
 * Initialize and setup all modules
 * This function creates the registry and registers all available modules
 */
export function setupModules() {
  console.log('📦 Setting up Module Registry...')

  // Create module registry
  const registry = createModuleRegistry()

  // Register the template module with configuration using factory function
  console.log('📦 Registering Template Module...')
  registry.use(
    createTemplateModule({
      apiUrl: 'https://api.example.com',
      config: { debug: true },
    }),
  )
  console.log('✅ Template Module registered successfully!')

  // TODO: Register additional modules here using their factory functions
  // registry.use(createAuthUiModule({ /* options */ }))
  // registry.use(createCrmModule({ /* options */ }))

  console.log('🎉 All modules registered!')

  return registry
}
