import { createContext } from 'radix-vue'
import type { AcceptableValue } from 'radix-vue/dist/Combobox/ComboboxRoot'
import type { Ref } from 'vue'

interface ComboboxRootContext<T> {
  contentElement: Ref<HTMLElement | undefined>
  contentId: string
  disabled: Ref<boolean>
  filteredOptions: Ref<Array<T>>
  inputElement: Ref<HTMLInputElement | undefined>
  isUserInputted: Ref<boolean>
  modelValue: Ref<Array<T> | T>
  multiple: Ref<boolean>
  onContentElementChange: (el: HTMLElement) => void
  onInputElementChange: (el: HTMLInputElement) => void
  onInputEnter: () => void
  onInputNavigation: (dir: 'down' | 'end' | 'home' | 'up') => void
  onOpenChange: (value: boolean) => void
  onSelectedValueChange: (val: T) => void
  onValueChange: (val: T) => void
  open: Ref<boolean>
  parentElement: Ref<HTMLElement | undefined>
  searchTerm: Ref<string>
  selectedValue: Ref<T | undefined>
}

export const [
  injectComboboxRootContext,
  provideComboboxRootContext,
] = createContext<ComboboxRootContext<AcceptableValue>>('ComboboxRoot')
