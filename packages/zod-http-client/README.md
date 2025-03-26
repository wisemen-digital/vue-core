# Zod http client

This package allows you to validate http requests and responses using Zod schemas.

## Installation

```bash
pnpm add @wisemen/vue-core-zod-http-client
```

## Usage

Create a new file `httplib.ts` and add the following code:

```typescript
import { createHttpZodClient } from '@appwise/zod-http-client'
import { useClipboard } from '@vueuse/core'
import { useToast } from '@wisemen/vue-core'
import { computed } from 'vue'

import { CURRENT_ENVIRONMENT } from '@/constants/environment.constant.ts'
import { axios } from '@/libs/axios.lib'

interface ZodError {
  error: unknown
  method: string
  url: string
}

function onZodError({ error, method, url }: ZodError): void {
  const toast = useToast()
  const clipboard = useClipboard({
    copiedDuring: 2000,
  })

  if (CURRENT_ENVIRONMENT !== 'production') {
    toast.error({
      action: {
        label: computed<string>(() => clipboard.copied.value ? 'Copied!' : 'Copy error'),
        onClick: () => {
          void clipboard.copy(`${method.toUpperCase()} ${url} returned a malformed response.\n\n${JSON.stringify(error, null, 2)}`)
        },
      },
      durationInMs: 20000,
      icon: 'alertCircle',
      message: `${method.toUpperCase()} ${url} returned a malformed response.`,
    })
  }

  console.error(`${method.toUpperCase()} ${url} returned a malformed response\n\n`, JSON.stringify(error, null, 2))
}

export const httpClient = createHttpZodClient({
  axios,
  onZodError,
})
```
