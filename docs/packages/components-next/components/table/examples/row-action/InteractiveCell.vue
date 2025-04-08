<script setup lang="ts">
import {
  VcIconButton,
  VcTableCell,
  VcTableInteractiveElement,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcTableCell>
    <VcTableInteractiveElement>
      <VcIconButton
        icon="search"
        label="Search"
        size="sm"
        variant="secondary"
        @click="console.log('Action')"
      />
    </VcTableInteractiveElement>
  </VcTableCell>
</template>
