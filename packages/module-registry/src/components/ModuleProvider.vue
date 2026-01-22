<script setup lang="ts">
import type { ModuleRegistry } from 'src/registry'
import { ref } from 'vue'

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

const isSetupComplete = ref<boolean>(false)

const modules = props.registry.getAll()

async function setupModuleContexts(): Promise<void> {
  for (const registeredModule of modules) {
    if (registeredModule.module.setup) {
      await registeredModule.module.setup(registeredModule.options)
    }
  }

  isSetupComplete.value = true
}

setupModuleContexts()
</script>

<template>
  <div>
    <slot v-if="isSetupComplete" />
    <slot
      v-else
      name="fallback"
    />
  </div>
</template>
