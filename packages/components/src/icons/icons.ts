import type { Component } from 'vue'

export interface BaseIcons {
  alertCircle: Promise<Component>
  arrowDown: Promise<Component>
  arrowLeft: Promise<Component>
  arrowRight: Promise<Component>
  arrowUp: Promise<Component>
  check: Promise<Component>
  checkboxIndicator: Promise<Component>
  chevronDown: Promise<Component>
  chevronLeft: Promise<Component>
  chevronLeftDouble: Promise<Component>
  chevronRight: Promise<Component>
  chevronRightDouble: Promise<Component>
  chevronUp: Promise<Component>
  close: Promise<Component>
  dateFieldIconRight: Promise<Component>
  eye: Promise<Component>
  eyeOff: Promise<Component>
  filter: Promise<Component>
  infoCircle: Promise<Component>
  minus: Promise<Component>
  passwordFieldEye: Promise<Component>
  passwordFieldEyeOff: Promise<Component>
  plus: Promise<Component>
  search: Promise<Component>
  selectIconRight: Promise<Component>
  settings: Promise<Component>
  switchVertical: Promise<Component>
  tableNoData: Promise<Component>
  translate: Promise<Component>
  trash: Promise<Component>
}

export interface Icons extends BaseIcons {}

export const icons: BaseIcons = {
  alertCircle: import('@/icons/AlertCircleIcon.vue'),
  arrowDown: import('@/icons/ArrowDownIcon.vue'),
  arrowLeft: import('@/icons/ArrowLeftIcon.vue'),
  arrowRight: import('@/icons/ArrowRightIcon.vue'),
  arrowUp: import('@/icons/ArrowUpIcon.vue'),
  check: import('@/icons/CheckIcon.vue'),
  checkboxIndicator: import('@/icons/functional/CheckboxIndicator.vue'),
  chevronDown: import('@/icons/ChevronDownIcon.vue'),
  chevronLeft: import('@/icons/ChevronLeftIcon.vue'),
  chevronLeftDouble: import('@/icons/ChevronLeftDoubleIcon.vue'),
  chevronRight: import('@/icons/ChevronRightIcon.vue'),
  chevronRightDouble: import('@/icons/ChevronRightDoubleIcon.vue'),
  chevronUp: import('@/icons/ChevronUpIcon.vue'),
  close: import('@/icons/CloseIcon.vue'),
  dateFieldIconRight: import('@/icons/functional/DateFieldIconRight.vue'),
  eye: import('@/icons/EyeIcon.vue'),
  eyeOff: import('@/icons/EyeOffIcon.vue'),
  filter: import('@/icons/FilterIcon.vue'),
  infoCircle: import('@/icons/InfoCircleIcon.vue'),
  minus: import('@/icons/MinusIcon.vue'),
  passwordFieldEye: import('@/icons/functional/PasswordFieldEye.vue'),
  passwordFieldEyeOff: import('@/icons/functional/PasswordFieldEyeOff.vue'),
  plus: import('@/icons/PlusIcon.vue'),
  search: import('@/icons/SearchIcon.vue'),
  selectIconRight: import('@/icons/functional/SelectIconRight.vue'),
  settings: import('@/icons/SettingsIcon.vue'),
  switchVertical: import('@/icons/SwitchVerticalIcon.vue'),
  tableNoData: import('@/icons/functional/TableNoData.vue'),
  translate: import('@/icons/TranslateIcon.vue'),
  trash: import('@/icons/TrashIcon.vue'),
}

export function extendIcons(customIcons: Omit<Icons, keyof BaseIcons>): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof Icons
