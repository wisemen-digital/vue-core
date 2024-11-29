import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useTagStyle = tv({
  slots: {
    tagBox: new StyleBuilder()
      .withClasses('inline-flex items-center duration-200')
      .withBorderRadius('rounded-(--tag-border-radius-default)')
      .withBorder('border border-solid border-(--tag-border-color-default)')
      .withBackgroundColor('bg-(--tag-bg-color-default)')
      .withPadding('px-(--tag-padding-x-default) py-(--tag-padding-y-default)')
      .build(),
    tagContent: new StyleBuilder()
      .withClasses('duration-200')
      .withFontSize('text-(size:--tag-font-size-default)')
      .withColor('text-(color:--tag-text-color-default)')
      .withFontWeight('font-(--tag-font-weight-default)')
      .build(),
  },
  variants: {
    isDisabled: {
      true: {
        tagBox: new StyleBuilder()
          .withColor('cursor-not-allowed')
          .withBorder('border-(--tag-border-color-disabled)')
          .withBackgroundColor('bg-(--tag-bg-color-disabled)')
          .withColor('text-(color:--tag-text-color-disabled)')
          .build(),
        tagContent: new StyleBuilder()
          .withColor('text-(color:--tag-text-color-disabled)')
          .build(),
      },
    },
  },
})
