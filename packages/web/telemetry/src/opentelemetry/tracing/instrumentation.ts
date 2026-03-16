import type { Instrumentation } from '@opentelemetry/instrumentation'
import { registerInstrumentations } from '@opentelemetry/instrumentation'
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch'
import { UserInteractionInstrumentation } from '@opentelemetry/instrumentation-user-interaction'

/**
 * Register default OpenTelemetry instrumentations for web applications.
 * This includes Fetch and User Interaction instrumentations.
 *
 * @param instrumentations - Additional instrumentations to register.
 */
export function registerAppInstrumentations(
  instrumentations?: Instrumentation[],
): void {
  registerInstrumentations({
    instrumentations: [
      new UserInteractionInstrumentation({
        eventNames: [
          'click',
          'change',
          'keydown',
        ],
      }),
      new FetchInstrumentation({
        propagateTraceHeaderCorsUrls: /.*/,
      }),
      ...(instrumentations ?? []),
    ],
  })
}
