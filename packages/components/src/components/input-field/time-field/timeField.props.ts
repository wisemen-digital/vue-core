import type { TextFieldProps } from '@/components/input-field/text-field/textField.props'

export interface TimeFieldProps extends Omit<TextFieldProps, 'autocomplete' | 'placeholder' | 'type'> {}
