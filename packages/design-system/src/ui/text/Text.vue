<script setup lang="ts">
import {
  computed,
  ref,
  useAttrs,
} from 'vue'

import type { TextProps } from '@/ui/text/text.props'
import type { TextStyle } from '@/ui/text/text.style'
import { createTextStyle } from '@/ui/text/text.style'

const props = withDefaults(defineProps<TextProps>(), {
  as: 'span',
  class: null,
  disableTooltip: false,
  truncate: true,
})

const attrs = useAttrs()

const textStyle = computed<TextStyle>(() => createTextStyle({
  truncate: props.truncate,
}))

const textRef = ref<HTMLElement | null>(null)
</script>

<template>
  <!-- eslint-disable vue/no-v-text-v-html-on-component -->
  <Component
    v-bind="attrs"
    :is="props.as"
    ref="textRef"
    :class="textStyle.text({
      class: props.class,
    })
    "
  >
    {{ props.text }}
  </Component>
</template>
