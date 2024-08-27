import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useStepperStyle = tv({
  slots: {
    completedIcon: 'absolute -right-1.5 -top-1 rounded-lg bg-primary p-px text-background',
    invalidIcon: 'absolute -right-1.5 -top-1 rounded-lg bg-destructive p-px text-background',
    item: 'group relative flex w-full cursor-pointer justify-center gap-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
    root: 'flex',
    separator: 'absolute block shrink-0 rounded-full bg-neutral-200 transition-colors duration-300 ease-in-out group-data-[disabled]:bg-neutral-200 group-data-[state=completed]:bg-primary/50',
    stepDescription: 'hidden truncate text-caption sm:block',
    stepTextContainer: 'absolute text-foreground transition-colors duration-300 ease-in-out group-data-[state=active]:text-primary group-data-[state=inactive]:text-muted-foreground',
    stepTitle: 'text-subtext font-medium',
    trigger: 'relative inline-flex shrink-0 items-center justify-center rounded-lg border border-solid border-gray-300 bg-background text-gray-500 transition-all duration-300 ease-in-out focus:shadow-[0_0_8px_0] focus:shadow-primary/50 focus:outline-none group-data-[disabled]:cursor-not-allowed group-data-[state=active]:border-primary group-data-[state=completed]:border-primary/50 group-data-[state=active]:bg-primary group-data-[state=active]:text-white group-data-[state=completed]:text-primary/50',
    triggerIcon: 'transform transition-transform duration-300 ease-in-out group-data-[state=active]:scale-110 group-data-[state=completed]:scale-100',
  },
  variants: {
    triggerSize: {
      default: {
        separator: 'top-4',
        trigger: 'size-8',
        triggerIcon: 'size-5',
      },
      lg: {
        separator: 'top-5',
        trigger: 'size-10',
        triggerIcon: 'size-6',
      },
      sm: {
        separator: 'top-3',
        trigger: 'size-6',
        triggerIcon: 'size-3',
      },
    },
    direction: {
      horizontal: {
        root: 'w-full flex-row gap-2 pb-12',
        separator: 'left-[calc(50%+30px)] right-[calc(-50%+20px)] h-0.5',
        stepTextContainer: 'left-0 top-full mt-2 w-full text-center',
      },
      vertical: {
        root: 'w-fit flex-col gap-10',
        separator: 'left-[calc(50%-1px)] top-[calc(50%+20px)] h-8 w-0.5',
        stepTextContainer: 'left-full top-0 ml-2 w-fit max-w-[200px] text-left',
      },
    },
  },
})

export type StepperStyleProps = VariantProps<typeof useStepperStyle>
