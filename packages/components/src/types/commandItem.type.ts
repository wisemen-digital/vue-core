import type { Icon } from '../icons/icons'
import type { AcceptableValue } from './selectItem.type'

export interface CommandOption {
  icon?: Icon
  image?: string
  label: string
  value: AcceptableValue
}

export type CommandItem = CommandOption
