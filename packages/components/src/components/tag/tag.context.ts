import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

interface TagContext {
  isDisabled: ComputedRef<boolean>
  removeTag: () => void
}

const tagContextKey: InjectionKey<TagContext> = Symbol('tagContext')

export function provideTagContext(context: TagContext): void {
  provide(tagContextKey, context)
}

export function injectTagContext(): TagContext {
  const context = inject(tagContextKey)

  if (context === undefined) {
    throw new Error('Tag context is not provided. Please use `provideTagContext` to provide the context.')
  }

  return context
}
