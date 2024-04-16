import type { Component } from 'vue'

export interface BaseIcons {
  alertCircle: Promise<Component>
  arrowDown: Promise<Component>
  arrowLeft: Promise<Component>
  arrowRight: Promise<Component>
  arrowUp: Promise<Component>
  arrowUpDown: Promise<Component>
  checkmark: Promise<Component>
  checkmarkCircle: Promise<Component>
  chevronDown: Promise<Component>
  chevronLeft: Promise<Component>
  chevronRight: Promise<Component>
  chevronUp: Promise<Component>
  close: Promise<Component>
  eye: Promise<Component>
  eyeSlash: Promise<Component>
  minus: Promise<Component>
  search: Promise<Component>
  warning: Promise<Component>
}

export interface Icons {}

export type AllIcons = BaseIcons & Icons

export const icons: AllIcons = {
  alertCircle: import('./AlertCircleIcon.vue'),
  arrowDown: import('./ArrowDownIcon.vue'),
  arrowLeft: import('./ArrowLeftIcon.vue'),
  arrowRight: import('./ArrowRightIcon.vue'),
  arrowUp: import('./ArrowUpIcon.vue'),
  arrowUpDown: import('./ArrowUpDownIcon.vue'),
  checkmark: import('./CheckmarkIcon.vue'),
  checkmarkCircle: import('./CheckmarkCircleIcon.vue'),
  chevronDown: import('./ChevronDownIcon.vue'),
  chevronLeft: import('./ChevronLeftIcon.vue'),
  chevronRight: import('./ChevronRightIcon.vue'),
  chevronUp: import('./ChevronUpIcon.vue'),
  close: import('./CloseIcon.vue'),
  eye: import('./EyeIcon.vue'),
  eyeSlash: import('./EyeSlashIcon.vue'),
  minus: import('./MinusIcon.vue'),
  search: import('./SearchIcon.vue'),
  warning: import('./WarningIcon.vue'),
}

export function extendIcons(customIcons: Icons): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof AllIcons
