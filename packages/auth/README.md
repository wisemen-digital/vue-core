# Wisemen vue-core OAuth Client

This package provides a simple way to authenticate with an OAuth2 server.

## Installation

```bash
pnpm add @wisemen/vue-core-oauth-client
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
  scopes: ['openid', 'profile', 'email'],
})
```
