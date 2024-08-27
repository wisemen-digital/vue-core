import type { Component } from 'vue'

export interface BaseIcons {
  alertCircle: Promise<Component>
  arrowDown: Promise<Component>
  arrowLeft: Promise<Component>
  arrowRight: Promise<Component>
  arrowUp: Promise<Component>
  arrowUpDown: Promise<Component>
  calendar: Promise<Component>
  checkmark: Promise<Component>
  checkmarkCircle: Promise<Component>
  chevronDown: Promise<Component>
  chevronLeft: Promise<Component>
  chevronRight: Promise<Component>
  chevronUp: Promise<Component>
  clock: Promise<Component>
  close: Promise<Component>
  eye: Promise<Component>
  eyeSlash: Promise<Component>
  filterLines: Promise<Component>
  minus: Promise<Component>
  search: Promise<Component>
  warning: Promise<Component>
}

export interface Icons extends BaseIcons {}

export const icons: BaseIcons = {
  alertCircle: import('@/icons/AlertCircleIcon.vue'),
  arrowDown: import('@/icons/ArrowDownIcon.vue'),
  arrowLeft: import('@/icons/ArrowLeftIcon.vue'),
  arrowRight: import('@/icons/ArrowRightIcon.vue'),
  arrowUp: import('@/icons/ArrowUpIcon.vue'),
  arrowUpDown: import('@/icons/ArrowUpDownIcon.vue'),
  calendar: import('@/icons/CalendarIcon.vue'),
  checkmark: import('@/icons/CheckmarkIcon.vue'),
  checkmarkCircle: import('@/icons/CheckmarkCircleIcon.vue'),
  chevronDown: import('@/icons/ChevronDownIcon.vue'),
  chevronLeft: import('@/icons/ChevronLeftIcon.vue'),
  chevronRight: import('@/icons/ChevronRightIcon.vue'),
  chevronUp: import('@/icons/ChevronUpIcon.vue'),
  clock: import('@/icons/ClockIcon.vue'),
  close: import('@/icons/CloseIcon.vue'),
  eye: import('@/icons/EyeIcon.vue'),
  eyeSlash: import('@/icons/EyeSlashIcon.vue'),
  filterLines: import('@/icons/FilterLinesIcon.vue'),
  minus: import('@/icons/MinusIcon.vue'),
  search: import('@/icons/SearchIcon.vue'),
  warning: import('@/icons/WarningIcon.vue'),
}

export function extendIcons(customIcons: Omit<Icons, keyof BaseIcons>): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof Icons
