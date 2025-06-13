import {
  describe,
  expect,
  it,
} from 'vitest'
import {
  computed,
  ref,
} from 'vue'

import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'

describe('useAriaDescribedBy', () => {
  const testId = 'my-input'

  it('should return an empty string when hasErrors and hasHint are false', () => {
    const hasErrors = computed<boolean>(() => false)
    const hasHint = computed<boolean>(() => false)

    const ariaDescribedBy = useAriaDescribedBy({
      id: testId,
      hasErrors,
      hasHint,
    })

    expect(ariaDescribedBy.value).toBe('')
  })

  it('should return only the error id when hasErrors is true and hasHint is false', () => {
    const hasErrors = computed<boolean>(() => true)
    const hasHint = computed<boolean>(() => false)

    const ariaDescribedBy = useAriaDescribedBy({
      id: testId,
      hasErrors,
      hasHint,
    })

    expect(ariaDescribedBy.value).toBe(`input-label-${testId}`)
  })

  it('should return only the hint id when hasErrors is false and hasHint is true', () => {
    const hasErrors = computed<boolean>(() => false)
    const hasHint = computed<boolean>(() => true)

    const ariaDescribedBy = useAriaDescribedBy({
      id: testId,
      hasErrors,
      hasHint,
    })

    expect(ariaDescribedBy.value).toBe(`input-hint-${testId}`)
  })

  it('should return both error and hint ids when hasErrors and hasHint are true', () => {
    const hasErrors = computed<boolean>(() => true)
    const hasHint = computed<boolean>(() => true)

    const ariaDescribedBy = useAriaDescribedBy({
      id: testId,
      hasErrors,
      hasHint,
    })

    expect(ariaDescribedBy.value).toBe(`input-label-${testId} input-hint-${testId}`)
  })

  it('should reactively update the aria-describedby string', () => {
    const hasErrorsRef = ref<boolean>(false)
    const hasHintRef = ref<boolean>(false)

    const hasErrors = computed<boolean>(() => hasErrorsRef.value)
    const hasHint = computed<boolean>(() => hasHintRef.value)

    const ariaDescribedBy = useAriaDescribedBy({
      id: testId,
      hasErrors,
      hasHint,
    })

    expect(ariaDescribedBy.value).toBe('')

    hasErrorsRef.value = true

    expect(ariaDescribedBy.value).toBe(`input-label-${testId}`)

    hasHintRef.value = true
    expect(ariaDescribedBy.value).toBe(`input-label-${testId} input-hint-${testId}`)

    hasErrorsRef.value = false
    expect(ariaDescribedBy.value).toBe(`input-hint-${testId}`)

    hasHintRef.value = false
    expect(ariaDescribedBy.value).toBe('')
  })
})
