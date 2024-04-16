import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{vue,ts}',
  ],
  plugins: [],
  theme: {
    extend: {
      borderRadius: {
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
        dialog: 'var(--radius-dialog)',
        full: 'var(--radius-full)',
        input: 'var(--radius-input)',
        popover: 'var(--radius-popover)',
        tag: 'var(--radius-tag)',
      },

      boxShadow: {
        'DEFAULT': 'var(--shadow)',
        'button-hover-shadow': 'var(--shadow-button-hover);',
        'button-shadow': 'var(--shadow-button);',
        'card-hover-shadow': 'var(--shadow-card-hover);',
        'card-shadow': 'var(--shadow-card);',
        'dialog-shadow': 'var(--shadow-dialog);',
        'keyboard-key-shadow': 'rgba(0, 0, 0, 0.027) 0px 2px 0px 0px',
        'popover-shadow': 'var(--shadow-popover);',
        'table-header': '0px 2px 3px 0px #1018281A',
        'table-shadow': '0px 1px 2px 0px #1018280F',
        'toast-shadow': '0 4px 12px #0000001a',
      },

      colors: {
        accent: {
          DEFAULT: 'rgba(var(--accent), <alpha-value>)',
          foreground: 'rgba(var(--accent-foreground), <alpha-value>)',
        },
        background: 'rgba(var(--background), <alpha-value>)',
        black: 'rgba(var(--black), <alpha-value>)',

        border: 'rgba(var(--border), <alpha-value>)',

        card: {
          DEFAULT: 'rgba(var(--card), <alpha-value>)',
          foreground: 'rgba(var(--card-foreground), <alpha-value>)',
        },

        destructive: {
          DEFAULT: 'rgba(var(--destructive), <alpha-value>)',
          foreground: 'rgba(var(--destructive-foreground), <alpha-value>)',
        },
        foreground: 'rgba(var(--foreground), <alpha-value>)',

        input: {
          DEFAULT: 'rgba(var(--input), <alpha-value>)',
          border: 'rgba(var(--input-border), <alpha-value>)',
          disabled: 'rgba(var(--input-disabled), <alpha-value>)',
          foreground: 'rgba(var(--input-foreground), <alpha-value>)',
          placeholder: 'rgba(var(--input-placeholder), <alpha-value>)',
          ring: 'rgba(var(--input-ring), <alpha-value>)',
        },

        muted: {
          DEFAULT: 'rgba(var(--muted), <alpha-value>)',
          background: 'rgba(var(--muted-background), <alpha-value>)',
          foreground: 'rgba(var(--muted-foreground), <alpha-value>)',
        },

        neutral: {
          100: 'rgba(var(--neutral-100), <alpha-value>)',
          200: 'rgba(var(--neutral-200), <alpha-value>)',
          300: 'rgba(var(--neutral-300), <alpha-value>)',
          400: 'rgba(var(--neutral-400), <alpha-value>)',
          500: 'rgba(var(--neutral-500), <alpha-value>)',
          600: 'rgba(var(--neutral-600), <alpha-value>)',
          700: 'rgba(var(--neutral-700), <alpha-value>)',
          800: 'rgba(var(--neutral-800), <alpha-value>)',
          900: 'rgba(var(--neutral-900), <alpha-value>)',
        },
        popover: {
          DEFAULT: 'rgba(var(--popover), <alpha-value>)',
          foreground: 'rgba(var(--popover-foreground), <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgba(var(--primary), <alpha-value>)',
          foreground: 'rgba(var(--primary-foreground), <alpha-value>)',
        },
        ring: 'rgba(var(--ring), <alpha-value>)',
        secondary: {
          DEFAULT: 'rgba(var(--secondary), <alpha-value>)',
          foreground: 'rgba(var(--secondary-foreground), <alpha-value>)',
        },
        success: {
          DEFAULT: 'rgba(var(--success), <alpha-value>)',
          foreground: 'rgba(var(--success-foreground), <alpha-value>)',
        },
        switch: {
          background: 'rgba(var(--switch-background), <alpha-value>)',
          foreground: 'rgba(var(--switch-foreground), <alpha-value>)',
        },
        transparent: 'transparent',

        warning: {
          DEFAULT: 'rgba(var(--warning), <alpha-value>)',
          foreground: 'rgba(var(--warning-foreground), <alpha-value>)',
        },

        white: 'rgba(var(--white), <alpha-value>)',
      },

      fontFamily: {},

      fontSize: {
        body: [
          'var(--font-size-body)',
          {
            lineHeight: 'var(--font-line-height-body)',
          },
        ],
        caption: [
          'var(--font-size-caption)',
          {
            lineHeight: 'var(--font-line-height-caption)',
          },
        ],
        heading: [
          'var(--font-size-heading)',
          {
            lineHeight: 'var(--font-line-height-heading)',
          },
        ],
        hero: [
          'var(--font-size-hero)',
          {
            lineHeight: 'var(--font-line-height-hero)',
          },
        ],
        subtext: [
          'var(--font-size-subtext)',
          {
            lineHeight: 'var(--font-line-height-subtext)',
          },
        ],
        subtitle: [
          'var(--font-size-subtitle)',
          {
            lineHeight: 'var(--font-line-height-subtitle)',
          },
        ],
        title: [
          'var(--font-size-title)',
          {
            lineHeight: 'var(--font-line-height-title)',
          },
        ],
      },

      gridTemplateColumns: {
        'table-skeleton': '1fr 4fr 2fr 1fr',
      },

      maxWidth: {
        container: '1400px',
      },

      transitionTimingFunction: {
        'dialog': 'cubic-bezier(0.22, 0.68, 0, 1.51)',
        'dialog-overlay': 'cubic-bezier(0.17, 0.67, 0.16, 0.99)',
      },

      zIndex: {
        'above-everything': '9999',
        'dialog': '40',
        'dialog-overlay': '39',
        'navbar': '30',
        'popover': '50',
      },
    },
  },
} satisfies Config
