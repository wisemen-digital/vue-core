import { tv } from '@/libs/twVariants.lib'

export const tagStyle = tv({
  slots: {
    tagBox: 'inline-flex items-center rounded-tag-border-radius-default border border-solid border-tag-border-color-default bg-tag-bg-color-default px-tag-padding-x-default py-tag-padding-y-default duration-200',
    tagContent: 'text-tag-font-size-default text-tag-text-color-default duration-200',
  },
  variants: {
    isDisabled: {
      true: {
        tagBox: 'cursor-not-allowed border-tag-border-color-disabled bg-tag-bg-color-disabled text-tag-text-color-disabled',
        tagContent: 'text-tag-text-color-disabled',
      },
    },
  },
})
