<script setup lang="ts">
import { Primitive } from 'reka-ui'

import type {
  InteractableElement,
} from '@/utils/props.util'

const props = withDefaults(defineProps<InteractableElement & { as?: string | null }>(), {
  testId: null,
  isDisabled: false,
  as: null,
})
</script>

<template>
  <Primitive
    :as-child="props.as === null"
    :as="props.as ?? undefined"
    :data-test-id="props.testId"
    :disabled="isDisabled"
  >
    <slot />
  </Primitive>
</template>
