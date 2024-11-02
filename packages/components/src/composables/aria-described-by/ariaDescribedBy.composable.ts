import { computed, type ComputedRef } from 'vue'

interface AriaDescribedByOptions {
  id: ComputedRef<string>
  hasErrors: ComputedRef<boolean>
  hasHint: ComputedRef<boolean>
}

export function useAriaDescribedBy(options: AriaDescribedByOptions): ComputedRef<string> {
  const ariaDescribedBy = computed<string>(() => {
    const ariaDescribedBy: string[] = []

    if (options.hasErrors.value) {
      ariaDescribedBy.push(`input-label-${options.id}`)
    }

    if (options.hasHint.value) {
      ariaDescribedBy.push(`input-hint-${options.id}`)
    }

    return ariaDescribedBy.join(' ')
  })

  return ariaDescribedBy
}
