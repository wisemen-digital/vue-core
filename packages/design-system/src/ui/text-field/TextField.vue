<script setup lang="ts">
import {
  useAttrs,
  useId,
  useTemplateRef,
} from 'vue'

import { useInput } from '@/composables/input.composable'
import InputField from '@/packages/input-field/InputField.vue'
import InputFieldMeta from '@/packages/input-field-meta/InputFieldMeta.vue'
import {
  AUTOCOMPLETE_INPUT_DEFAULTS,
  INPUT_DEFAULTS,
  INPUT_FIELD_DEFAULTS,
  INPUT_META_DEFAULTS,
} from '@/types/input.type'
import type { TextFieldProps } from '@/ui/text-field/textField.props'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TextFieldProps>(), {
  ...INPUT_DEFAULTS,
  ...INPUT_META_DEFAULTS,
  ...INPUT_FIELD_DEFAULTS,
  ...AUTOCOMPLETE_INPUT_DEFAULTS,
  size: 'md',
  type: 'text',
})

const modelValue = defineModel<string | null>({
  required: true,
})

const inputRef = useTemplateRef('input')

const attrs = useAttrs()

const id = props.id ?? useId()

const {
  isError,
  ariaBusy,
  ariaDescribedBy,
  ariaInvalid,
  ariaRequired,
} = useInput(id, props)

defineExpose({
  input: inputRef,
})
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
    <template #label-left>
      <slot name="label-left" />
    </template>

    <template #label-right>
      <slot name="label-right" />
    </template>

    <InputField
      :icon-left="props.iconLeft"
      :icon-right="props.iconRight"
      :is-loading="props.isLoading"
      :is-error="isError"
      :is-disabled="props.isDisabled"
      :is-readonly="props.isReadonly"
      :size="props.size"
    >
      <template #left>
        <slot name="left" />
      </template>

      <template #right>
        <slot name="right" />
      </template>

      <input
        v-bind="attrs"
        :id="id"
        ref="input"
        :value="modelValue"
        :aria-describedby="ariaDescribedBy"
        :autocomplete="props.autocomplete ?? undefined"
        :name="props.name ?? undefined"
        :type="props.type"
        :aria-required="ariaRequired"
        :readonly="props.isReadonly"
        :aria-busy="ariaBusy"
        :aria-invalid="ariaInvalid"
        :disabled="props.isDisabled"
        :placeholder="props.placeholder ?? undefined"
        :class="{
          'px-md': props.size === 'md',
          'px-sm': props.size === 'sm',
        }"
        class="
          size-full truncate bg-transparent text-xs text-primary outline-none
          placeholder:text-placeholder
          read-only:cursor-default
          disabled:cursor-not-allowed disabled:text-disabled
          disabled:placeholder:text-fg-disabled-subtle
        "
        data-input-field
        @input="(event) => modelValue = (event.target as HTMLInputElement).value"
      >
    </InputField>
  </InputFieldMeta>
</template>
