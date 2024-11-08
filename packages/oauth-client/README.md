# Wisemen vue-core OAuth Client

This package provides a simple way to authenticate with an OAuth2 server.

## Installation

```bash
pnpm add @wisemen/vue-core-oauth-client
```

## Usage

Create a new file `oAuth.lib.ts` and add the following code:

```typescript
import { OAuth2VueClient } from '@wisemen/oauth2-vue-client'
import axios from 'axios'

import {
  API_AUTH_URL,
  API_CLIENT_ID,
  API_CLIENT_SECRET,
} from '@/constants/environment.constant.ts'

export const oAuthClient = new OAuth2VueClient({
  clientId: API_CLIENT_ID,
  axios,
  clientSecret: API_CLIENT_SECRET,
  tokenEndpoint: `${API_AUTH_URL}/token`,
})
```

Add the authorization header to the axios request
```typescript
axios.interceptors.request.use((config) => addAuthorizationHeader(oAuthClient, config))
```
