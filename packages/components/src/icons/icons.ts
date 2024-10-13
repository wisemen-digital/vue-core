import type { Component } from 'vue'

export interface BaseIcons {
  arrowDown: Promise<Component>
  arrowLeft: Promise<Component>
  arrowRight: Promise<Component>
  arrowUp: Promise<Component>
  check: Promise<Component>
  chevronDown: Promise<Component>
  chevronLeft: Promise<Component>
  chevronLeftDouble: Promise<Component>
  chevronRight: Promise<Component>
  chevronRightDouble: Promise<Component>
  chevronSelectorVertical: Promise<Component>
  chevronUp: Promise<Component>
  eye: Promise<Component>
  eyeOff: Promise<Component>
  minus: Promise<Component>
  searchLg: Promise<Component>
  switchVertical: Promise<Component>
  tool02: Promise<Component>
  translate01: Promise<Component>
  xClose: Promise<Component>
}

export interface Icons extends BaseIcons {}

export const icons: BaseIcons = {
  arrowDown: import('@/icons/ArrowDownIcon.vue'),
  arrowLeft: import('@/icons/ArrowLeftIcon.vue'),
  arrowRight: import('@/icons/ArrowRightIcon.vue'),
  arrowUp: import('@/icons/ArrowUpIcon.vue'),
  check: import('@/icons/CheckIcon.vue'),
  chevronDown: import('@/icons/ChevronDownIcon.vue'),
  chevronLeft: import('@/icons/ChevronLeftIcon.vue'),
  chevronLeftDouble: import('@/icons/ChevronLeftDoubleIcon.vue'),
  chevronRight: import('@/icons/ChevronRightIcon.vue'),
  chevronRightDouble: import('@/icons/ChevronRightDoubleIcon.vue'),
  chevronSelectorVertical: import('@/icons/ChevronSelectorVerticalIcon.vue'),
  chevronUp: import('@/icons/ChevronUpIcon.vue'),
  eye: import('@/icons/EyeIcon.vue'),
  eyeOff: import('@/icons/EyeOffIcon.vue'),
  minus: import('@/icons/MinusIcon.vue'),
  searchLg: import('@/icons/SearchLgIcon.vue'),
  switchVertical: import('@/icons/SwitchVerticalIcon.vue'),
  tool02: import('@/icons/Tool02Icon.vue'),
  translate01: import('@/icons/Translate01Icon.vue'),
  xClose: import('@/icons/XCloseIcon.vue'),
}

export function extendIcons(customIcons: Omit<Icons, keyof BaseIcons>): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof Icons
