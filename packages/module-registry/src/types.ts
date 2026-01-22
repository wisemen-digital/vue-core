import type { InjectionKey } from 'vue'

/**
 * Module setup hook that runs during module initialization
 * Can be synchronous for simple context injection or asynchronous for API calls
 */
export type ModuleSetupHook<TOptions = unknown> = (
  options: TOptions) => Promise<void> | void

/**
 * Definition of a reusable module that can be registered with ModuleRegistry
 * @template TOptions - Type of options passed to the module during setup
 */
export interface ModuleDefinition<TOptions = unknown> {
  /** Unique identifier for the module */
  id: string

  /** Human-readable name of the module */
  name: string

  /** Setup hook called when module is registered */
  setup?: ModuleSetupHook<TOptions>
}

/**
 * A registered module instance with options
 */
export interface RegisteredModule<TOptions = unknown> {
  /** Whether the module has been initialized */
  initialized: boolean

  /** The module definition */
  module: ModuleDefinition<TOptions>

  /** Options passed during registration */
  options: TOptions
}

/**
 * Main registry for managing modules
 * Provides plugin-style interface for Vue apps with both sync and async setup support
 */
export interface IModuleRegistry {
  /**
   * Check if a module is registered
   */
  has: (id: string) => boolean

  /**
   * Get a registered module by ID
   */
  get: (id: string) => RegisteredModule | undefined

  /**
   * Register a module
   * The module should be created with a factory function that includes its options
   * @param module - Module definition with options baked in
   */
  use: <TOptions = unknown>(module: ModuleDefinition<TOptions>) => void
}

/**
 * Options for creating a context with injection key
 */
export interface ContextOptions<T> {
  /** Name of the context for debugging */
  name: string

  /** Optional default value */
  defaultValue?: T
}

/**
 * Context helpers for a module
 */
export interface Context<T> {
  /** Inject function to retrieve context */
  inject: (fallback?: T) => T | undefined

  /** Injection key for the context */
  injectionKey: InjectionKey<T>

  /** Provide function to inject context */
  provide: (value: T) => void
}
