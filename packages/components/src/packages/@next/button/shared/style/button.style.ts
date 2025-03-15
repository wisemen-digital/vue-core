import { tv, type VariantProps } from '@/libs/twVariants.lib'
import { createSharedButtonStyle } from '@/packages/@next/button/shared/style/sharedButton.style'
import { StyleBuilder } from '@/utils/style.util'

export const createButtonStyle = tv({
  extend: createSharedButtonStyle,
  slots: {
    contentContainer: '',
    iconLeft: new StyleBuilder()
      .withBase('shrink-0')
      .build(),
    iconRight: new StyleBuilder()
      .withBase('shrink-0')
      .build(),
    loader: '',
    root: new StyleBuilder()
      .withFontWeight('font-medium')
      .build(),
  },
  variants: {
    size: {
      '2xl': {
        iconLeft: new StyleBuilder()
          .withMargin('mr-md')
          .withSize('size-5')
          .build(),
        iconRight: new StyleBuilder()
          .withMargin('ml-md')
          .withSize('size-5')
          .build(),
        root: new StyleBuilder()
          .withPadding('px-5.5')
          .withFontSize('text-lg')
          .build(),
      },
      'lg': {
        iconLeft: new StyleBuilder()
          .withMargin('mr-sm')
          .withSize('size-4')
          .build(),
        iconRight: new StyleBuilder()
          .withMargin('ml-sm')
          .withSize('size-4')
          .build(),
        root: new StyleBuilder()
          .withPadding('px-xl')
          .withFontSize('text-md')
          .build(),
      },
      'md': {
        iconLeft: new StyleBuilder()
          .withMargin('mr-xs')
          .withSize('size-4')
          .build(),
        iconRight: new StyleBuilder()
          .withMargin('ml-xs')
          .withSize('size-4')
          .build(),
        root: new StyleBuilder()
          .withPadding('px-3.5')
          .withFontSize('text-sm')
          .build(),
      },
      'sm': {
        iconLeft: new StyleBuilder()
          .withMargin('mr-xs')
          .withSize('size-4')
          .build(),
        iconRight: new StyleBuilder()
          .withMargin('ml-xs')
          .withSize('size-4')
          .build(),
        root: new StyleBuilder()
          .withPadding('px-lg')
          .withFontSize('text-sm')
          .build(),
      },
      'xl': {
        iconLeft: new StyleBuilder()
          .withMargin('mr-sm')
          .withSize('size-5')
          .build(),
        iconRight: new StyleBuilder()
          .withMargin('ml-sm')
          .withSize('size-5')
          .build(),

        root: new StyleBuilder()
          .withPadding('px-4.5')
          .withFontSize('text-md')
          .build(),
      },
    },
  },
})

export type ButtonStyle = VariantProps<typeof createButtonStyle>
export type CreateButtonStyle = ReturnType<typeof createButtonStyle>
