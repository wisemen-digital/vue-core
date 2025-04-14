# Router Link Button

Displays a Router Link that looks like a button.

## Usage

```vue
<script setup lang="ts">
import { VcRouterLinkButton } from '@wisemen/vue-core'
</script>

<template>
  <VcRouterLinkButton>
    Button label
  </VcRouterLinkButton>
</template>
```

## Anatomy

```vue
<script setup lang="ts">
import {
  RouterLinkButtonRoot,
  RouterLinkButtonContent,
  RouterLinkButtonIconLeft,
  RouterLinkButtonIconRight,
} from '@wisemen/vue-core-components'
</script>

<template>
  <RouterLinkButtonRoot>
    <RouterLinkButtonContent>
      <RouterLinkButtonIconLeft />
      <slot />
      <RouterLinkButtonIconRight />
    </RouterLinkButtonContent>
  </RouterLinkButtonRoot>
</template>
```

## Examples
See <a href="/vue-core/packages/components-next/components/button/button.html#examples">Button examples</a>

<!-- @include: ./router-link-button-meta.md -->