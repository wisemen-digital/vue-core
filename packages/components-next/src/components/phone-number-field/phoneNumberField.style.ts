import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const createPhoneNumberFieldStyle = tv({
  slots: {
    countryFlag: 'rounded-xxs block h-3.5 w-5 shrink-0 object-cover',
    dialCode: 'text-placeholder pl-xs text-sm',
  },
  variants: { variant: {} },
})

export type PhoneNumberFieldStyle = VariantProps<typeof createPhoneNumberFieldStyle>
export type CreatePhoneNumberFieldStyle = ReturnType<typeof createPhoneNumberFieldStyle>
