import { tv } from '@/styles/tailwindVariants.lib'

export const createAvatarGroupAddButtonStyle = tv({
  slots: {
    icon: 'text-tertiary',
    root: `
      flex items-center justify-center rounded-full! border border-dashed
      border-primary bg-primary transition-all duration-200
      hover:bg-secondary
      active:scale-95 active:bg-secondary
    `,
  },
  variants: {
    size: {
      md: {
        icon: 'size-5',
        root: 'size-10',
      },
      sm: {
        icon: 'size-4',
        root: 'size-8',
      },
      xs: {
        icon: 'size-4',
        root: 'size-6',
      },
    },
  },
})

export type AvatarGroupAddButtonStyle = ReturnType<typeof createAvatarGroupAddButtonStyle>
