import type { Config } from 'tailwindcss'

import { buttonTailwindConfig } from './src/components/button/button.tailwind'
import { iconButtonTailwindConfig } from './src/components/button/iconButton.tailwind'
import { iconTailwindConfig } from './src/components/icon/icon.tailwind'
import { inputFieldErrorTailwindConfig } from './src/components/input-field-error/inputFieldError.tailwind'
import { inputFieldHintTailwindConfig } from './src/components/input-field-hint/inputFieldHint.tailwind'
import { inputFieldLabelTailwindConfig } from './src/components/input-field-label/inputFieldLabel.tailwind'
import { selectTailwindConfig } from './src/components/select/select.tailwind'
import { textFieldTailwindConfig } from './src/components/text-field/textField.tailwind'

export default {
  content: [
    './src/**/*.{vue,ts}',
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundColor: {
        ...buttonTailwindConfig.backgroundColor,
        ...textFieldTailwindConfig.backgroundColor,
        ...selectTailwindConfig.backgroundColor,
      },
      borderColor: {
        ...buttonTailwindConfig.borderColor,
        ...textFieldTailwindConfig.borderColor,
        ...selectTailwindConfig.borderColor,
      },
      borderRadius: {
        ...buttonTailwindConfig.borderRadius,
        ...textFieldTailwindConfig.borderRadius,
        ...selectTailwindConfig.borderRadius,
      },
      boxShadow: {
        ...buttonTailwindConfig.boxShadow,
        ...textFieldTailwindConfig.boxShadow,
        ...selectTailwindConfig.boxShadow,
      },
      fontSize: {
        ...buttonTailwindConfig.fontSize,
        ...textFieldTailwindConfig.fontSize,
        ...inputFieldHintTailwindConfig.fontSize,
        ...inputFieldLabelTailwindConfig.fontSize,
        ...inputFieldErrorTailwindConfig.fontSize,
        ...selectTailwindConfig.fontSize,
      },
      fontWeight: {
        ...buttonTailwindConfig.fontWeight,
        ...textFieldTailwindConfig.fontWeight,
        ...inputFieldHintTailwindConfig.fontWeight,
        ...inputFieldLabelTailwindConfig.fontWeight,
        ...inputFieldErrorTailwindConfig.fontWeight,
        ...selectTailwindConfig.fontWeight,
      },
      height: {
        ...buttonTailwindConfig.height,
        ...iconTailwindConfig.height,
        ...iconButtonTailwindConfig.height,
        ...textFieldTailwindConfig.height,
        ...selectTailwindConfig.height,
      },
      margin: {
        ...buttonTailwindConfig.margin,
        ...textFieldTailwindConfig.margin,
        ...inputFieldHintTailwindConfig.margin,
        ...inputFieldLabelTailwindConfig.margin,
        ...inputFieldErrorTailwindConfig.margin,
        ...selectTailwindConfig.margin,
      },
      maxWidth: {
        ...selectTailwindConfig.maxWidth,
      },
      padding: {
        ...buttonTailwindConfig.padding,
        ...textFieldTailwindConfig.padding,
        ...selectTailwindConfig.padding,
      },
      ringColor: {
        ...buttonTailwindConfig.ringColor,
        ...textFieldTailwindConfig.ringColor,
        ...selectTailwindConfig.ringColor,
      },
      textColor: {
        ...buttonTailwindConfig.textColor,
        ...iconTailwindConfig.textColor,
        ...textFieldTailwindConfig.textColor,
        ...inputFieldHintTailwindConfig.textColor,
        ...inputFieldLabelTailwindConfig.textColor,
        ...inputFieldErrorTailwindConfig.textColor,
        ...selectTailwindConfig.textColor,
      },
      width: {
        ...buttonTailwindConfig.width,
        ...iconTailwindConfig.width,
        ...iconButtonTailwindConfig.width,
        ...textFieldTailwindConfig.width,
        ...selectTailwindConfig.width,
      },
      zIndex: {
        popover: '50',
      },
    },
  },
} satisfies Config
