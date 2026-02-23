import { tv } from '@/styles/tailwindVariants.lib'

export const createBaseRadioGroupStyle = tv({
  slots: {
    control: `
      relative mt-px flex size-4 items-center justify-center overflow-hidden
      rounded-full border border-solid border-primary outline-2 outline-offset-1
      outline-transparent duration-300
      group-focus-visible/radio-group-item:outline-brand-600
      group-disabled/radio-group-item:bg-disabled-subtle
      group-focus-visible/radio-group-item:group-data-invalid/radio-group-item:outline-error-600
      group-data-[state=checked]/radio-group-item:border-brand-600
      group-data-[state=checked]/radio-group-item:bg-brand-solid
      group-data-[state=checked]/radio-group-item:group-disabled/radio-group-item:border-disabled
      group-disabled/radio-group-item:group-data-[state=checked]/radio-group-item:bg-disabled-subtle
      group-data-invalid/radio-group-item:group-data-[state=checked]/radio-group-item:border-error
      group-data-invalid/radio-group-item:group-data-[state=checked]/radio-group-item:bg-error-solid
      group-data-invalid/radio-group-item:group-data-[state=unchecked]/radio-group-item:border-error
      disabled:border-disabled
    `,
    indicator: `
      block size-1.5 rounded-full bg-white
      group-data-disabled/radio-group-item:bg-fg-disabled-subtle
    `,
    root: `
      group/radio-group-item flex cursor-pointer items-center justify-start
      outline-none
      disabled:cursor-not-allowed
    `,
  },
})

export type BaseRadioGroupStyle = ReturnType<typeof createBaseRadioGroupStyle>
