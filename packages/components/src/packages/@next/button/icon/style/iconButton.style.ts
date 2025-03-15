import { tv, type VariantProps } from '@/libs/twVariants.lib'
import { createSharedButtonStyle } from '@/packages/@next/button/shared/style/sharedButton.style'
import { StyleBuilder } from '@/utils/style.util'

export const createIconButtonStyle = tv({
  extend: createSharedButtonStyle,
  slots: {
    contentContainer: '',
    icon: '',
    loader: '',
    root: '',
  },
  variants: {
    size: {
      '2xl': {
        icon: new StyleBuilder()
          .withSize('size-6')
          .build(),
      },
      'lg': {
        icon: new StyleBuilder()
          .withSize('size-5')
          .build(),
      },
      'md': {
        icon: new StyleBuilder()
          .withSize('size-5')
          .build(),
      },
      'sm': {
        icon: new StyleBuilder()
          .withSize('size-4')
          .build(),
      },
      'xl': {
        icon: new StyleBuilder()
          .withSize('size-5')
          .build(),
      },
    },
  },
})

export type IconButtonStyle = VariantProps<typeof createIconButtonStyle>
export type CreateIconButtonStyle = ReturnType<typeof createIconButtonStyle>
