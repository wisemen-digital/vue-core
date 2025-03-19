<script setup lang="ts">
import { useId } from 'vue'

import { useInjectSelectGroupContext } from '@/packages/@next/select/selectGroup.context'

const groupContext = useInjectSelectGroupContext()
const id = useId()

groupContext.labelId = id
</script>

<template>
  <span :id="groupContext.labelId">
    <slot />
  </span>
</template>
