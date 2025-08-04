/* eslint-disable no-console */

import { ZoneContextManager } from '@opentelemetry/context-zone'
import type { ExportResult } from '@opentelemetry/core'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { registerInstrumentations } from '@opentelemetry/instrumentation'
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch'
import { UserInteractionInstrumentation } from '@opentelemetry/instrumentation-user-interaction'
import type { OTLPExporterNodeConfigBase } from '@opentelemetry/otlp-exporter-base'
import { resourceFromAttributes } from '@opentelemetry/resources'
import type { ReadableSpan } from '@opentelemetry/sdk-trace-base'
import {
  BatchSpanProcessor,
  WebTracerProvider,
} from '@opentelemetry/sdk-trace-web'

import type { OpenTelemetryOptions } from './types'

export function initOpenTelemetry(options: OpenTelemetryOptions): void {
  const endpoint = options.traceEndpoint

  if (endpoint == null) {
    console.warn('OpenTelemetry is disabled. No trace endpoint provided.')

    return
  }

  if (options.accessToken === null) {
    return
  }

  const customOTLPTraceExporter = new CustomOTLPTraceExporter({
    headers: {
      'Authorization': `Bearer ${options.accessToken}`,
      'Content-Type': 'application/json',
    },
    url: `${endpoint}`,
  })

  const tracerProvider = new WebTracerProvider({
    resource: resourceFromAttributes({
      'deployment.build': options.buildNumber ?? 'unknown',
      'deployment.commit': options.commitHash ?? 'unknown',
      'deployment.environment': options.environment ?? 'unknown',
      'deployment.timestamp': options.buildTimestamp ?? 'unknown',
      'service.name': options.serviceName,
    }),
    spanProcessors: [
      new BatchSpanProcessor(customOTLPTraceExporter),
    ],
  })

  tracerProvider.register({
    contextManager: new ZoneContextManager(),
  })

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
    ],
  })

  console.log('OpenTelemetry tracing configured successfully.')
}

// https://github.com/open-telemetry/opentelemetry-js/issues/2903
export class CustomOTLPTraceExporter extends OTLPTraceExporter {
  private _headers: Record<string, unknown>
  constructor(
    config: OTLPExporterNodeConfigBase,
  ) {
    super(config)
    this._headers = {
      ...config.headers,
    }
  }

  export(
    items: ReadableSpan[],
    resultCallback: (result: ExportResult) => void,
  ): void {
    /* @ts-expect-error delegate */
    const params = this._delegate?._transport?._transport?._parameters

    if (typeof params === 'object' && params !== null) {
      params.headers = (): Record<string, unknown> => {
        return this._headers
      }
    }

    return super.export(items, (result) => {
      return resultCallback(result)
    })
  }
}
