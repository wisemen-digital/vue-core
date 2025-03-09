<script setup lang="ts">
import { computed } from 'vue'

import { useProvideButtonContext } from '@/components-v2/button/button.context'
import type { ButtonProps } from '@/components-v2/button/button.props'
import {
  type CreateButtonStyle,
  createButtonStyle,
} from '@/components-v2/button/style/button.style'
import InteractableElement from '@/components-v2/core/InteractableElement.vue'
import {
  type ClassConfig,
  getComponentClassConfig,
  mergeClasses,
} from '@/customClassVariants'
import type { NativeEvents } from '@/types/emits.type'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<ButtonProps>(), {
  testId: null,
  isDisabled: false,
  isLoading: false,
  classConfig: null,
  iconLeft: null,
  iconRight: null,
  size: 'md',
  type: 'button',
  variant: 'primary',
})

const emit = defineEmits<NativeEvents>()

const buttonStyle = computed<CreateButtonStyle>(() => createButtonStyle({
  isLoading: props.isLoading,
  size: props.size,
  variant: props.variant,
}))

const customClassConfig = computed<ClassConfig<'button'>>(
  () => getComponentClassConfig('button', 'default', {
    isLoading: props.isLoading,
    size: props.size,
    variant: props.variant,
  }),
)

function onClick(event: MouseEvent): void {
  if (props.isLoading) {
    return
  }

  emit('click', event)
}

useProvideButtonContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: buttonStyle,
})
</script>

<template>
  <InteractableElement
    :is-disabled="props.isDisabled"
    :test-id="props.testId"
    :aria-disabled="props.isLoading"
    :aria-busy="props.isLoading"
    :type="props.type"
    :data-is-loading="props.isLoading"
    :data-is-not-loading="!props.isLoading"
    :class="buttonStyle.base({
      class: mergeClasses(customClassConfig.base, props.classConfig?.base),
    })"
    as="button"
    @click="onClick"
  >
    <slot />
  </InteractableElement>
</template>
