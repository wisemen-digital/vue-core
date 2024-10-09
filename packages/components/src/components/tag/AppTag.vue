<script setup lang="ts">
import { computed } from 'vue'

import AppTagRemoveButton from '@/components/tag/AppTagRemoveButton.vue'
import { provideTagContext } from '@/components/tag/tag.context.js'
import { tagStyle } from '@/components/tag/tag.style.js'

const props = withDefaults(defineProps<{
  isDisabled?: boolean
  isRemovable?: boolean
}>(), {
  isDisabled: false,
  isRemovable: false,
})

const emit = defineEmits<{
  remove: []
}>()

const style = tagStyle()

const tagBoxClasses = computed<string>(() => style.tagBox({
  isDisabled: props.isDisabled,
}))

const tagContentClasses = computed<string>(() => style.tagContent({
  isDisabled: props.isDisabled,
}))

provideTagContext({
  isDisabled: computed<boolean>(() => props.isDisabled),
  removeTag: () => {
    emit('remove')
  },
})
</script>

<template>
  <div :class="tagBoxClasses">
    <slot name="left" />

    <span :class="tagContentClasses">
      <slot />
    </span>

    <slot name="remove-button">
      <AppTagRemoveButton v-if="props.isRemovable" />
    </slot>

    <slot name="right" />
  </div>
</template>
