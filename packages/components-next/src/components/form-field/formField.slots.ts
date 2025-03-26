export interface FormFieldLabelSlots {
  /**
   * Content to be displayed before the label.
   */
  'label-leading': () => unknown
  /**
   * Content to be displayed on the right side of the label.
   */
  'label-right': () => unknown
  /**
   * Content to be displayed after the label.
   */
  'label-trailing': () => unknown
}

export interface FormFieldSlots extends FormFieldLabelSlots {
  default: () => unknown
}
