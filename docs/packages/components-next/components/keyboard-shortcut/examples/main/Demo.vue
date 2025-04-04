<script setup lang="ts">
import { VcKeyboardShortcut } from '@wisemen/vue-core-components'
</script>

<template>
  <div class="gap-xl flex flex-col items-center">
    <VcKeyboardShortcut :keyboard-keys="['meta', 'k']" />
    <VcKeyboardShortcut :keyboard-keys="['j', 'k']" />
  </div>
</template>
