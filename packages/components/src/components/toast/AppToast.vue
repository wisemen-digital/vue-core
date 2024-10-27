<script setup lang="ts">
import { computed, toValue } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { toastStyle } from '@/components/toast/toast.style'
import type { Icon } from '@/icons/icons'
import type { Toast } from '@/types/toast.type'

const props = defineProps<{
  toast: Toast
  type: 'error' | 'info' | 'success'
}>()

const emit = defineEmits<{
  closeToast: []
}>()

const themeProviderContext = injectThemeProviderContext()
const style = toastStyle()

const containerClasses = computed<string>(() => style.container({
  variant: props.type,
}))

const iconContainerClasses = computed<string>(() => style.iconContainer({
  variant: props.type,
}))

const messageClasses = computed<string>(() => style.message())

const actionClasses = computed<string>(() => style.action({
  variant: props.type,
}))

const closeButtonClasses = computed<string>(() => style.closeButton({
  variant: props.type,
}))

const defaultIcon = computed<Icon>(() => {
  if (props.type === 'success') {
    return 'check'
  }

  if (props.type === 'error') {
    return 'alertCircle'
  }

  return 'infoCircle'
})

function onClose(): void {
  emit('closeToast')
}
</script>

<template>
  <div
    :class="[themeProviderContext.theme.value, containerClasses]"
    :data-test-id="props.toast.testId"
  >
    <div class="flex items-center gap-x-2 overflow-hidden">
      <div :class="iconContainerClasses">
        <AppIcon :icon="props.toast.icon ?? defaultIcon" />
      </div>

      <span
        :class="messageClasses"
        v-html="props.toast.message"
      />
    </div>

    <div class="flex items-center gap-x-2">
      <button
        v-if="props.toast.action !== undefined"
        :class="actionClasses"
        type="button"
        @click="props.toast.action.onClick(onClose)"
      >
        {{ toValue(props.toast.action.label) }}
      </button>

      <button
        :class="closeButtonClasses"
        type="button"
        aria-label="close"
        @click="onClose"
      >
        <AppIcon icon="close" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep {
  em {
    @apply font-semibold;
  }
}
</style>
