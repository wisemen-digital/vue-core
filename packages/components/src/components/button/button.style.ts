import type { TVCompoundSlots } from 'tailwind-variants'

import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

const buttonBaseClasses = 'relative flex items-center justify-center rounded-button border border-solid outline-none ring-offset-1 ring-offset-background duration-200 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50'
const buttonDefaultClasses = 'border-primary bg-primary text-primary-foreground ring-ring'
const buttonDestructiveClasses = 'border-destructive bg-destructive text-destructive-foreground focus-visible:ring-destructive'
const buttonDestructiveOutlineClasses = 'border-destructive bg-transparent text-destructive ring-destructive'
const buttonGhostClasses = 'border-transparent bg-transparent text-muted-foreground ring-ring hover:enabled:bg-muted-background focus:enabled:bg-muted-background'
const buttonInputOutlineClasses = 'border-input-border bg-transparent text-input-foreground ring-ring'
const buttonMutedClasses = 'border-muted-background bg-muted-background text-muted-foreground ring-ring'
const buttonOutlineClasses = 'border-primary bg-background text-primary ring-ring'
const buttonSecondaryClasses = 'border-transparent bg-secondary text-secondary-foreground ring-ring'
const buttonSecondaryOutlineClasses = 'border-secondary bg-transparent text-secondary ring-ring'

export const useButtonStyle = tv({
  defaultVariants: {
    isLoading: false,
    size: 'default',
    variant: 'default',
  },
  slots: {
    button: buttonBaseClasses,
    buttonContent: 'w-full',
    buttonLeftIcon: 'mr-2',
    buttonRightIcon: 'ml-2',
    iconButton: buttonBaseClasses,
    keyboardShortcut: 'ml-3 mt-px',
    loader: 'size-4',
    loaderContainer: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    unstyledButton: 'block rounded-button outline-none ring-ring ring-offset-1 ring-offset-background duration-200 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
  },
  variants: {
    size: {
      default: {
        button: 'h-10 px-4 py-2 text-sm',
        buttonLeftIcon: '!size-3.5',
        buttonRightIcon: '!size-3.5',
        iconButton: 'size-10',
      },
      lg: {
        button: 'h-11 px-8 text-base',
        buttonLeftIcon: '!size-4',
        buttonRightIcon: '!size-4',
        iconButton: 'size-12',
      },
      sm: {
        button: 'h-9 px-3 text-xs',
        buttonLeftIcon: '!size-2.5',
        buttonRightIcon: '!size-2.5',
        iconButton: 'size-8',
      },
      unset: {
        button: '',
        buttonLeftIcon: '',
        buttonRightIcon: '',
        iconButton: '',
      },
      xs: {
        button: 'h-6 px-2 text-xs',
        buttonLeftIcon: '!size-3.5',
        buttonRightIcon: '!size-3.5',
        iconButton: 'size-6',
      },
    },
    variant: {
      'default': {
        button: buttonDefaultClasses,
        iconButton: buttonDefaultClasses,
      },
      'destructive': {
        button: buttonDestructiveClasses,
        iconButton: buttonDestructiveClasses,
      },
      'destructive-outline': {
        button: buttonDestructiveOutlineClasses,
        iconButton: buttonDestructiveOutlineClasses,
      },
      'ghost': {
        button: buttonGhostClasses,
        iconButton: buttonGhostClasses,
      },
      'input-outline': {
        button: buttonInputOutlineClasses,
        iconButton: buttonInputOutlineClasses,
      },
      'muted': {
        button: buttonMutedClasses,
        iconButton: buttonMutedClasses,
      },
      'outline': {
        button: buttonOutlineClasses,
        iconButton: buttonOutlineClasses,
      },
      'secondary': {
        button: buttonSecondaryClasses,
        iconButton: buttonSecondaryClasses,
      },
      'secondary-outline': {
        button: buttonSecondaryOutlineClasses,
        iconButton: buttonSecondaryOutlineClasses,
      },
    },
    isLoading: {
      true: {
        buttonContent: 'opacity-0',
        buttonLeftIcon: 'opacity-0',
        buttonRightIcon: 'opacity-0',
        keyboardShortcut: 'opacity-0',
      },
    },
  },
})

export type ButtonStyleProps = VariantProps<typeof useButtonStyle>

type ButtonStyle = typeof useButtonStyle

export function defineButtonVariant(config: {
  name: string
  compountSlots: Omit<TVCompoundSlots<ButtonStyle['variants'], ButtonStyle['slots'], any>[number], 'className' | 'variant'>[]
  slots: Partial<typeof useButtonStyle['slots']>
}): void {
  useButtonStyle.variants.variant[config.name as keyof ButtonStyle['variants']['variant']] = config.slots as any

  useButtonStyle.compoundSlots.push(...config.compountSlots.map((compountSlot) => ({
    ...compountSlot,
    variant: config.name,
  })) as any)
}
