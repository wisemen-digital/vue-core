import { tv } from '@/libs/twVariants.lib'

export const useProgressBarStyle = tv({
  slots: {
    container: 'relative h-6 w-full rounded-full bg-gray-200',
    percentageInside: 'absolute inset-0 flex items-center justify-center',
    percentageOutside: 'ml-2',
    progress: 'h-full rounded-full',
  },
})

export type ProgressBarStyleProps = typeof useProgressBarStyle
