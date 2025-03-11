<script setup lang="ts">
import { DialogClose as RekaDialogClose } from 'reka-ui'
</script>

<template>
  <RekaDialogClose :as-child="true">
    <slot>
      <button>x</button>
    </slot>
  </RekaDialogClose>
</template>
