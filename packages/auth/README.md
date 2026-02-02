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
  offline: CURRENT_ENVIRONMENT === 'e2e',
  postLogoutRedirectUri: `${window.location.origin}/auth/logout`,
  prefix: 'my-app.auth',
  scopes: ['openid', 'profile', 'email'],
  storage: 'session',
  silentRedirectUri: `${window.location.origin}/auth/silent-callback`,
})
```

### Security defaults

- `openid` scope is always enforced.
- HTTPS is required for OIDC endpoints and redirect URLs (except localhost/127.0.0.1).
- OIDC callback parameters are removed from the URL after successful callback handling.
- Reserved OIDC query parameters cannot be overridden through custom login query params.
- `session` storage is used by default; use `storage: 'local'` only when persistence is explicitly required.

### Callback redirect target

`loginWithCode()` returns the sanitized redirect target extracted from OIDC callback state.
