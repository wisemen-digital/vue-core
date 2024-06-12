export enum ComponentName {
  BADGE = 'Badge',
  BREADCRUMBS = 'Breadcrumbs',
  BUTTON = 'Button',
  CHECKBOX = 'Checkbox',
  COMBOBOX = 'Combobox',
  COMMAND = 'Command',
  COMPOSABLES = 'Composables',
  CONFIG_PACKAGES = 'GlobalPackages',
  CONFIG_TAILWIND = 'TailwindConfig',
  CONTAINER = 'Container',
  DIALOG = 'Dialog',
  DROPDOWN_MENU = 'DropdownMenu',
  FORM = 'Form',
  ICON = 'Icon',
  INPUT = 'Input',
  KEYBOARD = 'Keyboard',
  LIB = 'Lib',
  LOADER = 'Loader',
  POPOVER = 'Popover',
  RADIO_GROUP = 'RadioGroup',
  ROVING_FOCUS = 'RovingFocus',
  SELECT = 'Select',
  SKELETON_LOADER = 'SkeletonLoader',
  STYLES = 'Styles',
  SWITCH = 'Switch',
  TABLE = 'Table',
  TABS = 'Tabs',
  TAGS_INPUT = 'TagsInput',
  TEXT = 'Text',
  TEXTAREA = 'Textarea',
  TOAST = 'Toast',
  TOGGLE = 'Toggle',
  TOOLTIP = 'Tooltip',
  TRANSITIONS = 'Transitions',
  TYPES = 'Types',
  UTILS = 'Utils',
}

export enum ComponentType {
  COMPONENTS = 'components',
  COMPOSABLES = 'composables',
  CONFIG = 'config',
  ICONS = 'icons',
  LIBS = 'libs',
  STYLES = 'styles',
  TYPES = 'types',
  UTILS = 'utils',
}

export interface ComponentFile {
  path: string
  type: ComponentType
}

export interface Component {
  dependencies?: string[]
  files: ComponentFile[]
  internalDependencies?: ComponentName[]
  component: ComponentName
}

export function getComponentTypeFolder(component: ComponentType): string {
  switch (component) {
    case ComponentType.COMPONENTS:
      return '/src/components'
    case ComponentType.COMPOSABLES:
      return '/src/composables'
    case ComponentType.CONFIG:
      return '/'
    case ComponentType.ICONS:
      return '/src/icons'
    case ComponentType.STYLES:
      return '/src/styles'
    case ComponentType.TYPES:
      return '/src/types'
    case ComponentType.UTILS:
      return '/src/utils'
    case ComponentType.LIBS:
      return '/src/libs'
  }
}
