# Installation

A quick tutorial to get you started with `@wisemen/vue-core-api-utils`.
This package assumes you use the hey-api client generator with the error generator plugin and `@wisemen/vue-core` in your project.

## 1. Install the package

::: code-group
```bash [pnpm]
pnpm install @wisemen/vue-core-api-utils
```

:::

## 2. Install peer dependencies

`@wisemen/vue-core-api-utils` requires the following peer dependencies:

::: code-group
```bash [pnpm]
pnpm install @tanstack/vue-query neverthrow
```
:::

## 3. Setup your query keys

You have two options:

### Recommended: type-only (no module augmentation)

```typescript
import { createApiUtils } from '@wisemen/vue-core-api-utils'

type ContactUuid = string
interface Contact {
  id: string
  name: string
}

interface MyQueryKeys {
  contactDetail: {
    entity: Contact
    params: { contactUuid: ContactUuid }
  }
}

export const {
  useOptimisticUpdates,
} = createApiUtils<MyQueryKeys>()
```

### Alternative: config-based

```typescript
import { createApiUtils, defineQueryKeys } from '@wisemen/vue-core-api-utils'

export const queryKeys = defineQueryKeys({
  contactDetail: {
    entity: {} as Contact,
    params: { contactUuid: '' as ContactUuid },
  },
})

export const {
  useOptimisticUpdates,
} = createApiUtils({ queryKeys })
```

### Legacy: module augmentation

Define your query keys using module augmentation:

```typescript
// filepath: src/types/queryKeys.type.ts
interface ProjectQueryKeys {
  contactDetail: {
    contactUuid: ComputedRef<ContactUuid>
  }
  contactIndex: {
    queryParams?: InfiniteQueryOptions<ContactIndexQueryParams['params']
  }
}

declare module '@wisemen/vue-core-api-utils' {
  interface QueryKeys extends ProjectQueryKeys {}
}
```

## 4. Setup your known errors
```typescript
// filepath: src/types/apiErrorCode.type.ts

import type { ApiErrorCodeType } from '@/client/apiErrorCode.gen'

declare module '@wisemen/vue-core-api-utils' {
  interface ApiErrorCodes extends ApiErrorCodeType {}
}
```

## 5. You're all set!
