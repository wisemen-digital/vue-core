import { tv } from '@/libs/twVariants.lib'

const progressIndicatorDestructiveClasses = 'bg-destructive'
const progressIndicatorPrimaryClasses = ' bg-primary'
const progressIndicatorSecondaryClasses = ' bg-secondary'
const progressIndicatorSuccessClasses = 'bg-success'
const progressIndicatorWarnClasses = ' bg-warning'

export const useProgressBarStyle = tv({
  slots: {
    container: 'relative h-6 w-full overflow-hidden bg-muted-background',
    dynamicPercentage: 'absolute inset-0 flex w-full items-center justify-center text-center text-black',
    percentageInside: 'relative z-10 flex items-center justify-center text-center',
    percentageOutside: 'ml-2',
    progressIndicator: 'absolute left-0 top-0 transition-all',
  },
  variants: {
    color: {
      destructive: {
        progressIndicator: progressIndicatorDestructiveClasses,
      },
      primary: {
        progressIndicator: progressIndicatorPrimaryClasses,
      },
      secondary: {
        progressIndicator: progressIndicatorSecondaryClasses,
      },
      success: {
        progressIndicator: progressIndicatorSuccessClasses,
      },
      warn: {
        progressIndicator: progressIndicatorWarnClasses,
      },
    },
  },
})

export type ProgressBarStyleProps = typeof useProgressBarStyle
