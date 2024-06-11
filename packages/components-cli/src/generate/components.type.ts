export enum ComponentName {
  BADGE = 'Badge',
  BREADCRUMBS = 'Breadcrumbs',
  BUTTON = 'Button',
  CHECKBOX = 'Checkbox',
  COMBOBOX = 'Combobox',
  COMMAND = 'Command',
  CONFIG_PACKAGES = 'GlobalPackages',
  CONFIG_TAILWIND = 'TailwindConfig',
  CONTAINER = 'Container',
  DIALOG = 'Dialog',
  DROPDOWN_MENU = 'DropdownMenu',
  FORM_ELEMENT = 'FormElement',
  FORM_ERROR = 'FormError',
  FORM_GROUP = 'FormGroup',
  FORM_LABEL = 'FormLabel',
  ICON = 'Icon',
  INPUT = 'Input',
  KEYBOARD = 'Keyboard',
  LOADER = 'Loader',
  POPOVER = 'Popover',
  RADIO_GROUP = 'RadioGroup',
  ROVING_FOCUS = 'RovingFocus',
  SELECT = 'Select',
  SKELETON_LOADER = 'SkeletonLoader',
  SONNER = 'Sonner',
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
}

export enum ComponentType {
  COMPONENTS = 'components',
  COMPOSABLES = 'composables',
  CONFIG = 'config',
  ICONS = 'icons',
  STYLES = 'styles',
  TRANSITIONS = 'transitions',
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
