<script setup lang="ts">
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<{
  id: string | null
  testId: string | null
  as?: string | null
}>(), {
  id: null,
  testId: null,
  as: null,
})
</script>

<template>
  <Primitive
    :id="props.id"
    :as-child="props.as === null"
    :as="props.as ?? undefined"
    :data-test-id="props.testId"
  >
    <slot />
  </Primitive>
</template>
