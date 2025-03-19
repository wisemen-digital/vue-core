import { tv, type VariantProps } from '@/libs/twVariants.lib'

export const createSelectStyle = tv({
  slots: {
    group: '',
    groupLabel: '',
    iconLeft: 'size-4 text-tertiary shrink-0 ml-lg',
    iconRight: ' size-4 text-tertiary shrink-0 mr-lg',
    item: 'duration-200 text-sm data-[highlighted]:bg-secondary-hover data-[highlighted]:data-[state=checked]:brightness-98 hover:bg-secondary-hover data-[state=checked]:bg-secondary outline-none p-sm rounded-md',
    loader: '',
    root: 'relative border border-solid border-primary h-10 rounded-md overflow-hidden flex items-center focus-within:ring focus-within:border-brand ring-brand-500 duration-200',
    separator: '',
  },
})

export type SelectStyle = VariantProps<typeof createSelectStyle>
export type CreateSelectStyle = ReturnType<typeof createSelectStyle>
