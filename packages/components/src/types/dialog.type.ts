import type {
  Component,
  ComputedRef,
  Ref,
} from 'vue'

export interface DialogTriggerProps {
  'id': string
  'aria-expanded': boolean
  'aria-haspopup': 'dialog'
  'data-state': boolean
}

export type IgnoredKeys =
  | '__v_isVNode'
  | 'class'
  | 'key'
  | 'onVnodeBeforeMount'
  | 'onVnodeBeforeUnmount'
  | 'onVnodeBeforeUpdate'
  | 'onVnodeMounted'
  | 'onVnodeUnmounted'
  | 'onVnodeUpdated'
  | 'ref'
  | 'ref_for'
  | 'ref_key'
  | 'style'

type PickKeys<T extends object, TValue extends null | undefined> = NonNullable<
  { [K in keyof T]: TValue extends T[K] ? K : never }[keyof T]
>

type OptionalKeys<T extends object> = PickKeys<T, undefined>
type RequiredKeys<T extends object> = Exclude<keyof T, OptionalKeys<T>>

export interface Constructor<P = never> {
  __isFragment?: never
  __isSuspense?: never
  __isTeleport?: never
  new (...args: never[]): { $props: P }
}

export type Attrs<TComponent> = Omit<
  {
    [K in keyof TComponent]: Ref<TComponent[K]> | TComponent[K]
  },
  'isOpen'
>

export interface UseDialogOptions<TComponent extends Component> {
  /**
   * Whether the dialog should animate from the trigger
   * @default false
   */
  shouldAnimateFromTrigger?: boolean
  /**
   * The component to render. Must be a component of which the root is `AppDialog`
   */
  component: () => Promise<{ default: Constructor<TComponent> }>
}

export interface UseDialogReturnType<TComponent extends Component> {
  /**
   * Close the dialog
   */
  close: () => void
  /**
   * Open the dialog
   * @param attrs The props to pass to the dialog - optional
   */
  open: Omit<Attrs<TComponent>, 'Symbol'> extends Record<string, never>
    ? // No params because there are no attributes
      () => Promise<void>
    : // Check if there are only optional attributes
    RequiredKeys<Omit<Attrs<TComponent>, 'Symbol'>> extends Record<string, never>
      ? // If there are only optional attributes, then the parameter is optional
        (attrs?: Omit<Attrs<TComponent>, IgnoredKeys>) => Promise<void>
      : // If there are required attributes, then the parameter is required
        (attrs: Omit<Attrs<TComponent>, IgnoredKeys>) => Promise<void>
  /**
   * The props to pass to the trigger
   */
  triggerProps: ComputedRef<DialogTriggerProps>
}

export interface Dialog {
  id: string
  isOpen: boolean
  component: Component
}

export interface UseDialogContainerReturnType {
  dialogs: Ref<Dialog[]>
}
