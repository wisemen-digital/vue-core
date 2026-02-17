<script setup lang="ts">
import { DropdownMenuSeparator as RekaDropdownMenuSeparator } from 'reka-ui'

import Separator from '#packages/separator/Separator.vue'
</script>

<template>
  <RekaDropdownMenuSeparator :as-child="true">
    <Separator />
  </RekaDropdownMenuSeparator>
</template>
