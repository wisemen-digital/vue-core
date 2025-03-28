# Config Provider

Wrap your application in this component to provide some base configuration variables to all components.

## Import

```ts
import { VcConfigProvider } from '@wisemen/vue-core'
```

<!-- @include: ./config-provider-meta.md -->

## Examples

###  Wrapping your application

```vue [App.vue]
<script setup lang="ts">
import { VcConfigProvider, VcThemeProvider } from '@wisemen/vue-core'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
</script>

<template>
  <VcConfigProvider
    :locale="i18n.locale.value"
  >
    <VcThemeProvider
      :is-dark-mode-enabled="false"
      theme="default"
    >
      // Your app
    </VcThemeProvider>
  </VcConfigProvider>
</template>
```