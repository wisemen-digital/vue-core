# Router Link Button

Displays a RouterLink element from vue-router

## Anatomy

```vue
<script setup lang="ts">
import {
  VcRouterLinkButtonRoot,
  VcRouterLinkButtonContent,
  VcRouterLinkButtonIconLeft,
  VcRouterLinkButtonIconRight,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcRouterLinkButtonRoot>
    <VcRouterLinkButtonContent>
      <VcRouterLinkButtonIconLeft />
      <slot />
      <VcRouterLinkButtonIconRight />
    </VcRouterLinkButtonContent>
  </VcRouterLinkButtonRoot>
</template>
```

<!-- @include: ./router-link-button-meta.md -->