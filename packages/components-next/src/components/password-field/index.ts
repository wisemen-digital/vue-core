import type { PasswordFieldProps } from '@/components/password-field/passwordField.props'

export type VcPasswordFieldProps = Omit<PasswordFieldProps, 'classConfig' | 'size' | 'variant'>
export { default as VcPasswordField } from '@/components/password-field/PasswordField.vue'
