<script setup lang="ts">
import type { ModuleRegistry } from '../registry'

/**
 * ModuleProvider component that handles context injection for all registered modules
 * Wraps your app and provides all module contexts in the proper Vue lifecycle
 */

interface Props {
  /**
   * The module registry instance with registered modules
   */
  registry: ModuleRegistry
}

const props = defineProps<Props>()

// Call setup hooks for each module during component setup
// This ensures context is provided within Vue's lifecycle
const modules = props.registry.getAll()

for (const registeredModule of modules) {
  if (registeredModule.module.setup) {
    // Call setup synchronously - it should use createContext and call provide()
    // The provide() calls will work because we're inside setup()
    registeredModule.module.setup(registeredModule.options)
  }
}
</script>

<template>
  <slot />
</template>
