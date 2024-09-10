import type { Icon } from '@/icons/icons'
import type { KeyboardShortcut } from '@/types/keyboardShortcut.type'
import type {
  RouteLocationTyped,
  Routes,
} from '@/types/routes.type.js'

export interface NavigationItemGroup {
  items: NavigationItemOption[]
  label: string
  type: 'group'
}

export interface NavigationItemOption {
  icon: Icon
  keyboardShortcut?: KeyboardShortcut
  label: string
  to: RouteLocationTyped<keyof Routes>
  type: 'option'
}

export type NavigationItem = NavigationItemGroup | NavigationItemOption
