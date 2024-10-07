import type { Component } from 'vue'

export interface BaseIcons {
  check: Promise<Component>
  chevronDown: Promise<Component>
  chevronLeft: Promise<Component>
  chevronRight: Promise<Component>
  chevronSelectorVertical: Promise<Component>
  chevronUp: Promise<Component>
  eye: Promise<Component>
  eyeOff: Promise<Component>
  searchLg: Promise<Component>
  tool02: Promise<Component>
  translate01: Promise<Component>
}

export interface Icons extends BaseIcons {}

export const icons: BaseIcons = {
  check: import('@/icons/CheckIcon.vue'),
  chevronDown: import('@/icons/ChevronDownIcon.vue'),
  chevronLeft: import('@/icons/ChevronLeftIcon.vue'),
  chevronRight: import('@/icons/ChevronRightIcon.vue'),
  chevronSelectorVertical: import('@/icons/ChevronSelectorVerticalIcon.vue'),
  chevronUp: import('@/icons/ChevronUpIcon.vue'),
  eye: import('@/icons/EyeIcon.vue'),
  eyeOff: import('@/icons/EyeOffIcon.vue'),
  searchLg: import('@/icons/SearchLgIcon.vue'),
  tool02: import('@/icons/Tool02Icon.vue'),
  translate01: import('@/icons/Translate01Icon.vue'),
}

export function extendIcons(customIcons: Omit<Icons, keyof BaseIcons>): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof Icons
