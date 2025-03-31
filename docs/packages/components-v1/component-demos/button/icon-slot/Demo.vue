<script setup lang="ts">
import { VcButton, VcIcon } from '@wisemen/vue-core'
</script>

<template>
  <VcButton icon-right="arrowRight">
    Button

    <template #icon-right="{ iconRight }">
      <VcIcon
        :icon="iconRight"
        class="-rotate-45 group-hover:rotate-0 group-active:scale-90 size-4 ml-2 duration-200"
      />
    </template>
  </VcButton>
</template>
