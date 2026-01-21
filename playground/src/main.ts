import { createApp } from 'vue'
import App from './App.vue'
import { setupModules } from './lib/moduleRegistry'

async function main() {
  // 1. Setup modules (creates registry and registers all modules)
  const registry = setupModules()

  // 2. Create Vue app with registry as prop
  const app = createApp(App, { registry })

  // 3. Mount to DOM
  app.mount('#app')

  console.log('🚀 Module Registry Playground ready!')
}

main().catch(console.error)
