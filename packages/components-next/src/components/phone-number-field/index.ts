import type { PhoneNumberFieldProps } from '@/components/phone-number-field/phoneNumberField.props'

export type VcPhoneNumberFieldProps = Omit<PhoneNumberFieldProps, 'classConfig' | 'size' | 'variant'>
export { default as VcPhoneNumberField } from '@/components/phone-number-field/PhoneNumberField.vue'
