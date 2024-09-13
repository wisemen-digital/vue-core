export enum ComponentName {
  ACCORDION = 'Accordion',
  ADDRESS = 'Address',
  AVATAR = 'Avatar',
  BADGE = 'Badge',
  BREADCRUMBS = 'Breadcrumbs',
  BUTTON = 'Button',
  CHECKBOX = 'Checkbox',
  COMBOBOX = 'Combobox',
  COMMAND = 'Command',
  COMPOSABLES = 'Composables',
  CONFIG_GLOBAL = 'GlobalConfig',
  CONFIG_PACKAGES = 'GlobalPackages',
  CONFIG_TAILWIND = 'TailwindConfig',
  CONTAINER = 'Container',
  DATE = 'Date',
  DATE_RANGE = 'DateRange',
  DIALOG = 'Dialog',
  DROPDOWN_MENU = 'DropdownMenu',
  EDITABLE = 'Editable',
  FORM = 'Form',
  ICON = 'Icon',
  INPUT = 'Input',
  KEYBOARD = 'Keyboard',
  LIB = 'Lib',
  LOADER = 'Loader',
  PAGINATION = 'Pagination',
  POPOVER = 'Popover',
  PROGRESS_BAR = 'ProgressBar',
  RADIO_GROUP = 'RadioGroup',
  ROUTER = 'Router',
  ROVING_FOCUS = 'RovingFocus',
  SELECT = 'Select',
  SIDEBAR_NAV = 'SidebarNav',
  SKELETON_LOADER = 'SkeletonLoader',
  STEPPER = 'Stepper',
  STYLES = 'Styles',
  SWITCH = 'Switch',
  TABLE = 'Table',
  TABS = 'Tabs',
  TAGS_INPUT = 'TagsInput',
  TEXT = 'Text',
  TEXT_AREA = 'Textarea',
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
  ROOT = 'root',
  STYLES = 'styles',
  TYPES = 'types',
  UTILS = 'utils',
}

export interface ComponentFile {
  type: ComponentType
  path: string
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
    case ComponentType.ROOT:
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
    case ComponentType.CONFIG:
      return '/src/config'
  }
}
