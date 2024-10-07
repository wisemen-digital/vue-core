// import type { AcceptableValue } from 'reka-ui'
// import type { Ref } from 'vue'

import type { Icon } from '@/icons/icons'

// export interface DropdownMenuRadioGroup {
//   items: AcceptableValue[]
//   type: 'radioGroup'
//   value: Ref<AcceptableValue>
// }

// export type DropdownMenuItem = DropdownMenuRadioGroup

export interface DropdownMenuOption {
  isDestructive?: boolean
  isDisabled?: boolean
  icon?: Icon
  label: string
  type: 'option'
  onSelect: () => void
}

export interface DropdownMenuSubMenu {
  icon?: Icon
  items: DropdownMenuItem[]
  label: string
  type: 'subMenu'
}

export type DropdownMenuItem = DropdownMenuOption | DropdownMenuSubMenu
