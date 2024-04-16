<script setup lang="ts">
import AppDialog from '../../components/src/components/dialog/AppDialog.vue'
import AppDialogCloseButton from '../../components/src/components/dialog/AppDialogCloseButton.vue'

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <AppDialog>
    <div class="h-24 w-[30rem]">
      <AppDialogCloseButton>
        <button>test</button>
      </AppDialogCloseButton>
    </div>
  </AppDialog>
</template>
