import type { CountryCode } from 'libphonenumber-js'

import type {
  CustomizableElement,
  GetComponentProp,
} from '@/class-variant/classVariant.type'
import type { TextFieldProps } from '@/components/text-field/textField.props'
import type { PublicProps } from '@/types/props.type'

export interface PhoneNumberFieldProps extends Omit<TextFieldProps, 'classConfig' | 'isSpellcheckEnabled' | 'type'>, CustomizableElement<'phoneNumberField'> {
  /**
   * The default country code to use.
   * @default 'BE'
   */
  defaultCountryCode?: CountryCode
  /**
   * Defines the visual style of the input.
   */
  variant?: GetComponentProp<'phoneNumberField', 'variant'> | null
}

export type PhoneNumberFieldPublicProps = PublicProps<PhoneNumberFieldProps>
