<script setup lang="ts">
import { Primitive } from 'reka-ui'

import type {
  InteractableElement,
} from '@/utils/props.util'

const props = withDefaults(defineProps<InteractableElement & { as?: string | null }>(), {
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
