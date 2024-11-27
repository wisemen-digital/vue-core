import type { CountryCode } from 'libphonenumber-js'

import type { TextFieldProps } from '@/components/input-field/text-field/textField.props'

export interface PhoneNumberFieldProps extends Omit<TextFieldProps, 'type'> {
  /**
   * The default country code of the phone number.
   * @default 'BE'
   */
  defaultCountryCode?: CountryCode
}
