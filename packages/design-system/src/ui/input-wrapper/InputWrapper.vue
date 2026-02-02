<script setup lang="ts">
import { INPUT_META_DEFAULTS } from '@/types/input.type'
import type { InputWrapperProps } from '@/ui/input-wrapper/inputWrapper.props'
import InputWrapperErrorMessage from '@/ui/input-wrapper/InputWrapperErrorMessage.vue'
import InputWrapperHint from '@/ui/input-wrapper/InputWrapperHint.vue'
import InputWrapperLabel from '@/ui/input-wrapper/InputWrapperLabel.vue'

const props = withDefaults(defineProps<InputWrapperProps>(), {
  ...INPUT_META_DEFAULTS,
})
</script>

<template>
  <div>
    <InputWrapperLabel
      :label="props.label"
      :for="props.for"
      :is-required="props.isRequired"
    >
      <template #left>
        <slot name="label-left" />
      </template>

      <template #right>
        <slot name="label-right" />
      </template>
    </InputWrapperLabel>

    <slot />

    <InputWrapperHint
      :hint="props.hint"
      :for="props.for"
    />

    <InputWrapperErrorMessage
      v-if="!props.hideErrorMessage"
      :error-message="props.errorMessage"
      :for="props.for"
    />
  </div>
</template>
