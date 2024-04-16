import { extendTailwindMerge } from 'tailwind-merge'

export const twMerge = extendTailwindMerge({
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
})
