<script setup lang="ts">
import { VcKeyboardShortcut } from '@wisemen/vue-core-components'
</script>

<template>
  <div class="flex flex-col items-center gap-xl">
    <VcKeyboardShortcut :keyboard-keys="['meta', 'k']" />
    <VcKeyboardShortcut :keyboard-keys="['j', 'k']" />
  </div>
</template>
