<script setup lang="ts">
import {
  VcButton,
  VcIcon,
} from '@wisemen/vue-core'
</script>

<template>
  <VcButton icon-right="arrowRight">
    Button

    <template #icon-right="{ iconRight }">
      <VcIcon
        :icon="iconRight"
        class="
          ml-2 size-4 -rotate-45 duration-200
          group-hover:rotate-0
          group-active:scale-90
        "
      />
    </template>
  </VcButton>
</template>
