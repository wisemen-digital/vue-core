import { tv, type VariantProps } from '@/libs/twVariants.lib'

export const createSelectStyle = tv({
  slots: {
    iconLeft: '',
    iconRight: '',
    item: 'text-sm data-[highlighted]:bg-primary-hover hover:bg-primary-hover data-[state=checked]:bg-brand-primary outline-none p-sm',
    loader: '',
    root: 'relative border border-solid border-primary h-10 rounded-md overflow-hidden',
  },
})

export type SelectStyle = VariantProps<typeof createSelectStyle>
export type CreateSelectStyle = ReturnType<typeof createSelectStyle>
