import type { Config } from 'tailwindcss'

import { buttonTailwindConfig } from './src/components/button/button.tailwind'
import { iconButtonTailwindConfig } from './src/components/button/iconButton.tailwind'
import { iconTailwindConfig } from './src/components/icon/icon.tailwind'

export default {
  content: [
    './src/**/*.{vue,ts}',
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundColor: {
        ...buttonTailwindConfig.backgroundColor,
      },
      borderColor: {
        ...buttonTailwindConfig.borderColor,
      },
      borderRadius: {
        ...buttonTailwindConfig.borderRadius,
      },
      boxShadow: {
        ...buttonTailwindConfig.boxShadow,
      },
      fontSize: {
        ...buttonTailwindConfig.fontSize,
      },
      fontWeight: {
        ...buttonTailwindConfig.fontWeight,
      },
      height: {
        ...buttonTailwindConfig.height,
        ...iconTailwindConfig.height,
        ...iconButtonTailwindConfig.height,
      },
      margin: {
        ...buttonTailwindConfig.margin,
      },
      padding: {
        ...buttonTailwindConfig.padding,
      },
      ringColor: {
        ...buttonTailwindConfig.ringColor,
      },
      textColor: {
        ...buttonTailwindConfig.textColor,
        ...iconTailwindConfig.textColor,
      },
      width: {
        ...buttonTailwindConfig.width,
        ...iconTailwindConfig.width,
        ...iconButtonTailwindConfig.width,
      },
    },
  },
} satisfies Config
