<script setup lang="ts">
import { useMounted } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import {
  computed,
  onBeforeUnmount,
  onMounted,
  useId,
  useTemplateRef,
} from 'vue'

import { useInjectAdaptiveContentContext } from '@/ui/adaptive-content/adaptiveContent.context'

const props = defineProps<{
  priority: number
}>()

const blockRef = useTemplateRef('block')

const {
  registerBlock,
  unregisterBlock,
  visibleBlockIds,
} = useInjectAdaptiveContentContext()

const id = useId()
const isBlockVisible = computed<boolean>(() => visibleBlockIds.value.has(id))
const isMounted = useMounted()

onMounted(() => {
  registerBlock({
    id,
    element: blockRef.value?.$el,
    priority: props.priority,
  })
})

onBeforeUnmount(() => {
  unregisterBlock(id)
})
</script>

<template>
  <Primitive
    v-show="isBlockVisible || !isMounted"
    ref="block"
    :as-child="true"
  >
    <slot />
  </Primitive>

  <slot
    v-if="!isBlockVisible && isMounted"
    name="fallback"
  />
</template>
