import {
  inject,
  type InjectionKey,
  provide,
} from 'vue'

export function useContext<TContext>(contextName: string): [
  (context: TContext) => void,
  () => TContext,
] {
  const contextKey: InjectionKey<TContext> = Symbol(contextName)

  function useProvideContext(context: TContext): void {
    provide(contextKey, context)
  }

  function useInjectContext(): TContext {
    const context = inject(contextKey)

    if (context === undefined) {
      throw new Error(`${contextName} context is not provided.`)
    }

    return context
  }

  return [
    useProvideContext,
    useInjectContext,
  ]
}
