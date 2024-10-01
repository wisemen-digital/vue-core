import {
  createTailwindMerge,
  getDefaultConfig,
  mergeConfigs,
} from 'tailwind-merge'

export const extendedConfig = {
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'subtext',
            'caption',
            'hero',
            'title',
            'subtitle',
            'heading',
            'body',
            'text-field-font-size-default',
            'input-field-hint-font-size-default',
            'button-font-size-default',
            'input-field-label-font-size-default',
            'input-field-error-font-size-default',
          ],
        },
      ],
    },
  },
}

export const config = mergeConfigs(getDefaultConfig(), extendedConfig)

export const twMerge = createTailwindMerge(() => config)
