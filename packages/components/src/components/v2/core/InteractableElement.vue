<script setup lang="ts">
import { Primitive } from 'reka-ui'

import type {
  InteractableElement,
  NonUndefined,
} from '@/utils/props.util'

const props = withDefaults(defineProps<NonUndefined<InteractableElement> & { as?: string | null }>(), {
  isDisabled: false,
  as: null,
})
</script>

<template>
  <Primitive
    :as-child="props.as === null"
    :as="props.as ?? undefined"
    :disabled="isDisabled"
  >
    <slot />
  </Primitive>
</template>
