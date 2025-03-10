<script setup lang="ts">
import { Primitive } from 'reka-ui'

import type {
  NonUndefined,
  PrimitiveElement,
} from '@/utils/props.util'

const props = withDefaults(defineProps<NonUndefined<PrimitiveElement> & { as?: string | null }>(), {
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
    :test-id="props.testId"
  >
    <slot />
  </Primitive>
</template>
