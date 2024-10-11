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
          ],
        },
      ],
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
            'select-font-size-default',
            'select-option-font-size-default',
            'select-group-label-font-size-default',
            'tabs-item-font-size-default',
            'dropdown-menu-group-label-font-size-default',
            'dropdown-menu-item-font-size-default',
            'tag-font-size-default',
            'textarea-font-size-default',
          ],
        },
      ],
    },
  },
}

export const config = mergeConfigs(getDefaultConfig(), extendedConfig)

export const twMerge = createTailwindMerge(() => config)
