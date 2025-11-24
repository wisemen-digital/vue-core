# Overview

`Telemetry` initializes both Sentry and OpenTelemetry behind one interface. Pass the options you need and call `telemetry.init(app)` during boot.

## Configure providers

- **Sentry**: set `dsn` (required) plus optional `sampleRate`, `environment`, `enableReplays`, or `debug`.
- **OpenTelemetry**: set `serviceName`, `traceEndpoint`, and `accessTokenFn` (returns a bearer token). Add metadata like `environment`, `buildNumber`, `buildTimestamp`, or `commitHash` to attach context to every span.
- Disable a provider by omitting it or setting `enabled: false`.

```typescript
import { Telemetry } from '@wisemen/vue-core-telemetry'

const telemetry = new Telemetry({
  openTelemetry: {
    accessTokenFn: () => authClient.getAccessToken(), // return a bearer token for OTLP exports
    serviceName: 'vue-app',
    traceEndpoint: import.meta.env.VITE_OTEL_TRACE_ENDPOINT,
    environment: import.meta.env.MODE,
    commitHash: import.meta.env.VITE_GIT_COMMIT,
  },
  sentry: {
    dsn: import.meta.env.VITE_SENTRY_DSN,
    sampleRate: 0.5,
    enableReplays: true,
  },
})

await telemetry.init(app)
```

## Report errors and messages

```typescript
telemetry.captureException(error, { feature: 'checkout', step: 'confirm' })
telemetry.captureMessage('checkout started', 'info')
```

## Add context for future events

```typescript
telemetry.setTags({ locale: 'en-GB', plan: 'pro' })
telemetry.setExtra('cartSize', 4)
telemetry.setUser({ id: user.id, email: user.email })
```
