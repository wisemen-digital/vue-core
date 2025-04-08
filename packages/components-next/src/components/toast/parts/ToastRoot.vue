<script setup lang="ts">
import { computed } from 'vue'

import { useProvideToastContext } from '@/components/toast/toast.context'
import type { ToastProps } from '@/components/toast/toast.props'
import type { CreateToastStyle } from '@/components/toast/toast.style'
import { createToastStyle } from '@/components/toast/toast.style'
import { useComponentClassConfig } from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<ToastProps>(), {
  testId: null,
  actions: () => [],
  icon: null,
  preview: null,
})

const toastStyle = computed<CreateToastStyle>(() => createToastStyle({}))

const customClassConfig = useComponentClassConfig('toast', {})

function onClose(): void {
  //
}

useProvideToastContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: toastStyle,
  onClose,
})
</script>

<template>
  <li
    :class="toastStyle.root({
      class: customClassConfig.root,
    })"
    :data-type="type"
    role="alert"
    tabindex="0"
    aria-atomic="true"
    aria-live="assertive"
  >
    <slot />
  </li>
</template>
