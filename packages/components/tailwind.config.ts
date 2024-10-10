import defu from 'defu'
import type { Config } from 'tailwindcss'

import { buttonTailwindConfig } from './src/components/button/button/button.tailwind'
import { iconButtonTailwindConfig } from './src/components/button/icon-button/iconButton.tailwind'
import { checkboxTailwindConfig } from './src/components/checkbox/checkbox.tailwind'
import { dropdownMenuTailwindConfig } from './src/components/dropdown-menu/dropdownMenu.tailwind'
import { iconTailwindConfig } from './src/components/icon/icon.tailwind'
import { textFieldTailwindConfig } from './src/components/input-field/text-field/textField.tailwind'
import { inputFieldErrorTailwindConfig } from './src/components/input-field-error/inputFieldError.tailwind'
import { inputFieldHintTailwindConfig } from './src/components/input-field-hint/inputFieldHint.tailwind'
import { inputFieldLabelTailwindConfig } from './src/components/input-field-label/inputFieldLabel.tailwind'
import { popoverTailwindConfig } from './src/components/popover/popover.tailwind'
import { selectTailwindConfig } from './src/components/select/select.tailwind'
import { tabsTailwindConfig } from './src/components/tabs/tabs.tailwind'
import { tagTailwindConfig } from './src/components/tag/tag.tailwind'
import { tooltipTailwindConfig } from './src/components/tooltip/tooltip.tailwind'

export default {
  content: [
    './src/**/*.{vue,ts}',
  ],
  plugins: [],
  theme: {
    extend: {
      // @ts-expect-error - This is not too deep stfu
      ...defu(
        tagTailwindConfig,
        buttonTailwindConfig,
        iconButtonTailwindConfig,
        iconTailwindConfig,
        textFieldTailwindConfig,
        inputFieldErrorTailwindConfig,
        inputFieldHintTailwindConfig,
        inputFieldLabelTailwindConfig,
        popoverTailwindConfig,
        selectTailwindConfig,
        tooltipTailwindConfig,
        tabsTailwindConfig,
        checkboxTailwindConfig,
        dropdownMenuTailwindConfig,
        {
          ringOffsetColor: {
            DEFAULT: 'var(--bg-primary)',
          },
        },
      ),
      zIndex: {
        'popover': '50',
        'tabs-item': '1',
      },
    },
  },
} satisfies Config
