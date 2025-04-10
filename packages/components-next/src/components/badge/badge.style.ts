import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

export const createBadgeStyle = tv({
  slots: {
    icon: new StyleBuilder()
      .withSize('size-4')
      .build(),
    root: new StyleBuilder()
      .withBase('group/badge')
      .withFlex('flex items-center')
      .withBorder('border border-solid')
      .withBorderRadius('rounded-full')
      .withFontWeight('font-medium')
      .build(),
  },
  variants: {
    variant: {
      brand: {
        root: new StyleBuilder()
          .withBackgroundColor('bg-brand-50 dark:bg-brand-950')
          .withColor('text-brand-700 dark:text-brand-200')
          .withBorder('border-brand-200 dark:border-brand-800')
          .build(),
      },
      error: {
        root: new StyleBuilder()
          .withBackgroundColor('bg-error-50 dark:bg-error-950')
          .withColor('text-error-700 dark:text-error-200')
          .withBorder('border-error-200 dark:border-error-800')
          .build(),
      },
      success: {
        root: new StyleBuilder()
          .withBackgroundColor('bg-success-50 dark:bg-success-950')
          .withColor('text-success-700 dark:text-success-200')
          .withBorder('border-success-200 dark:border-success-800')
          .build(),
      },
      warning: {
        root: new StyleBuilder()
          .withBackgroundColor('bg-warning-50 dark:bg-warning-950')
          .withColor('text-warning-700 dark:text-warning-200')
          .withBorder('border-warning-200 dark:border-warning-800')
          .build(),
      },
    },
    size: {
      lg: {
        root: new StyleBuilder()
          .withFlex('gap-x-sm')
          .withPadding('px-lg py-xs data-icon:pl-md data-removable:pr-sm')
          .withFontSize('text-sm')
          .build(),
      },
      md: {
        root: new StyleBuilder()
          .withFlex('gap-x-sm')
          .withPadding('px-2.5 py-xxs data-icon:pl-sm data-removable:pr-sm')
          .withFontSize('text-sm')
          .build(),
      },
      sm: {
        root: new StyleBuilder()
          .withFlex('gap-x-xs')
          .withPadding('px-md data-icon:pl-xs data-removable:pr-xs')
          .withFontSize('text-xs')
          .build(),
      },
    },
  },
})

export type BadgeStyle = VariantProps<typeof createBadgeStyle>
export type CreateBadgeStyle = ReturnType<typeof createBadgeStyle>
