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
          ],
        },
      ],
    },
  },
}

export const config = mergeConfigs(getDefaultConfig(), extendedConfig)

export const twMerge = createTailwindMerge(() => config)
