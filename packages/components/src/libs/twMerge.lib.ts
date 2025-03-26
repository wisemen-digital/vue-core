import {
  createTailwindMerge,
  getDefaultConfig,
  mergeConfigs,
} from 'tailwind-merge'

export const extendedConfig = {
  extend: {
    classGroups: {
      'border-w': [
        {
          border: [
            'checkbox-border-width-default',
            'switch-border-width-default',
            'switch-indicator-border-width-default',
            'radio-group-item-indicator-border-width-default',
            'radio-group-item-border-width-default',
          ],
        },
      ],
    },
  },
}

export const config = mergeConfigs(getDefaultConfig(), extendedConfig)

export const twMerge = createTailwindMerge(() => config)
