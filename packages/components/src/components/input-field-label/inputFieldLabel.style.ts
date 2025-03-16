import { tv } from '@/libs/twVariants.lib'

export const inputFieldLabelStyle = tv({
  slots: {
    asterisk: 'text-(color:--input-field-label-asterisk-color-default)',
    label: 'block duration-200 mb-(--input-field-label-spacing-default) text-(length:--input-field-label-font-size-default) font-(--input-field-label-font-weight-default) text-(color:--input-field-label-text-color-default)',
  },
})
