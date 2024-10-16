import { createInjectionState } from '@vueuse/core'
import type { AcceptableValue } from 'reka-ui'
import type { Ref } from 'vue'

import type { RadioGroupItem } from '@/types/radioGroup.type'

export interface RadioGroupProvideContext<TValue extends AcceptableValue> {
  hasError: Ref<boolean>
  isDisabled: Ref<boolean>
  isRequired: Ref<boolean>
  isTouched: Ref<boolean>
  items: Ref<RadioGroupItem<TValue>[]>
  model: Ref<TValue | null>
}

export interface RadioGroupInjectContext<TValue extends AcceptableValue> {
  hasError: Ref<boolean>
  isDisabled: Ref<boolean>
  isItemChecked: (item: RadioGroupItem<TValue>) => boolean
  isRequired: Ref<boolean>
  isTouched: Ref<boolean>
  items: Ref<RadioGroupItem<TValue>[]>
  model: Ref<TValue | null>
}

const [
  useProvideRadioGroupContext,
  useInjectRadioGroupContext,
] = createInjectionState(<TValue extends AcceptableValue>(context: RadioGroupProvideContext<TValue>):
RadioGroupInjectContext<TValue> => {
  function isItemChecked(item: RadioGroupItem<TValue>): boolean {
    return JSON.stringify(item.value) === JSON.stringify(context.model.value)
  }

  return {
    isItemChecked,
    ...context,
  }
})

function useRadioGroupContext<TValue extends AcceptableValue>(): RadioGroupInjectContext<TValue> {
  const radioGroupContext = useInjectRadioGroupContext()

  if (radioGroupContext == null) {
    throw new Error('Please call `useProvideCounterStore` on the appropriate parent component')
  }

  return radioGroupContext as RadioGroupInjectContext<TValue>
}

export { useProvideRadioGroupContext, useRadioGroupContext }
