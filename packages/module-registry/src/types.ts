import type { App, InjectionKey } from 'vue'

/**
 * Module setup hook that runs during module initialization
 * Can be synchronous for simple context injection or asynchronous for API calls
 */
export type ModuleSetupHook<TOptions = unknown> = (
  options: TOptions) => void | Promise<void>

/**
 * Definition of a reusable module that can be registered with ModuleRegistry
 * @template TOptions - Type of options passed to the module during setup
 */
export interface ModuleDefinition<TOptions = unknown> {
  /** Unique identifier for the module */
  id: string

  /** Human-readable name of the module */
  name: string

  /** Optional version string */
  version?: string

  /** Setup hook called when module is registered */
  setup?: ModuleSetupHook<TOptions>
}

/**
 * A registered module instance with options
 */
export interface RegisteredModule<TOptions = unknown> {
  /** The module definition */
  module: ModuleDefinition<TOptions>

  /** Options passed during registration */
  options: TOptions

  /** Whether the module has been initialized */
  initialized: boolean
}

/**
 * Main registry for managing modules
 * Provides plugin-style interface for Vue apps with both sync and async setup support
 */
export interface IModuleRegistry {
  /**
   * Register a module
   * The module should be created with a factory function that includes its options
   * @param module - Module definition with options baked in
   */
  use<TOptions = unknown>(module: ModuleDefinition<TOptions>): void

  /**
   * Get a registered module by ID
   */
  get(id: string): RegisteredModule | undefined

  /**
   * Check if a module is registered
   */
  has(id: string): boolean
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
  /** Injection key for the context */
  injectionKey: InjectionKey<T>

  /** Provide function to inject context */
  provide(value: T): void

  /** Inject function to retrieve context */
  inject(fallback?: T): T | undefined
}
