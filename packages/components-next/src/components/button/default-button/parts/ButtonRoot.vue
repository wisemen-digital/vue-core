<script setup lang="ts">
import { computed } from 'vue'

import { useProvideButtonContext } from '@/components/button/default-button/button.context'
import type { ButtonProps } from '@/components/button/default-button/button.props'
import {
  type CreateButtonStyle,
  createButtonStyle,
} from '@/components/button/default-button/button.style'
import type { ButtonEmits } from '@/components/button/shared/sharedButton.props'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<ButtonProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  classConfig: null,
  iconLeft: null,
  iconRight: null,
  loadingLabel: null,
  size: 'md',
  type: 'button',
  variant: 'primary',
})

const emit = defineEmits<ButtonEmits>()

const buttonStyle = computed<CreateButtonStyle>(() => createButtonStyle({
  size: props.size,
  variant: props.variant,
}))

const customClassConfig = useComponentClassConfig('button', {
  size: props.size,
  variant: props.variant,
})

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
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <InteractableElement
      :is-disabled="props.isDisabled"
      :aria-disabled="props.isLoading"
      :aria-busy="props.isLoading"
      :type="props.type"
      :data-loading="props.isLoading"
      :class="buttonStyle.root({
        class: mergeClasses(customClassConfig.root, props.classConfig?.root),
      })"
      as="button"
      @click="onClick"
    >
      <slot />
    </InteractableElement>
  </PrimitiveElement>
</template>
