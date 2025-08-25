import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const createPlanningStyle = tv({
  base: 'flex h-full max-h-full flex-col',
})

export const createPlanningContainerStyle = tv({
  base: `
    flex min-h-0 w-full flex-1 flex-col rounded-xl border border-solid
    border-gray-200
  `,
})

export const createPlanningScrollableBodyStyle = tv({
  base: 'relative min-h-0 flex-1 overflow-auto rounded-b-xl',
})

export const createPlanningGridStyle = tv({
  base: 'relative flex min-h-full flex-1 overflow-x-auto',
})

export const createPlanningHourLabelsStyle = tv({
  base: `
    relative flex w-16 flex-col rounded-bl-xl border-t border-solid
    border-gray-200 bg-white
  `,
})

export const createPlanningContentStyle = tv({
  base: 'relative flex min-h-full flex-1 overflow-hidden rounded-br-xl bg-white',
})

export const createPlanningItemStyle = tv({
  base: `
    absolute right-0 left-0 rounded border border-solid p-1 text-xs
    transition-all duration-200
  `,
  compoundVariants: [
    {
      class: 'hover:scale-[1.02] hover:shadow-lg',
      clickable: true,
      draggable: true,
    },
    {
      class: 'hover:scale-105',
      dragging: true,
    },
  ],
  defaultVariants: {
    clickable: false,
    draggable: false,
    dragging: false,
    selected: false,
  },
  variants: {
    clickable: {
      false: '',
      true: `
        cursor-pointer
        hover:scale-[1.02] hover:shadow-md
      `,
    },
    draggable: {
      false: '',
      true: `
        cursor-grab
        hover:shadow-lg
        active:cursor-grabbing
      `,
    },
    dragging: {
      false: '',
      true: 'z-50 scale-105 cursor-grabbing opacity-70 shadow-xl',
    },
    selected: {
      false: '',
      true: 'ring-2 ring-blue-500/75',
    },
  },
})

export type PlanningItemStyleProps = VariantProps<typeof createPlanningItemStyle>
