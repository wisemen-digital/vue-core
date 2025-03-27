<script setup lang="ts">
import { VcIconButton } from '@wisemen/vue-core-components'
</script>

<template>
  <VcIconButton
    :class-config="{
      root: 'bg-gradient-to-br from-slate-900 to-slate-800 border-none',
    }"
    icon="search"
    label="Button"
  />
</template>