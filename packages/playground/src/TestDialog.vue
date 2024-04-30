<script setup lang="ts">
import AppDialog from '../../components/src/components/dialog/AppDialog.vue'
import AppDialogCloseButton from '../../components/src/components/dialog/AppDialogCloseButton.vue'

const _emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
  <AppDialog>
    <div class="h-24 w-[30rem]">
      <AppDialogCloseButton>
        <button>test</button>
      </AppDialogCloseButton>
    </div>
  </AppDialog>
</template>
