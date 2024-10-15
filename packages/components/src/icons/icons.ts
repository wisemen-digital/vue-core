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
  linkExternal01: Promise<Component>
  minus: Promise<Component>
  moonStar: Promise<Component>
  plus: Promise<Component>
  searchLg: Promise<Component>
  settings01: Promise<Component>
  stars02: Promise<Component>
  sun: Promise<Component>
  switchVertical: Promise<Component>
  tool02: Promise<Component>
  translate01: Promise<Component>
  trash01: Promise<Component>
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
  linkExternal01: import('@/icons/LinkExternal01Icon.vue'),
  minus: import('@/icons/MinusIcon.vue'),
  moonStar: import('@/icons/MoonStarIcon.vue'),
  plus: import('@/icons/PlusIcon.vue'),
  searchLg: import('@/icons/SearchLgIcon.vue'),
  settings01: import('@/icons/Settings01Icon.vue'),
  stars02: import('@/icons/Stars02Icon.vue'),
  sun: import('@/icons/SunIcon.vue'),
  switchVertical: import('@/icons/SwitchVerticalIcon.vue'),
  tool02: import('@/icons/Tool02Icon.vue'),
  translate01: import('@/icons/Translate01Icon.vue'),
  trash01: import('@/icons/Trash01Icon.vue'),
  xClose: import('@/icons/XCloseIcon.vue'),
}

export function extendIcons(customIcons: Omit<Icons, keyof BaseIcons>): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof Icons
