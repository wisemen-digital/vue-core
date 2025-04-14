# Address Autocomplete

A component that provides an autocomplete functionality for addresses using the Google Maps API.

This component is build on top of the [Autocomplete](/packages/components-next/components/autocomplete/autocomplete.html) component.

<ComponentPreview name="address-autocomplete/examples/main" />

## Usage
```vue
<script setup lang="ts">
import { VcAddressAutocomplete } from '@wisemen/vue-core-components'

const address = ref<Address | null>(null)
</script>

<template>
  <VcAddressAutocomplete
    v-model="address"
    label="Address"
    placeholder="Search for an address"
  />
</template>
```

<!-- @include: ./address-autocomplete-meta.md -->