import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useProgressBarStyle = tv({
  defaultVariants: {
    percentagePosition: 'outside',
    showPercentage: false,
  },
  slots: {
    container: 'relative h-6 w-full rounded-full bg-gray-200',
    percentageInside: 'absolute inset-0 flex items-center justify-center',
    percentageOutside: 'ml-2',
    progress: 'h-full rounded-full',
  },
  variants: {
    showPercentage: {
      false: {},
      true: {},
    },
    percentagePosition: {
      inside: {
        percentageInside: 'absolute inset-0 flex items-center justify-center',
        percentageOutside: 'hidden',
      },
      outside: {
        percentageInside: 'hidden',
        percentageOutside: 'ml-2',
      },
    },
  },
})

export type ProgressBarStyleProps = VariantProps<typeof useProgressBarStyle>
