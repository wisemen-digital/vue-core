# Installation

`@wisemen/vue-core-telemetry` wires Sentry error tracking and OpenTelemetry tracing into Vue apps with a single helper.

## Prerequisites

- Vue 3 application
- Sentry DSN (only when Sentry should run)
- OTLP trace endpoint and a function that returns a bearer token for exports

## 1. Install the package

::: code-group
```bash [pnpm]
pnpm install @wisemen/vue-core-telemetry
```
:::

## 2. Create a telemetry plugin

Configure both providers in one place. Skip initialization when you do not want telemetry locally.

```typescript
// src/plugins/telemetry.plugin.ts
import { Telemetry, registerAppInstrumentations } from '@wisemen/vue-core-telemetry'
import type { App } from 'vue'

const telemetry = new Telemetry({
  openTelemetry: {
    accessTokenFn: () => authClient.getAccessToken(), // return a bearer token for OTLP exports
    serviceName: 'vue-app',
    traceEndpoint: import.meta.env.VITE_OTEL_TRACE_ENDPOINT,
    environment: import.meta.env.MODE,
    buildNumber: import.meta.env.VITE_BUILD_NUMBER,
    commitHash: import.meta.env.VITE_GIT_COMMIT,
  },
  sentry: {
    dsn: import.meta.env.VITE_SENTRY_DSN,
    sampleRate: 1,
  },
})

registerAppInstrumentations() // optional: adds Fetch + User Interaction instrumentation

export const telemetryPlugin = {
  install: async (app: App) => {
    if (import.meta.env.MODE === 'mock') return
    await telemetry.init(app)
  },
}
```

## 3. Install the plugin during app bootstrap

```typescript
// src/main.ts
import { telemetryPlugin } from './plugins/telemetry.plugin'

const app = createApp(App)
await telemetryPlugin.install(app)
app.mount('#app')
```
