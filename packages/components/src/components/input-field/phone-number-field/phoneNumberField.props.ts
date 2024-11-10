import type { CountryCode } from 'libphonenumber-js'

import type { AppTextFieldProps } from '@/components/input-field/text-field/textField.props'

export interface AppPhoneNumberFieldProps extends Omit<AppTextFieldProps, 'type'> {
  /**
   * The default country code of the phone number.
   * @default 'BE'
   */
  defaultCountryCode?: CountryCode
}
