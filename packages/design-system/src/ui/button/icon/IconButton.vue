<script setup lang="ts">
import {
  computed,
  useAttrs,
} from 'vue'

import ActionTooltip from '@/ui/action-tooltip/ActionTooltip.vue'
import { useProvideIconButtonContext } from '@/ui/button/icon/iconButton.context'
import type { IconButtonProps } from '@/ui/button/icon/iconButton.props'
import type { IconButtonStyle } from '@/ui/button/icon/iconButton.style'
import { createIconButtonStyle } from '@/ui/button/icon/iconButton.style'
import IconButtonIcon from '@/ui/button/icon/IconButtonIcon.vue'
import Loader from '@/ui/loader/Loader.vue'
import { UIRowLayout } from '@/ui/row-layout/index'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<IconButtonProps>(), {
  isDisabled: false,
  isLoading: false,
  isTooltipDisabled: false,
  form: null,
  keyboardShortcut: null,
  size: 'md',
  tooltipLabel: null,
  type: 'button',
  variant: 'primary',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const attrs = useAttrs()

const iconButtonStyle = computed<IconButtonStyle>(() => createIconButtonStyle({
  class: attrs.class as string,
  isLoading: props.isLoading,
  size: props.size,
  variant: props.variant,
}))

function onClick(event: MouseEvent): void {
  if (props.isLoading) {
    event.preventDefault()

    return
  }

  emit('click', event)
}

useProvideIconButtonContext({
  iconButtonStyle,
})
</script>

<template>
  <ActionTooltip
    :is-disabled="props.isTooltipDisabled"
    :label="props.tooltipLabel ?? props.label"
    :keyboard-shortcut="props.keyboardShortcut"
  >
    <!-- This component contains a lot of hacky code to get the glassy look working -->
    <button
      v-bind="attrs"
      :type="props.type"
      :form="props.form ?? undefined"
      :aria-disabled="props.isLoading"
      :disabled="props.isDisabled"
      :aria-busy="props.isLoading"
      :aria-label="props.label"
      :data-interactive="(!props.isDisabled && !props.isLoading) || undefined"
      :class="iconButtonStyle.root()"
      @click="onClick"
    >
      <div
        :class="iconButtonStyle.container()"
      >
        <Loader
          :class="iconButtonStyle.loader()"
        />

        <UIRowLayout
          :class="iconButtonStyle.rowLayout()"
          gap="sm"
        >
          <IconButtonIcon
            :icon="props.icon"
            :size="props.size"
            :variant="props.variant"
          />
        </UIRowLayout>
      </div>
    </button>
  </ActionTooltip>
</template>
