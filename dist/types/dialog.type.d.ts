import type { Component, Ref } from 'vue';
export type IgnoredKeys = '__v_isVNode' | 'class' | 'key' | 'onVnodeBeforeMount' | 'onVnodeBeforeUnmount' | 'onVnodeBeforeUpdate' | 'onVnodeMounted' | 'onVnodeUnmounted' | 'onVnodeUpdated' | 'ref' | 'ref_for' | 'ref_key' | 'style';
type PickKeys<T extends object, TValue extends null | undefined> = NonNullable<{
    [K in keyof T]: TValue extends T[K] ? K : never;
}[keyof T]>;
type OptionalKeys<T extends object> = PickKeys<T, undefined>;
type RequiredKeys<T extends object> = Exclude<keyof T, OptionalKeys<T>>;
export interface Constructor<P = never> {
    __isFragment?: never;
    __isSuspense?: never;
    __isTeleport?: never;
    new (...args: never[]): {
        $props: P;
    };
}
export type Attrs<TComponent> = Omit<{
    [K in keyof TComponent]: Ref<TComponent[K]> | TComponent[K];
}, 'isOpen'>;
export interface UseDialogOptions<TComponent extends Record<string, unknown>> {
    /**
     * Whether the dialog should animate from the trigger
     * @default false
     */
    animateFromTrigger?: boolean;
    /**
     * The component to render. Must be a component of which the root is `AppDialog`
     */
    component: () => Promise<{
        default: Constructor<TComponent>;
    }>;
}
export interface UseDialogReturnType<TComponent extends Record<string, unknown>> {
    /**
     * Close the dialog
     */
    closeDialog: () => void;
    /**
     * The dialog id. Should be bound to the trigger
     */
    dialogId: string;
    /**
     * Open the dialog
     * @param attrs The props to pass to the dialog - optional
     */
    openDialog: Omit<Attrs<TComponent>, 'Symbol'> extends Record<string, never> ? () => Promise<void> : RequiredKeys<Omit<Attrs<TComponent>, 'Symbol'>> extends Record<string, never> ? (attrs?: Omit<Attrs<TComponent>, IgnoredKeys>) => Promise<void> : (attrs: Omit<Attrs<TComponent>, IgnoredKeys>) => Promise<void>;
}
export interface Dialog {
    component: Component;
    id: string;
    isOpen: boolean;
}
export interface UseDialogContainerReturnType {
    dialogs: Ref<Dialog[]>;
}
export {};
