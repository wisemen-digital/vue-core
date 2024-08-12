import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useStepperStyle = tv({
  slots: {
    item: 'group relative flex w-full cursor-pointer justify-center gap-2 px-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
    root: 'flex w-full gap-2 pb-12',
    separator: 'absolute left-[calc(50%+30px)] right-[calc(-50%+20px)] block h-0.5 shrink-0 rounded-full bg-neutral-300 transition-colors duration-300 ease-in-out group-data-[disabled]:bg-neutral-300 group-data-[state=completed]:bg-primary/75',
    stepDescription: 'hidden truncate text-caption sm:block',
    stepTextContainer: 'absolute left-0 top-full mt-2 w-full text-center text-foreground transition-colors duration-300 ease-in-out group-data-[state=inactive]:text-muted-foreground',
    stepTitle: 'text-subtext font-medium',
    trigger: 'relative inline-flex shrink-0 items-center justify-center rounded-full bg-neutral-300 text-gray-400 transition-all duration-300 ease-in-out focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none group-data-[disabled]:cursor-not-allowed group-data-[state=active]:bg-primary group-data-[state=completed]:bg-primary/75 group-data-[state=active]:text-white group-data-[state=completed]:text-white',
    triggerIcon: 'transform transition-transform duration-300 ease-in-out group-data-[state=active]:scale-110 group-data-[state=completed]:scale-100',
    validationIcons: 'absolute -bottom-1 -right-1 rounded-full bg-background p-0.5 shadow-sm shadow-foreground',
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
  },
})

export type StepperStyleProps = VariantProps<typeof useStepperStyle>
