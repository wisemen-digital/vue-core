import { trace, SpanStatusCode, Exception } from '@opentelemetry/api'

export function captureException (exception: unknown, message?: string): void {
  const activeSpan = trace.getActiveSpan()

  if (activeSpan == null) {
    return
  }

  activeSpan.setStatus({
    code: SpanStatusCode.ERROR,
    message: message
  })

  activeSpan.recordException(exception as Exception)
  activeSpan.setAttribute('exceptions.captured', true)

  if (exception instanceof Error) {
    activeSpan.setAttribute('exceptions.message', exception.message)
    activeSpan.setAttribute('exceptions.stacktrace', exception.stack ?? '')

    const prototype = Object.getPrototypeOf(exception) as { constructor: { name: string } }
    const className = prototype.constructor.name as string | undefined

    activeSpan.setAttribute('exception.type', className ?? exception.name)
  }
}
