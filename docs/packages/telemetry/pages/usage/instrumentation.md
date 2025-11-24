# Instrumentation

OpenTelemetry tracing works best with automatic instrumentations. The helper ships a convenience function so you can opt-in with one call.

## Register defaults

`registerAppInstrumentations()` registers Fetch instrumentation (with trace headers propagated to all CORS URLs) and User Interaction instrumentation for `click`, `change`, and `keydown` events.

```typescript
import { registerAppInstrumentations } from '@wisemen/vue-core-telemetry'

registerAppInstrumentations()
```

## Add custom instrumentations

Pass extra instrumentations for other libraries (e.g. document load, web vitals). They are appended to the defaults.

```typescript
import { registerAppInstrumentations } from '@wisemen/vue-core-telemetry'
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load'

registerAppInstrumentations([
  new DocumentLoadInstrumentation(),
])
```
