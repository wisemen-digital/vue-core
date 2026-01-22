# Module Registry Playground

A minimal Vue 3 application demonstrating the `@wisemen/vue-core-module-registry` system in action.

## What's This?

This playground showcases:

- ✅ Creating a module registry
- ✅ Registering modules with configuration
- ✅ Module context injection via provide/inject
- ✅ Using module composables in Vue components
- ✅ Async setup support
- ✅ Full TypeScript type safety

## Getting Started

```bash
# Install dependencies (from root)
pnpm install

# Run the playground
pnpm --filter module-registry-playground dev

# Open http://localhost:5173 in your browser
```

## File Structure

```
playground/
├── src/
│   ├── App.vue          # Main component using module features
│   ├── main.ts          # Entry point with registry setup
│   └── vite-env.d.ts    # Vite environment types
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## How It Works

### 1. Create Registry

```typescript
// main.ts
const registry = createModuleRegistry()
```

### 2. Register Module

```typescript
await registry.use(templateModule, {
  apiUrl: 'https://api.example.com',
  config: { debug: true },
})
```

### 3. Install Plugin

```typescript
app.use(registry)
```

### 4. Use in Components

```vue
<script setup>
import { useTemplateModuleContext } from '@wisemen/template-module'

const context = useTemplateModuleContext()
</script>

<template>
  <p>{{ context.apiUrl }}</p>
</template>
```

## Key Features Demonstrated

### Module Configuration

Modules are registered with typed options that get injected into the context:

```typescript
await registry.use(authUiModule, {
  apiUrl: 'https://auth.example.com',
  apiKey: 'secret',
  theme: 'dark',
})
```

### Context Injection

Each module exports its own context composable following the `use{ModuleName}Context` pattern:

```typescript
const context = useTemplateModuleContext()
```

### Module Composables

Composables can use the module context to provide features:

```typescript
const { apiUrl, config } = useTemplateModuleData()
```

### Async Setup

Modules support both sync and async initialization:

```typescript
export async function setupTemplateModule(options) {
  // Optional: async operations like API calls
  const data = await fetch(options.apiUrl)
  context.provide(options)
}
```

## What to Explore

1. **App.vue** - See how composables and context are used in a component
2. **main.ts** - See how the registry is created and configured
3. **Inspect Console** - Check the console for setup logs

## Next Steps

- Create a new module by copying the template-module
- Register multiple modules in main.ts
- Try accessing different module composables
- Experiment with async setup hooks

## Learn More

- [Module Registry README](../packages/module-registry/README.md)
- [Template Module README](../modules/template-module/README.md)
