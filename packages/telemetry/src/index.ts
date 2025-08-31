import * as Sentry from '@sentry/vue'
import type { App } from 'vue'

import { initOpenTelemetry } from './opentelemetry/tracing/tracer'
import { initSentry } from './sentry'
import type { TelemetryOptions } from './types'

interface TelemetryUser {
  id?: string
  [key: string]: any
  email?: string
}

/**
 * Initialize telemetry for a Vue application.
 */
interface Telemetry {
  captureException: (error: any, context?: Record<string, any>) => void
  captureMessage: (message: string, level?: Sentry.SeverityLevel) => void
  setExtra: (key: string, value: any) => void
  setTag: (key: string, value: string) => void
  setTags: (tags: Record<string, string>) => void
  setUser: (user: TelemetryUser) => void
}

export function initTelemetry(app: App, options: TelemetryOptions): Telemetry {
  const openTelemetry = options.openTelemetry
  const sentry = options.sentry

  if (sentry?.dsn) {
    initSentry(app, sentry)
  }

  if (openTelemetry !== undefined && openTelemetry.enabled !== false) {
    initOpenTelemetry(openTelemetry)
  }

  return {
    captureException: (error: any, context?: Record<string, any>) =>
      Sentry.captureException(error, {
        contexts: {
          additional: context,
        },
      }),
    captureMessage: (message: string, level?: Sentry.SeverityLevel) => Sentry.captureMessage(message, level),
    setExtra: (key: string, value: any) => Sentry.setExtra(key, value),
    setTag: (key: string, value: string) => Sentry.setTag(key, value),
    setTags: (tags: Record<string, string>) => Sentry.setTags(tags),
    setUser: (user: TelemetryUser) => Sentry.setUser(user),
  }
}

export { registerAppInstrumentations } from './opentelemetry/tracing/instrumentation'
