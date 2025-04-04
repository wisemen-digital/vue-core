import type { Component } from 'vue'

export interface BaseIcons {

  calendarIcon: Component
  check: Component
  chevronLeft: Component
  chevronLeftDouble: Component
  chevronRight: Component
  chevronRightDouble: Component
  close: Component
  eye: Component
  eyeOff: Component
  minus: Component
  plus: Component
  search: Component
  selectIconRight: Component
  stars: Component
  translate: Component
}

export interface Icons extends BaseIcons {}

export const icons: BaseIcons = {
  calendarIcon: import('@/icons/CalendarIcon.vue'),
  check: import('@/icons/CheckIcon.vue'),
  chevronLeft: import('@/icons/ChevronLeftIcon.vue'),
  chevronLeftDouble: import('@/icons/ChevronLeftDoubleIcon.vue'),
  chevronRight: import('@/icons/ChevronRightIcon.vue'),
  chevronRightDouble: import('@/icons/ChevronRightDoubleIcon.vue'),
  close: import('@/icons/CloseIcon.vue'),
  eye: import('@/icons/EyeIcon.vue'),
  eyeOff: import('@/icons/EyeOffIcon.vue'),
  minus: import('@/icons/MinusIcon.vue'),
  plus: import('@/icons/PlusIcon.vue'),
  search: import('@/icons/SearchIcon.vue'),
  selectIconRight: import('@/icons/SelectIconRight.vue'),
  stars: import('@/icons/StarsIcon.vue'),
  translate: import('@/icons/TranslateIcon.vue'),
}

export function extendIcons(customIcons: Omit<Icons, keyof BaseIcons>): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof Icons
