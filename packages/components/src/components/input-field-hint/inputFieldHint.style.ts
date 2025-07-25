import { tv } from '@/libs/twVariants.lib'

export const inputFieldHintStyle = tv({
  slots: {
    hint: `
      block pt-(--input-field-hint-spacing-default)
      text-(length:--input-field-hint-font-size-default)
      text-(color:--input-field-hint-text-color-default)
      duration-200
    `,
  },
})
