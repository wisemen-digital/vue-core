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
  VcDropdownMenuSeparator,
  VcDropdownMenuGroup,
  VcDropdownMenuItem,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcDropdownMenuRoot>
    <VcDropdownMenuTrigger>
      <slot name="trigger" />
    </VcDropdownMenuTrigger>

    <VcDropdownMenuPortal>
      <VcDropdownMenuContent>
        <VcDropdownMenuContentTransition>
          <slot name="content">
            <VcDropdownMenuGroup>
              <VcDropdownMenuItem />
            </VcDropdownMenuGroup>
            <VcDropdownMenuSubMenu>
              ...
            </VcDropdownMenuSubMenu>
            <VcDropdownMenuSeparator />
          </slot>
          <VcDropdownMenuArrow />
        </VcDropdownMenuContentTransition>
      </VcDropdownMenuContent>
    </VcDropdownMenuPortal>
  </VcDropdownMenuRoot>
</template>
```

<!-- @include: ./dropdown-menu-meta.md -->

## Examples

### Disabled option
<ComponentPreview name="dropdown-menu/examples/disabled" />

### Action on select
<ComponentPreview name="dropdown-menu/examples/on-select" />

### Popover props
<ComponentPreview name="dropdown-menu/examples/popover-props" />

### Customize the items
<ComponentPreview name="dropdown-menu/examples/customize-item" />
