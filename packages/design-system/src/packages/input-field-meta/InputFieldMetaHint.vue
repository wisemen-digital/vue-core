<script setup lang="ts">
import { UIText } from '@/packages/text/index'

const props = defineProps<{
  for: string | null
  hint: string | null
}>()
</script>

<template>
  <UIText
    v-if="props.hint !== null"
    :id="`${props.for}-hint`"
    :text="props.hint"
    :truncate="false"
    role="alert"
    class="block pt-xs text-xs text-tertiary"
  />
</template>
