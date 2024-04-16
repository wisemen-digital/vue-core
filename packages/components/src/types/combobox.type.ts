export type ArrayOrWrapped<T> = T extends any[] ? T : Array<T>
