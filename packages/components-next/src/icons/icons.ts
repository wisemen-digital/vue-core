import type { Component } from 'vue'

export interface BaseIcons {

  alertCircle: Component
  alertTriangle: Component
  arrowDown: Component
  arrowLeft: Component
  arrowRight: Component
  arrowUp: Component
  calendarIcon: Component
  check: Component
  checkCircle: Component
  chevronLeft: Component
  chevronLeftDouble: Component
  chevronRight: Component
  chevronRightDouble: Component
  close: Component
  eye: Component
  eyeOff: Component
  infoCircle: Component
  minus: Component
  plus: Component
  search: Component
  selectIconRight: Component
  stars: Component
  switchVertical: Component
  translate: Component
}

export interface Icons extends BaseIcons {}

export const icons: BaseIcons = {
  alertCircle: import('@/icons/AlertCircleIcon.vue'),
  alertTriangle: import('@/icons/AlertTriangleIcon.vue'),
  arrowDown: import('@/icons/ArrowDownIcon.vue'),
  arrowLeft: import('@/icons/ArrowLeftIcon.vue'),
  arrowRight: import('@/icons/ArrowRightIcon.vue'),
  arrowUp: import('@/icons/ArrowUpIcon.vue'),
  calendarIcon: import('@/icons/CalendarIcon.vue'),
  check: import('@/icons/CheckIcon.vue'),
  checkCircle: import('@/icons/CheckCircleIcon.vue'),
  chevronLeft: import('@/icons/ChevronLeftIcon.vue'),
  chevronLeftDouble: import('@/icons/ChevronLeftDoubleIcon.vue'),
  chevronRight: import('@/icons/ChevronRightIcon.vue'),
  chevronRightDouble: import('@/icons/ChevronRightDoubleIcon.vue'),
  close: import('@/icons/CloseIcon.vue'),
  eye: import('@/icons/EyeIcon.vue'),
  eyeOff: import('@/icons/EyeOffIcon.vue'),
  infoCircle: import('@/icons/InfoCircleIcon.vue'),
  minus: import('@/icons/MinusIcon.vue'),
  plus: import('@/icons/PlusIcon.vue'),
  search: import('@/icons/SearchIcon.vue'),
  selectIconRight: import('@/icons/SelectIconRight.vue'),
  stars: import('@/icons/StarsIcon.vue'),
  switchVertical: import('@/icons/SwitchVerticalIcon.vue'),
  translate: import('@/icons/TranslateIcon.vue'),
}

export function extendIcons(customIcons: Omit<Icons, keyof BaseIcons>): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof Icons
