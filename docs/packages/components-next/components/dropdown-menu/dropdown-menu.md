# Dropdown Menu

A component that displays a dropdown menu.

<ComponentPreview name="dropdown-menu/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcDropdownMenuRoot,
  VcDropdownMenuTrigger,
  VcDropdownMenuPortal,
  VcDropdownMenuContent,
  VcDropdownMenuContentTransition,
  VcDropdownMenuArrow,
} from '@wisemen/vue-core-components'
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>
      <slot name="trigger" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuContentTransition>
          <slot name="content" />

          <DropdownMenuArrow />
        </DropdownMenuContentTransition>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

<!-- @include: ./dropdown-menu-meta.md -->