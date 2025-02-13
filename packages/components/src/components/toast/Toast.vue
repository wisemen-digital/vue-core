<script setup lang="ts">
import { computed, toValue } from 'vue'

import Icon from '@/components/icon/Icon.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { toastStyle } from '@/components/toast/toast.style'
import type { Icon as IconType } from '@/icons/icons'
import type { Toast } from '@/types/toast.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = defineProps<{
  /**
   * The toast to display.
   */
  toast: Toast
  /**
   * The type of the toast.
   */
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

const defaultIcon = computed<IconType>(() => {
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
    :class="[
      containerClasses,
      ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value),
    ]"
    :data-test-id="props.toast.testId"
  >
    <div class="flex items-center gap-x-2 overflow-hidden">
      <div :class="iconContainerClasses">
        <Icon
          :icon="props.toast.icon ?? defaultIcon"
          class="size-4"
        />
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
        <Icon
          icon="close"
          class="size-4"
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep {
  em {
    @ly font-semibold;
  }
}
</style>
