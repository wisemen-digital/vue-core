import type { Component } from 'vue'

export interface BaseIcons {

  check: Component
  chevronLeft: Component
  chevronLeftDouble: Component
  chevronRight: Component
  chevronRightDouble: Component
  close: Component
  plus: Component
  search: Component
  selectIconRight: Component
  stars: Component
}

export interface Icons extends BaseIcons {}

export const icons: BaseIcons = {
  check: import('@/icons/CheckIcon.vue'),
  chevronLeft: import('@/icons/ChevronLeftIcon.vue'),
  chevronLeftDouble: import('@/icons/ChevronLeftDoubleIcon.vue'),
  chevronRight: import('@/icons/ChevronRightIcon.vue'),
  chevronRightDouble: import('@/icons/ChevronRightDoubleIcon.vue'),
  close: import('@/icons/CloseIcon.vue'),
  plus: import('@/icons/PlusIcon.vue'),
  search: import('@/icons/SearchIcon.vue'),
  selectIconRight: import('@/icons/SelectIconRight.vue'),
  stars: import('@/icons/StarsIcon.vue'),
}

export function extendIcons(customIcons: Omit<Icons, keyof BaseIcons>): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof Icons
