<script setup lang="ts">
import { ListboxGroup as RekaListboxGroup } from 'reka-ui'
import {
  onBeforeUnmount,
  onMounted,
  useId,
} from 'vue'

import { useInjectSelectContext } from '@/packages/@next/select/select.context'
import { useProvideSelectGroupContext } from '@/packages/@next/select/selectGroup.context'

const { allGroups, filteredGroups } = useInjectSelectContext()

const id = useId()

onMounted(() => {
  if (allGroups.value.has(id)) {
    return
  }

  allGroups.value.set(id, new Set())
})

onBeforeUnmount(() => {
  allGroups.value.delete(id)
})

const context = useProvideSelectGroupContext({
  id,
  labelId: '',
})
</script>

<template>
  <RekaListboxGroup
    :hidden="!filteredGroups.has(id)"
    :aria-labelledby="context.labelId"
  >
    <slot />
  </RekaListboxGroup>
</template>
