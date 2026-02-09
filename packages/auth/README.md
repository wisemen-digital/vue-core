# Wisemen vue-core OAuth Client

This package provides a simple way to authenticate with an OAuth2 server.

## Installation

```bash
pnpm add @wisemen/vue-core-auth
```

## Usage

### OidcClient

Create a new file `auth.lib.ts` and add the following code:

```typescript
import { OidcClient } from '@wisemen/vue-core-auth'

import {
  AUTH_BASE_URL,
  AUTH_CLIENT_ID,
  CURRENT_ENVIRONMENT,
} from '@/constants/environment.constant.ts'

export const oAuthClient = new OidcClient({
  clientId: AUTH_CLIENT_ID,
  baseUrl: AUTH_BASE_URL,
  loginRedirectUri: `${window.location.origin}/auth/callback`,
  postLogoutRedirectUri: `${window.location.origin}/auth/logout`,
  prefix: 'my-app',
  scopes: ['openid', 'profile', 'email'],
  storage: 'session',
  storageFallback: 'disallow',
  monitorSession: true,
  onEvent: (event) => {
    console.debug('[auth-event]', event)
  },
})
```

### Security defaults

- `openid` scope is always enforced.
- HTTPS is required for OIDC endpoints and redirect URLs (except localhost/127.0.0.1).
- OIDC callback parameters are removed from the URL after successful callback handling.
- Reserved OIDC query parameters cannot be overridden through custom login query params.
- Userinfo requests use OIDC metadata `userinfo_endpoint` (or explicit `userInfoEndpoint` override).

### Callback redirect target

`handleRedirectCallback()` returns the sanitized redirect target extracted from OIDC callback state.

### Recommended enterprise options

- Use `storage: 'session'` with `storageFallback: 'disallow'`.
- Set `monitorSession: true` to detect IdP-side sign-out/session changes.
- Keep `clockSkewInSeconds` at least 30 seconds for proactive refresh.
- Hook `onEvent` into telemetry/Sentry for auth lifecycle observability.

## Vue Route Orchestration

Use `createVueAuth` to let the package own login/callback/logout routes, guards, and session orchestration.

```ts
import {
  createVueAuth,
} from '@wisemen/vue-core-auth'

export const auth = createVueAuth({
  oidc: {
    clientId: AUTH_CLIENT_ID,
    baseUrl: AUTH_BASE_URL,
    loginRedirectUri: `${window.location.origin}/auth/callback`,
    postLogoutRedirectUri: `${window.location.origin}/auth/logout`,
    storage: 'session',
    storageFallback: 'disallow',
  },
  routes: {
    basePath: '/auth',
    loginPath: 'login',
    callbackPath: 'callback',
    logoutPath: 'logout',
    postLoginRoute: {
      name: 'index',
    },
  },
  user: {
    fetchCurrentUser: async () => await fetchCurrentUser(),
  },
})
```

`auth.routes` can be merged directly into your router and `auth.requireAuthGuard` can be reused in route middleware.
Use `auth.user` and `auth.isUserLoading` as reactive state in app code.
