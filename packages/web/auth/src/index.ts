// Core
export type { OAuth2Tokens } from './apiClient'
export type { OidcUser } from './oidc.type'
export type { OAuth2VueClientOptions } from './oidc.type'
export { OidcClient } from './oidcClient'
export { LocalStorageTokensStrategy } from './tokens-strategy/localStorage.tokensStrategy'
export { SessionStorageTokensStrategy } from './tokens-strategy/sessionStorage.tokensStrategy'
export type { TokensStrategy } from './tokens-strategy/tokensStrategy.type'

// Plugin
export type {
  AuthPlugin, AuthPluginOptions, AuthRouterLike,
} from './plugin/authPlugin.type'
export {
  createAuth, getAuthInstance,
} from './plugin/createAuth'

// Composables
export { useAuth } from './composables/useAuth'
export type { UseAuthCallbackOptions } from './composables/useAuthCallback'
export { useAuthCallback } from './composables/useAuthCallback'
export { useAuthLogin } from './composables/useAuthLogin'
export { usePermissions } from './composables/usePermissions'

// Built-in components
export { AuthCallbackComponent } from './components/authCallbackComponent'
export { AuthLogoutComponent } from './components/authLogoutComponent'

// Route factory
export type { AuthRoutesOptions } from './routes/createAuthRoutes'
export { createAuthRoutes } from './routes/createAuthRoutes'

// Middleware types
export type { MiddlewareFn } from './middleware/middleware.type'
