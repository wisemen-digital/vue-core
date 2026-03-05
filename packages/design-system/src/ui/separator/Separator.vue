<script setup lang="ts">
import { Separator } from 'reka-ui'
import { computed } from 'vue'

import type { SeparatorProps } from '@/ui/separator/separator.props'
import type { SeperatorStyle } from '@/ui/separator/seperator.style'
import { createSeperatorStyle } from '@/ui/separator/seperator.style'

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: 'horizontal',
})

const seperatorStyle = computed<SeperatorStyle>(() => createSeperatorStyle({
  orientation: props.orientation,
}))
</script>

<template>
  <Separator
    :class="seperatorStyle.separator({
      class: props.class,
    })"
    :orientation="props.orientation"
    role="presentation"
  />
</template>
