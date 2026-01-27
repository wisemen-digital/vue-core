<script setup lang="ts">
import { INPUT_META_DEFAULTS } from '@/types/input.type'
import type { InputFieldMetaProps } from '@/ui/input-field-meta/inputFieldMeta.props'
import InputFieldMetaErrorMessage from '@/ui/input-field-meta/InputFieldMetaErrorMessage.vue'
import InputFieldMetaHint from '@/ui/input-field-meta/InputFieldMetaHint.vue'
import InputFieldMetaLabel from '@/ui/input-field-meta/InputFieldMetaLabel.vue'

const props = withDefaults(defineProps<InputFieldMetaProps>(), {
  ...INPUT_META_DEFAULTS,
})
</script>

<template>
  <div>
    <InputFieldMetaLabel
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
    </InputFieldMetaLabel>

    <slot />

    <InputFieldMetaHint
      :hint="props.hint"
      :for="props.for"
    />

    <InputFieldMetaErrorMessage
      v-if="!props.hideErrorMessage"
      :error-message="props.errorMessage"
      :for="props.for"
    />
  </div>
</template>
