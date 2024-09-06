<script setup lang="ts">
import {
  EditableArea,
  EditableInput,
  EditablePreview,
} from 'radix-vue'
</script>

<template>
  <EditableArea>
    <EditablePreview />
    <EditableInput class="w-full" />
  </EditableArea>
</template>
