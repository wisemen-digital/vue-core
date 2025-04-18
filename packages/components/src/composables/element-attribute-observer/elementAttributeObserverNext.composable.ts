import type { ComputedRef } from 'vue'
import {
  computed,
  ref,
  watch,
} from 'vue'

export function useElementAttributeObserverNext<TDefaultValue extends string | null>(
  element: ComputedRef<HTMLElement | null>,
  attributeName: string,
  defaultValue: TDefaultValue,
): ComputedRef<TDefaultValue> {
  const attributeValue = ref<TDefaultValue>(defaultValue)

  watch(element, (element) => {
    if (element === null) {
      return
    }

    new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === attributeName) {
            attributeValue.value = element.getAttribute(attributeName) ?? defaultValue
          }
        }
      }
    }).observe(element, {
      attributeFilter: [
        attributeName,
      ],
      attributes: true,
    })
  }, { immediate: true })

  return computed<TDefaultValue>(() => attributeValue.value)
}
