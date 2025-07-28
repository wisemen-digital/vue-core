# Address Autocomplete

A component that provides an autocomplete functionality for addresses using the Google Maps API.

This component is build on top of the [Autocomplete](/packages/components-next/components/autocomplete/autocomplete.html) component.

<ComponentPreview name="address-autocomplete/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  Autocomplete,
  SelectItem,
} from '@wisemen/vue-core-components'
</script>

<template>
  <Autocomplete>
    <template #item>
      <SelectItem />
    </template>
  </Autocomplete>
</template>
```

<!-- @include: ./address-autocomplete-meta.md -->
