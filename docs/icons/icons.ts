import { extendIcons } from '@wisemen/vue-core'
import type { Component } from 'vue'

export const icons = {
  alertCircle: import('@docs/icons/AlertCircleIcon.vue'),
  arrowDown: import('@docs/icons/ArrowDownIcon.vue'),
  arrowLeft: import('@docs/icons/ArrowLeftIcon.vue'),
  arrowRight: import('@docs/icons/ArrowRightIcon.vue'),
  arrowUp: import('@docs/icons/ArrowUpIcon.vue'),
  arrowUpDown: import('@docs/icons/ArrowUpDownIcon.vue'),
  checkmark: import('@docs/icons/CheckmarkIcon.vue'),
  checkmarkCircle: import('@docs/icons/CheckmarkCircleIcon.vue'),
  chevronDown: import('@docs/icons/ChevronDownIcon.vue'),
  chevronLeft: import('@docs/icons/ChevronLeftIcon.vue'),
  chevronRight: import('@docs/icons/ChevronRightIcon.vue'),
  chevronUp: import('@docs/icons/ChevronUpIcon.vue'),
  close: import('@docs/icons/CloseIcon.vue'),
  eye: import('@docs/icons/EyeIcon.vue'),
  eyeSlash: import('@docs/icons/EyeSlashIcon.vue'),
  minus: import('@docs/icons/MinusIcon.vue'),
  search: import('@docs/icons/SearchIcon.vue'),
  warning: import('@docs/icons/WarningIcon.vue'),
} satisfies Record<string, Component>

extendIcons(icons)

type CustomIcons = {
  [K in keyof typeof icons]: Component
}

declare module '@wisemen/vue-core' {
  interface Icons extends CustomIcons {}
}
