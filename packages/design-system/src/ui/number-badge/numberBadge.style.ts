import { tv } from 'tailwind-variants'

export const numberBadgeVariants = tv({
  compoundVariants: [
    // brand
    {
      class: {
        base: `
          border-brand-400
          dark:border-brand-600
        `,
        label: `
          text-brand-700
          dark:text-brand-300
        `,
      },
      color: 'brand',
      variant: 'outline',
    },
    {
      class: {
        base: 'border-brand-700 bg-brand-700',
        label: 'text-primary-on-brand',
      },
      color: 'brand',
      variant: 'solid',
    },
    {
      class: {
        base: `
          border-brand-200 bg-brand-25
          dark:border-brand-800 dark:bg-brand-950
        `,
        label: `
          text-brand-700
          dark:text-brand-200
        `,
      },
      color: 'brand',
      variant: 'translucent',
    },

    // error
    {
      class: {
        base: `
          border-error-400
          dark:border-error-600
        `,
        label: `
          text-error-700
          dark:text-error-300
        `,
      },
      color: 'error',
      variant: 'outline',
    },
    {
      class: {
        base: 'border-error-700 bg-error-700',
        label: 'text-white',
      },
      color: 'error',
      variant: 'solid',
    },
    {
      class: {
        base: `
          border-error-200 bg-error-25
          dark:border-error-800 dark:bg-error-950
        `,
        label: `
          text-error-700
          dark:text-error-200
        `,
      },
      color: 'error',
      variant: 'translucent',
    },

    // gray
    {
      class: {
        base: `
          border-gray-400
          dark:border-gray-600
        `,
        label: `
          text-gray-700
          dark:text-gray-300
        `,
      },
      color: 'gray',
      variant: 'outline',
    },
    {
      class: {
        base: 'border-gray-700 bg-gray-700',
        label: 'text-white',
      },
      color: 'gray',
      variant: 'solid',
    },
    {
      class: {
        base: `
          border-gray-200 bg-gray-25
          dark:border-gray-800 dark:bg-gray-950
        `,
        label: `
          text-gray-700
          dark:text-gray-300
        `,
      },
      color: 'gray',
      variant: 'translucent',
    },

    // success
    {
      class: {
        base: `
          border-success-400
          dark:border-success-600
        `,
        label: `
          text-success-700
          dark:text-success-300
        `,
      },
      color: 'success',
      variant: 'outline',
    },
    {
      class: {
        base: 'border-success-950 bg-success-950',
        label: 'text-white',
      },
      color: 'success',
      variant: 'solid',
    },
    {
      class: {
        base: `
          border-success-200 bg-success-25
          dark:border-success-800 dark:bg-success-950
        `,
        label: `
          text-success-700
          dark:text-success-200
        `,
      },
      color: 'success',
      variant: 'translucent',
    },

    // purple
    {
      class: {
        base: `
          border-purple-400
          dark:border-purple-600
        `,
        label: `
          text-purple-700
          dark:text-purple-300
        `,
      },
      color: 'purple',
      variant: 'outline',
    },
    {
      class: {
        base: 'border-purple-700 bg-purple-700',
        label: 'text-white',
      },
      color: 'purple',
      variant: 'solid',
    },
    {
      class: {
        base: `border-purple-200 bg-purple-50`,
        label: `text-purple-700`,
      },
      color: 'purple',
      variant: 'translucent',
    },

    // warning
    {
      class: {
        base: `
          border-warning-400
          dark:border-warning-600
        `,
        label: `
          text-warning-700
          dark:text-warning-300
        `,
      },
      color: 'warning',
      variant: 'outline',
    },
    {
      class: {
        base: 'border-warning-700 bg-warning-700',
        label: 'text-white',
      },
      color: 'warning',
      variant: 'solid',
    },
    {
      class: {
        base: `
          border-warning-200 bg-warning-25
          dark:border-warning-800 dark:bg-warning-950
        `,
        label: `
          text-warning-700
          dark:text-warning-200
        `,
      },
      color: 'warning',
      variant: 'translucent',
    },
  ],
  slots: {
    base: `
      inline-flex min-w-fit items-center justify-center rounded-full border
    `,
    label: 'font-medium',
  },
  variants: {
    size: {
      lg: {
        base: 'h-7 min-w-7 px-sm',
        label: 'text-xs',
      },
      md: {
        base: 'h-6 min-w-6 px-sm',
        label: 'text-xxs',
      },
      sm: {
        base: 'h-5 min-w-5 px-xs',
        label: 'text-xxs',
      },
    },

    color: {
      'blue': {},
      'blue-light': {},
      'brand': {},
      'error': {},
      'gray': {},
      'purple': {},
      'success': {},
      'warning': {},
    },

    variant: {
      outline: {
        base: 'bg-transparent',
      },
      solid: {},
      translucent: {},
    },
  },
})

export type NumberBadgeVariants = ReturnType<typeof numberBadgeVariants>
