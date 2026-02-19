<script setup lang="ts">
import Text from '@/ui/text/Text.vue'

const props = defineProps<{
  label: string
}>()
</script>

<template>
  <Text
    :text="props.label"
    class="text-xs text-quaternary"
  />
</template>
