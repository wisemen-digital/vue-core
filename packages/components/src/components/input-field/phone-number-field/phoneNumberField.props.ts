import type { CountryCode } from 'libphonenumber-js'

import {
  type AppTextFieldProps,
  appTextFieldPropsDefaultValues,
} from '@/components/input-field/text-field/textField.props'

export interface AppPhoneNumberFieldProps extends Omit<AppTextFieldProps, 'type'> {
  /**
   * The default country code of the phone number.
   * @default 'BE'
   */
  defaultCountryCode?: CountryCode
}

// Without this vue throws a warning
const textFieldDefaultValues = {
  ...appTextFieldPropsDefaultValues,
  type: undefined,
}

delete textFieldDefaultValues.type

export const appPhoneNumberFieldPropsDefaultValues = {
  ...textFieldDefaultValues,
  defaultCountryCode: 'BE',
} satisfies Partial<AppPhoneNumberFieldProps>
