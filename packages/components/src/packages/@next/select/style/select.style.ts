import { tv, type VariantProps } from '@/libs/twVariants.lib'

export const createSelectStyle = tv({
  slots: {
    iconLeft: 'size-4 text-tertiary shrink-0 ml-lg',
    iconRight: ' size-4 text-tertiary shrink-0 mr-lg',
    item: 'text-sm data-[highlighted]:bg-primary-hover hover:bg-primary-hover data-[state=checked]:bg-brand-primary outline-none p-sm rounded-md',
    loader: '',
    root: 'relative border border-solid border-primary h-10 rounded-md overflow-hidden flex items-center focus-within:ring focus-within:border-brand ring-brand-500 duration-200',
  },
})

export type SelectStyle = VariantProps<typeof createSelectStyle>
export type CreateSelectStyle = ReturnType<typeof createSelectStyle>
