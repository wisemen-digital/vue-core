<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { mergeClasses } from '@/customClassVariants'
import SelectSearchInput from '@/packages/@next/select/parts/SelectSearchInput.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  hasInteractedWithInlineSearchInput,
  isDisabled,
  classConfig,
  customClassConfig,
  inlinesearchInputElementRef,
  style,
} = useInjectSelectContext()
const listboxFilterRef = ref<InstanceType<typeof SelectSearchInput>>()

function onInput(): void {
  hasInteractedWithInlineSearchInput.value = true
}

onMounted(() => {
  inlinesearchInputElementRef.value = listboxFilterRef.value?.$el ?? null
})
</script>

<template>
  <SelectSearchInput
    ref="listboxFilterRef"
    :disabled="isDisabled"
    :class="style.inlineSearchInput({
      class: mergeClasses(customClassConfig.inlineSearchInput, classConfig?.inlineSearchInput),
    })"
    @input="onInput"
  />
</template>
