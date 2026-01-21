import type { IModuleRegistry, ModuleDefinition, RegisteredModule } from './types'

export class ModuleRegistry implements IModuleRegistry {
  private modules = new Map<string, RegisteredModule>()

  /**
   * Register a module
   * The actual setup will be called when the ModuleProvider component is rendered
   */
  use<TOptions = unknown>(module: ModuleDefinition<TOptions>): void {
    if (this.has(module.id)) {
      throw new Error(
        `Module "${module.id}" is already registered. Duplicate module registration is not allowed.`,
      )
    }

    const registeredModule: RegisteredModule<TOptions> = {
      module,
      options: undefined as any,
      initialized: false,
    }

    this.modules.set(module.id, registeredModule as any)
  }

  /**
   * Get a registered module by ID
   */
  get(id: string): RegisteredModule | undefined {
    return this.modules.get(id)
  }

  /**
   * Check if a module is registered
   */
  has(id: string): boolean {
    return this.modules.has(id)
  }

  /**
   * Get all registered modules
   */
  getAll(): RegisteredModule[] {
    return Array.from(this.modules.values())
  }

}

/**
 * Create a new module registry instance
 */
export function createModuleRegistry(): ModuleRegistry {
  return new ModuleRegistry()
}
