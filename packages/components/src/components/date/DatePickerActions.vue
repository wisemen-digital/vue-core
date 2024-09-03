<script setup lang="ts">
import AppButton from '@/components/button/AppButton.vue'

const emit = defineEmits<{
  cancel: []
  select: []
}>()

function onCancel(): void {
  emit('cancel')
}

function onSelect(): void {
  emit('select')
}
</script>

<template>
  <div class="flex gap-1">
    <AppButton
      size="xs"
      variant="outline"
      @click="onCancel"
    >
      <slot name="cancel-text" />
    </AppButton>
    <AppButton
      size="xs"
      @click="onSelect"
    >
      <slot name="select-text" />
    </AppButton>
  </div>
</template>
