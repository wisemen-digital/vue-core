/**
 * Type utility to convert a native HTMLElement event to an emit.
 */
export interface NativeEvent<T extends keyof HTMLElementEventMap> {
  (e: T, event: HTMLElementEventMap[T]): void
}
