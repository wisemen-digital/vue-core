<script setup lang="ts">
import ColumnLayout from '@/ui/column-layout/ColumnLayout.vue'
import Text from '@/ui/text/Text.vue'

const props = defineProps<{
  label: string | null
}>()
</script>

<template>
  <ColumnLayout gap="sm">
    <Text
      v-if="props.label !== null"
      :text="props.label"
      class="block px-lg text-xs font-medium text-quaternary"
    />

    <ColumnLayout gap="xs">
      <slot />
    </ColumnLayout>
  </ColumnLayout>
</template>
