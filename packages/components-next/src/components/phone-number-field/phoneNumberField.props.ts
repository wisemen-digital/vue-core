import type { CountryCode } from 'libphonenumber-js'

import type { TextFieldProps } from '@/components/text-field/textField.props'

export interface PhoneNumberFieldProps extends Omit<TextFieldProps, 'isSpellcheckEnabled' | 'type'> {
  /**
   * The default country code to use.
   * @default 'BE'
   */
  defaultCountryCode?: CountryCode
}
