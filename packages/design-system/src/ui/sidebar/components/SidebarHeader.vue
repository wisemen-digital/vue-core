<script setup lang="ts">
import LogoWithText from '@/ui/logo/LogoWithText.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'

const props = defineProps<{
  name: string
}>()
</script>

<template>
  <RowLayout justify="between">
    <LogoWithText
      :name="props.name"
      src="https://picsum.photos/300/300"
      size="xs"
    />
    <slot name="right" />
  </RowLayout>
</template>
