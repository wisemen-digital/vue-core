import type { TextFieldProps } from '@/components/text-field/textField.props'
import type { PublicProps } from '@/types/props.type'

export interface PasswordFieldProps extends Omit<TextFieldProps, 'type'> {}

export type PasswordFieldPublicProps = PublicProps<PasswordFieldProps>
