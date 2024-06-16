import type { Component, CSSProperties } from 'vue'

export type ToastTypes =
  | 'action'
  | 'default'
  | 'error'
  | 'info'
  | 'loading'
  | 'normal'
  | 'success'
  | 'warning'

export type PromiseT<Data = any> = (() => Promise<Data>) | Promise<Data>

export type PromiseExternalToast = Omit<ExternalToast, 'description'>

export type PromiseData<ToastData = any> = ExternalToast & {
  description?: ((data: any) => Component | string) | Component | string
  error?: (data: ToastData) => Component | string
  finally?: () => Promise<void> | void
  loading?: Component | string
  success?: (data: ToastData) => Component | string
}

export interface ToastClasses {
  title?: string
  action?: string
  actionButton?: string
  cancelButton?: string
  closeButton?: string
  default?: string
  description?: string
  error?: string
  info?: string
  loader?: string
  loading?: string
  normal?: string
  success?: string
  toast?: string
  warning?: string
}

export interface ToastIcons {
  error?: Component
  info?: Component
  loading?: Component
  success?: Component
  warning?: Component
}

export interface ToastT<T extends Component = Component> {
  id: number | string
  title?: Component | string
  action?: {
    label: Component | string
    onClick: (event: MouseEvent) => void
  }
  actionButtonStyle?: CSSProperties
  cancel?: {
    label: Component | string
    onClick?: () => void
  }
  cancelButtonStyle?: CSSProperties
  class?: string
  classes?: ToastClasses
  closeButton?: boolean
  componentProps?: any
  delete?: boolean
  description?: Component | string
  descriptionClass?: string
  dismissible?: boolean
  duration?: number
  icon?: Component
  important?: boolean
  invert?: boolean
  position?: Position
  promise?: PromiseT
  style?: CSSProperties
  type?: ToastTypes
  unstyled?: boolean
  component?: T
  onAutoClose?: (toast: ToastT) => void
  onDismiss?: (toast: ToastT) => void
}

export type Position =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left'
  | 'top-right'

export interface HeightT {
  toastId: number | string
  height: number
  position: Position
}

export interface ToastOptions {
  actionButtonStyle?: CSSProperties
  cancelButtonStyle?: CSSProperties
  class?: string
  classes?: ToastClasses
  closeButton?: boolean
  descriptionClass?: string
  duration?: number
  style?: CSSProperties
  unstyled?: boolean
}

export type CnFunction = (...classes: Array<string | undefined>) => string

export interface ToasterProps {
  class?: string
  closeButton?: boolean
  cn?: CnFunction
  containerAriaLabel?: string
  dir?: 'auto' | 'ltr' | 'rtl'
  duration?: number
  expand?: boolean
  gap?: number
  hotkey?: string[]
  icons?: ToastIcons
  invert?: boolean
  offset?: number | string
  pauseWhenPageIsHidden?: boolean
  position?: Position
  richColors?: boolean
  style?: CSSProperties
  theme?: Theme
  toastOptions?: ToastOptions
  visibleToasts?: number
}

export interface ToastProps {
  actionButtonStyle?: CSSProperties
  cancelButtonStyle?: CSSProperties
  class: string
  classes?: ToastClasses
  closeButton: boolean
  closeButtonAriaLabel?: string
  cn: CnFunction
  descriptionClass?: string
  duration?: number
  expandByDefault: boolean
  expanded: boolean
  gap?: number
  heights: HeightT[]
  icons?: ToastIcons
  index: number
  interacting: boolean
  invert: boolean
  loadingIcon?: Component
  pauseWhenPageIsHidden: boolean
  position: Position
  style?: CSSProperties
  toast: ToastT
  toasts: ToastT[]
  unstyled?: boolean
  visibleToasts: number
}

export enum SwipeStateTypes {
  NotSwiped = 'NotSwiped',
  SwipedBack = 'SwipedBack',
  SwipedOut = 'SwipedOut',
}

export type Theme = 'dark' | 'light' | 'system'

export interface ToastToDismiss {
  id: number | string
  dismiss: boolean
}

export type ExternalToast<T extends Component = Component> = Omit<
  ToastT<T>,
  'delete' | 'id' | 'promise' | 'title' | 'type'
> & {
  id?: number | string
}
