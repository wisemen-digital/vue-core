<script setup lang="ts">
import {
  useAttrs,
  useId,
} from 'vue'

import { useInput } from '@/composables/input.composable'
import InputFieldMeta from '@/ui/input-field-meta/InputFieldMeta.vue'
import InputFieldWrapper from '@/ui/input-field-wrapper/InputFieldWrapper.vue'
import type { TextareaProps } from '@/ui/textarea/textarea.props'

const props = withDefaults(defineProps<TextareaProps>(), {
  size: 'md',
})

const attrs = useAttrs()

const id = props.id ?? useId()

const {
  isError,
  ariaBusy,
  ariaDescribedBy,
  ariaInvalid,
  ariaRequired,
} = useInput(id, props)
</script>

<template>
  <InputFieldMeta
    :error-message="props.errorMessage"
    :is-disabled="props.isDisabled"
    :is-required="props.isRequired"
    :hint="props.hint"
    :label="props.label"
    :class="props.class"
    :style="props.style"
    :for="id"
    :hide-error-message="props.hideErrorMessage"
  >
    <InputFieldWrapper
      :is-error="isError"
    >
      <textarea
        :aria-required="ariaRequired"
        v-bind="attrs"
        :aria-busy="ariaBusy"
        :aria-invalid="ariaInvalid"
        :aria-describedby="ariaDescribedBy"
      />
    </InputFieldWrapper>
  </InputFieldMeta>
</template>
