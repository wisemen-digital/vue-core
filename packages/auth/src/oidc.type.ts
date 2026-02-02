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

export interface OAuthClientOptions {
  /*
  * The client ID
  */
  clientId: string
  /*
  * The paths that are allowed to be accessed for redirects
  * If not set, all paths are allowed
  */
  allowedPaths?: string[]
  /*
  * Override automatic silent renew behavior.
  * Defaults to true when `silentRedirectUri` is set, otherwise false.
  */
  automaticSilentRenew?: boolean
  /*
  * The base URL of the OAuth2 server
  */
  baseUrl: string
  /*
  * The paths that are blocked for redirects
  * If not set, no paths are blocked
   */
  blockedPaths?: string[]
  /*
  * The URL to redirect to after login
  */
  loginRedirectUri: string
  /*
  * The URL to redirect to after logout
  */
  postLogoutRedirectUri: string
  /*
  * The prefix for storage keys. This should be unique per application and helps avoid key collisions.
  */
  prefix: string
  /*
  * Enforce HTTPS for authority/redirect URLs.
  * Defaults to true, but localhost and 127.0.0.1 are always allowed.
  */
  requireHttps?: boolean
  /*
  * The scopes to request from the OAuth2 server
  */
  scopes: string[]
  /*
  * Silent renew callback URI. If omitted, silent renew is disabled.
  */
  silentRedirectUri?: string
  /*
  * Browser storage used for auth/session data
  * - session: clears when tab is closed (recommended)
  * - local: persists across browser restarts
  */
  storage?: 'local' | 'session'
}
