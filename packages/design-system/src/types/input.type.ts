import type { Component } from 'vue'

/**
 * Shared properties for input elements.
 */
export interface Input {
  /**
   * The id of the element.
   * @default null
   */
  id?: string | null
  /**
   * Determines whether the element is disabled. When `true`, the element becomes non-interactive.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is read-only. When `true`, the input value cannot be changed.
   * @default false
   */
  isReadonly?: boolean
  /**
   * Whether the input is required.
   * @default false
   */
  isRequired?: boolean
  /**
   * The name of the input.
   * @default null
   */
  name?: string | null
  /**
   * Additional CSS classes to apply to the input element.
   */
  class?: string | null
  /**
   * Additional inline styles to apply to the input element.
   */
  style?: Record<string, string> | null
}

export interface InputMeta {
  /**
   * Determines whether the element is disabled. When `true`, styles indicate the element is non-interactive.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is required. When `true`, an asterisk is shown next to the label.
   * @default false
   */
  isRequired?: boolean
  /**
   * The error associated with the input.
   * @default null
   */
  errorMessage?: string | null
  /**
   * The id of the element the label is for.
   * @default null
   */
  for?: string | null
  /**
   * Determines whether to hide the error message visually.
   * @default false
   */
  hideErrorMessage?: boolean
  /**
   * The hint text of the input.
   * @default null
   */
  hint?: string | null
  /**
   * The label of the input.
   * @default null
   */
  label?: string | null
}

export interface InputField {
  /**
   * Determines whether the input is disabled. When `true`, the input becomes non-interactive.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is in a loading state.
   * @default false
   */
  isLoading?: boolean
  /**
   * Whether the input is read-only. When `true`, the input value cannot be changed.
   */
  isReadonly?: boolean
  /**
   * The icon displayed on the left side of the input.
   * @default null
   */
  iconLeft?: Component | null
  /**
   * The icon displayed on the right side of the input.
   * @default null
   */
  iconRight?: Component | null
  /**
   * The placeholder text of the input.
   */
  placeholder?: string | null
}

export interface AutocompleteInput {
  /**
   * The autocomplete attribute of the input.
   * @default 'off'
   */
  autocomplete?: string
}

export const INPUT_DEFAULTS = {
  id: null,
  isDisabled: false,
  isReadonly: false,
  isRequired: false,
  name: null,
  class: null,
  style: null,
} satisfies Input

export const INPUT_META_DEFAULTS = {
  isDisabled: false,
  isRequired: false,
  errorMessage: null,
  for: null,
  hideErrorMessage: false,
  hint: null,
  label: null,
} satisfies InputMeta

export const INPUT_FIELD_DEFAULTS = {
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  iconLeft: null,
  iconRight: null,
  placeholder: null,
} satisfies InputField

export const AUTOCOMPLETE_INPUT_DEFAULTS = {
  autocomplete: 'off',
} satisfies AutocompleteInput

export function omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
  const result = {
    ...obj,
  }

  for (const key of keys) {
    delete result[key]
  }

  return result
}
