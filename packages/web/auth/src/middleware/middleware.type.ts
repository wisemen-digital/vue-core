/**
 * A route location object or undefined.
 * Uses `any` to avoid coupling to a specific vue-router version.
 */
type RouteMiddlewareReturnType = Record<string, unknown> | undefined

export type MiddlewareFn = (
  to?: any,
  from?: any,
) => Promise<RouteMiddlewareReturnType> | RouteMiddlewareReturnType
