export enum ComponentName {
  APP_BUTTON = 'AppButton',
  CONFIG_PACKAGES = 'GlobalPackages',
  CONFIG_TAILWIND = 'TailwindConfig',
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
  component: ComponentName
  dependencies?: string[]
  files: ComponentFile[]
  internalDependencies?: ComponentName[]
}
