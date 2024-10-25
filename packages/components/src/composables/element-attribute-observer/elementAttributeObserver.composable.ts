import {
  type ComputedRef,
  onMounted,
  onUnmounted,
} from 'vue'

interface UseElementAttributeObserverOptions {
  attribute: string
  element: ComputedRef<HTMLElement | null>
  onChange: (value: null | string) => void
}

export function useElementAttributeObserver(options: UseElementAttributeObserverOptions): void {
  let observer: MutationObserver | null = null

  onMounted(() => {
    if (options.element.value === null) {
      throw new Error('Element is null')
    }

    options.onChange(options.element.value!.getAttribute(options.attribute) ?? null)

    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === options.attribute) {
            options.onChange(options.element.value!.getAttribute(options.attribute) ?? null)
          }
        }
      })
    })

    observer.observe(options.element.value, {
      attributeFilter: [
        options.attribute,
      ],
      attributes: true,
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
