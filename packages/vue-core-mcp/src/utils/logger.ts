type LogLevel = 'info' | 'warn' | 'error' | 'debug'

type LogPayload = Record<string, unknown> | undefined

export interface Logger {
  info(message: string, payload?: LogPayload): void
  warn(message: string, payload?: LogPayload): void
  error(message: string, payload?: LogPayload): void
  debug(message: string, payload?: LogPayload): void
  child(scope: string): Logger
  time<T>(message: string, fn: () => Promise<T>): Promise<T>
}

function emit(level: LogLevel, scope: string[], message: string, payload?: LogPayload) {
  const timestamp = new Date().toISOString()
  const prefix = scope.length > 0 ? `[${scope.join(':')}]` : ''
  const line = `${timestamp} ${prefix} ${message}`.trim()
  const data = payload ? { ...payload } : undefined

  switch (level) {
    case 'info':
      data ? console.info(line, data) : console.info(line)
      break
    case 'warn':
      data ? console.warn(line, data) : console.warn(line)
      break
    case 'error':
      data ? console.error(line, data) : console.error(line)
      break
    case 'debug':
      if (process.env.DEBUG?.includes('vue-core-mcp')) {
        data ? console.debug(line, data) : console.debug(line)
      }
      break
  }
}

export function createLogger(...scope: string[]): Logger {
  const currentScope = scope

  return {
    info(message, payload) {
      emit('info', currentScope, message, payload)
    },
    warn(message, payload) {
      emit('warn', currentScope, message, payload)
    },
    error(message, payload) {
      emit('error', currentScope, message, payload)
    },
    debug(message, payload) {
      emit('debug', currentScope, message, payload)
    },
    child(childScope: string) {
      return createLogger(...currentScope, childScope)
    },
    async time(message, fn) {
      const started = Date.now()
      try {
        const result = await fn()
        const duration = Date.now() - started
        emit('info', currentScope, `${message} (done in ${duration}ms)`)
        return result
      }
      catch (error) {
        const duration = Date.now() - started
        emit('error', currentScope, `${message} (failed after ${duration}ms)`, {
          error,
        })
        throw error
      }
    },
  }
}
