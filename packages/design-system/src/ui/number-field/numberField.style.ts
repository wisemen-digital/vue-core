import { tv } from '@/styles/tailwindVariants.lib'

export const createNumberFieldStyle = tv({
  slots: {
    input: `
      size-full truncate bg-transparent px-md text-xs text-primary outline-none
      placeholder:text-placeholder
      read-only:cursor-default
      not-read-only:disabled:cursor-not-allowed
      not-read-only:disabled:text-disabled
      not-read-only:disabled:placeholder:text-fg-disabled-subtle
    `,
    leftControl: `pl-xs`,
    rightControl: `pr-xs`,
  },
  variants: {
    showControls: {
      true: {
        input: 'text-center',
      },
    },
  },
})

export type NumberFieldStyle = ReturnType<typeof createNumberFieldStyle>
