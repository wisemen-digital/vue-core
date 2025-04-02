<script setup lang="ts">
import {
  onMounted,
  ref,
} from 'vue'

import SelectSearchInput from '@/components/select/parts/SelectSearchInput.vue'
import { useInjectSelectContext } from '@/components/select/select.context'
import { mergeClasses } from '@/customClassVariants'

const {
  hasInteractedWithInlineSearchInput,
  isDisabled,
  classConfig,
  customClassConfig,
  inlinesearchInputElementRef,
  placeholder,
  searchInputPlaceholder,
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
    :placeholder="placeholder ?? searchInputPlaceholder"
    aria-autocomplete="list"
    role="combobox"
    autocomplete="false"
    @input="onInput"
  />
</template>
