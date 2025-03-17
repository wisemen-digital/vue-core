import { tv } from '@/libs/twVariants.lib'

export const inputFieldErrorStyle = tv({
  slots: {
    error: 'block duration-200 pt-(--input-field-error-spacing-default) text-(length:--input-field-error-font-size-default) font-(--input-field-error-font-weight-default) text-(color:--input-field-error-text-color-default)',
  },
})
