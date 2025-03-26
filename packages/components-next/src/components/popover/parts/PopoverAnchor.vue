<script setup lang="ts">
import { PopoverAnchor as RekaPopoverAnchor } from 'reka-ui'

import { useInjectPopoverContext } from '@/components/popover/popover.context'

const { anchorReferenceElement } = useInjectPopoverContext()
</script>

<template>
  <RekaPopoverAnchor
    :as-child="true"
    :reference="anchorReferenceElement ?? undefined"
  >
    <slot />
  </RekaPopoverAnchor>
</template>
