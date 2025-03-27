# Button

Displays a button with only an icon.

<ComponentPreview name="icon-button/examples/main" />

<!-- todo: @include: ./icon-button-meta.md -->

## Usage
```vue
<script setup lang="ts">
import { VcIconButton } from '@wisemen/vue-core-components'
</script>

<template>
  <VcIconButton
    label="Button label"
    icon="search"
  />
</template>
```

## Anatomy

```vue
<script setup lang="ts">
import {
  VcIconButtonRoot,
  VcIconButtonLoader,
  VcIconButtonIcon,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcIconButtonRoot>
    <VcIconButtonLoader />
    <VcIconButtonIcon />
  </VcIconButtonRoot>
</template>
```

## Examples

### Variant

<ComponentPreview name="icon-button/examples/variant" />

### Size

<ComponentPreview name="icon-button/examples/size" />

### Disabled

<ComponentPreview name="icon-button/examples/disabled" />

### Loading

<ComponentPreview name="icon-button/examples/loading" />

### Customize

`root`, `icon`, `loader`

<ComponentPreview name="icon-button/examples/customize" />