import {
  computed,
  type ComputedRef,
  useAttrs,
} from 'vue'

interface UseComponentAttrsReturnType {
  classAttr: ComputedRef<string>
  otherAttrs: ComputedRef<Record<string, unknown>>
}

export function useComponentAttrs(): UseComponentAttrsReturnType {
  const attrs = useAttrs()

  const classAttr = computed<string>(() => attrs.class as string)

  const otherAttrs = computed<Record<string, unknown>>(() => {
    const { class: _, ...otherAttrs } = attrs

    const keyboardCommands = [
      'onKeydown',
      'onKeyup',
      'onKeypress',
    ]

    // Not sure why this is necessary, but without it the listeners are fired multiple times
    for (const key of keyboardCommands) {
      if (key in otherAttrs) {
        delete otherAttrs[key]
      }
    }

    return otherAttrs
  })

  return {
    classAttr,
    otherAttrs,
  }
}
