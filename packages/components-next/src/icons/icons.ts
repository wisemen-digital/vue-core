import type { Component } from 'vue'

export interface BaseIcons {

  check: Component
  close: Component
  plus: Component
  search: Component
  selectIconRight: Component
}

export interface Icons extends BaseIcons {}

export const icons: BaseIcons = {
  check: import('@/icons/CheckIcon.vue'),
  close: import('@/icons/CloseIcon.vue'),
  plus: import('@/icons/PlusIcon.vue'),
  search: import('@/icons/SearchIcon.vue'),
  selectIconRight: import('@/icons/SelectIconRight.vue'),
}

export function extendIcons(customIcons: Omit<Icons, keyof BaseIcons>): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof Icons
