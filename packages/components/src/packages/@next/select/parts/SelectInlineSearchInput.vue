<script setup lang="ts">
import { onMounted, ref } from 'vue'

import SelectSearchInput from '@/packages/@next/select/parts/SelectSearchInput.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  hasInteractedWithInlineSearchInput,
  inlinesearchInputElementRef,
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
    class="z-10 size-full px-md"
    @input="onInput"
  />
</template>
