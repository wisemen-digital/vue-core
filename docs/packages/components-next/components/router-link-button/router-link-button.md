# Router Link Button

Displays a RouterLink element from vue-router

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

<!-- @include: ./router-link-button-meta.md -->
