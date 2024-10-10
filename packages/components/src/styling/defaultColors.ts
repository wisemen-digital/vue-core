const primary = '#007bff'
const primaryHover = '#0056b3'
const primaryFocus = '#0056b3'
const primaryActive = '#0056b3'
const primaryDisabled = '#007bff'
const primaryForeground = '#ffffff'

const error = '#dc3545'
const success = '#28a745'
const warning = '#ffc107'

export const lightThemeColors = {
  error,
  inputFieldBgColorDefault: '#ffffff',
  inputFieldBgColorDisabled: '#fbfbfb',
  inputFieldBorderColorDefault: '#d0d5dd',
  inputFieldBorderColorDisabled: '#eee',
  inputFieldBorderColorFocus: primaryFocus,
  inputFieldBorderColorHover: primaryHover,
  inputFieldHintTextColorDefault: '#3d4658',
  inputFieldHinttextColorDisabled: '#3d4658',
  inputFieldLabelTextColorDefault: '#3d4658',
  inputFieldLabelTextColorDisabled: '#3d4658',
  inputFieldPlaceholderColorDefault: '#c6c6c6',
  inputFieldPlaceholderColorDisabled: '#dedede',
  inputFieldRingColorError: `${error}70`,
  inputFieldRingColorFocus: `${primary}70`,
  inputFieldTextColorDefault: '#101828',
  inputFieldTextColorDisabled: '#e9e9e9',
  primary,
  primaryForeground,
  success,
  warning,
} as const
