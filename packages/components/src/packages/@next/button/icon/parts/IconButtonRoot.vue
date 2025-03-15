<script setup lang="ts">
import { computed } from 'vue'

import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { useProvideIconButtonContext } from '@/packages/@next/button/icon/iconButton.context'
import type { IconButtonProps } from '@/packages/@next/button/icon/iconButton.props'
import {
  type CreateIconButtonStyle,
  createIconButtonStyle,
} from '@/packages/@next/button/icon/style/iconButton.style'
import type { ButtonEmits } from '@/packages/@next/button/shared/sharedButton.props'
import InteractableElement from '@/packages/@next/shared/InteractableElement.vue'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<IconButtonProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  classConfig: null,
  size: 'md',
  type: 'button',
  variant: 'primary',
})

const emit = defineEmits<ButtonEmits>()

const buttonStyle = computed<CreateIconButtonStyle>(() => createIconButtonStyle({
  size: props.size,
  variant: props.variant,
}))

const customClassConfig = useComponentClassConfig('iconButton', {
  size: props.size,
  variant: props.variant,
})

function onClick(event: MouseEvent): void {
  if (props.isLoading) {
    return
  }

  emit('click', event)
}

useProvideIconButtonContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: buttonStyle,
})
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <InteractableElement
      :is-disabled="props.isDisabled"
      :aria-disabled="props.isLoading"
      :aria-busy="props.isLoading"
      :type="props.type"
      :data-is-loading="props.isLoading"
      :class="buttonStyle.root({
        class: mergeClasses(customClassConfig.root, props.classConfig?.root),
      })"
      as="button"
      @click="onClick"
    >
      <span class="sr-only">
        {{ props.label }}
      </span>

      <slot />
    </InteractableElement>
  </PrimitiveElement>
</template>
