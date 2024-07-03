import { tv, type VariantProps } from '@/libs/twVariants.lib'

export const useTextStyle = tv({
  defaultVariants: {
    variant: 'body',
  },
  slots: {
    text: '',
  },
  variants: {
    variant: {
      title: {
        text: 'text-title font-semibold',
      },
      body: {
        text: 'text-body',
      },
      caption: {
        text: 'text-caption',
      },
      heading: {
        text: 'text-heading',
      },
      hero: {
        text: 'text-hero font-bold',
      },
      subtext: {
        text: 'text-subtext',
      },
      subtitle: {
        text: 'text-subtitle',
      },
    },
  },
})

export type TextStyleProps = VariantProps<typeof useTextStyle>
