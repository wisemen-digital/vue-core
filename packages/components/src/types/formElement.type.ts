export interface FormElementProps {
  /**
   * The id of the input.
   * @default null
   */
  id?: string | null
  /**
   * The test id of the input.
   * @default null
   */
  testId?: string | null
  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is readonly.
   * @default false
   */
  isReadonly?: boolean
  /**
   * Whether the input is required.
   * @default false
   */
  isRequired?: boolean
  /**
   * Whether the input is touched. Used to determine if an error should be shown.
   * @default false
   */
  isTouched?: boolean
  /**
   * The errors associated with the input.
   * @default []
   */
  errors?: string[]
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

export interface FormElementSlots {
  /**
   * Can be used to render a custom hint and error message.
   */
  bottom: ({
    errors, hint,
  }: { errors: string[]
    hint: string | null }) => void
  /**
   * The content slot.
   */
  default: () => void
  /**
   * Can be used to render a custom error message.
   */
  error: ({
    errors,
  }: { errors: string[] }) => void
  /**
   * Can be used to render a custom hint message.
   */
  hint: ({
    hint,
  }: { hint: string | null }) => void
  /**
   * Can be used to render a custom label.
   */
  label: ({
    inputId,
    isRequired,
    label,
  }: { inputId: string
    isRequired: boolean
    label: string | null }) => void
}
