# Avatar

An image element with a fallback for representing a user.

<ComponentPreview name="avatar/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcAvatarRoot,
  VcAvatarImage,
  VcAvatarFallback,
} from '@wisemen/vue-core-components'
</script>


<template>
  <VcAvatarRoot>
    <VcAvatarImage />
    <VcAvatarFallback />
  </VcAvatarRoot>
</template>
```

## Examples

### Initials

<ComponentPreview name="avatar/examples/initials" />

<!-- @include: ./avatar-meta.md -->