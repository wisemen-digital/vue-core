/**
 * Type utility to convert a native HTMLElement event to an emit.
 */
export interface NativeEvents<T extends keyof HTMLElementEventMap = keyof HTMLElementEventMap> {
  (e: T, event: HTMLElementEventMap[T]): void
}
