export interface OidcUser {
  updated_at: number
  name: string
  email: string
  email_verified: boolean
  family_name: string
  given_name: string
  locale: string | null
  preferred_username: string
  sub: string
}

interface CallbackFailedEvent {
  message: string
  type: 'callback_failed'
}

interface CallbackHandledEvent {
  redirectTarget: string
  type: 'callback_handled'
}

interface MetadataLoadFailedEvent {
  message: string
  type: 'metadata_load_failed'
}

interface MetadataLoadedEvent {
  hasEndSessionEndpoint: boolean
  hasUserInfoEndpoint: boolean
  type: 'metadata_loaded'
}

interface StorageFallbackEvent {
  from: 'local' | 'session'
  to: 'local' | 'memory' | 'session'
  type: 'storage_fallback'
}

interface TokenRefreshFailedEvent {
  message: string
  terminal: boolean
  type: 'token_refresh_failed'
}

interface TokenRefreshStartedEvent {
  type: 'token_refresh_started'
}

interface TokenRefreshSucceededEvent {
  type: 'token_refresh_succeeded'
}

export type OAuthClientEvent
  = CallbackFailedEvent
    | CallbackHandledEvent
    | MetadataLoadedEvent
    | MetadataLoadFailedEvent
    | StorageFallbackEvent
    | TokenRefreshFailedEvent
    | TokenRefreshStartedEvent
    | TokenRefreshSucceededEvent

export interface OAuthClientOptions {
  /*
   * The client ID.
   */
  clientId: string
  /*
   * The paths that are allowed to be accessed for redirects.
   * If not set, all paths are allowed.
   */
  allowedPaths?: string[]
  /*
   * Override automatic silent renew behavior.
   * Defaults to true when `silentRedirectUri` is set, otherwise false.
   */
  automaticSilentRenew?: boolean
  /*
   * The base URL of the OAuth2 server.
   */
  baseUrl: string
  /*
   * The paths that are blocked for redirects.
   * If not set, no paths are blocked.
   */
  blockedPaths?: string[]
  /*
   * Session monitor polling interval in seconds.
   * Defaults to 60.
   */
  checkSessionIntervalInSeconds?: number
  /*
   * Number of seconds before token expiry to trigger proactive refresh.
   * Defaults to 30.
   */
  clockSkewInSeconds?: number
  /*
   * The URL to redirect to after login.
   */
  loginRedirectUri: string
  /*
   * Whether to monitor session changes at the identity provider.
   * Defaults to false.
   */
  monitorSession?: boolean
  /*
   * The URL to redirect to after logout.
   */
  postLogoutRedirectUri: string
  /*
   * The prefix for storage keys.
   * This should be unique per application and helps avoid key collisions.
   */
  prefix?: string
  /*
   * Enforce HTTPS for authority/redirect URLs.
   * Defaults to true, but localhost and 127.0.0.1 are always allowed.
   */
  requireHttps?: boolean
  /*
   * The scopes to request from the OAuth2 server.
   */
  scopes?: string[]
  /*
   * Silent renew callback URI. If omitted, silent renew is disabled.
   */
  silentRedirectUri?: string
  /*
   * Browser storage used for auth/session data.
   * - session: clears when tab is closed (recommended)
   * - local: persists across browser restarts
   */
  storage?: 'local' | 'session'
  /*
   * Controls what happens if requested storage is unavailable.
   * - allow: fallback to alternate browser storage, then memory
   * - disallow: throw an error
   */
  storageFallback?: 'allow' | 'disallow'
  /*
   * OIDC userinfo endpoint override.
   * If omitted, metadata `userinfo_endpoint` is used.
   */
  userInfoEndpoint?: string
  /*
   * Optional hook for observability of auth lifecycle events.
   */
  onEvent?: (event: OAuthClientEvent) => void
}
