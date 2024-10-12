import type { CountryCode } from 'libphonenumber-js'
import type { Locale } from 'vue-i18n'

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
  /**
   * The locale of the input. For registering locales, see: https://www.npmjs.com/package/i18n-iso-countries
   * @default 'en'
   */
  locale?: Locale
}

export const appPhoneNumberFieldPropsDefaultValues = {
  ...appTextFieldPropsDefaultValues,
  defaultCountryCode: 'BE',
  locale: 'en',
} satisfies Partial<AppPhoneNumberFieldProps>
