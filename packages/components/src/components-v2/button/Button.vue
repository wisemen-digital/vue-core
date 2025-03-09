<script setup lang="ts">
import type {
  ButtonProps,
} from '@/components-v2/button/button.props'
import ButtonContentContainer from '@/components-v2/button/parts/ButtonContentContainer.vue'
import ButtonIconLeft from '@/components-v2/button/parts/ButtonIconLeft.vue'
import ButtonIconRight from '@/components-v2/button/parts/ButtonIconRight.vue'
import ButtonLoader from '@/components-v2/button/parts/ButtonLoader.vue'
import ButtonRoot from '@/components-v2/button/parts/ButtonRoot.vue'
import type { NativeEvents } from '@/types/emits.type'

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
</script>

<template>
  <ButtonRoot
    v-bind="props"
    @click="emit('click', $event)"
  >
    <ButtonContentContainer>
      <slot name="icon-left">
        <ButtonIconLeft />
      </slot>

      <slot name="default" />

      <slot name="icon-right">
        <ButtonIconRight />
      </slot>
    </ButtonContentContainer>

    <slot name="loader">
      <ButtonLoader />
    </slot>
  </ButtonRoot>
</template>
