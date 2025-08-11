<script setup lang="ts">
import { useId } from 'vue'

import FormField from '@/components/form-field/FormField.vue'
import TagsInputFieldInput from '@/components/tags-input-field/parts/TagsInputFieldInput.vue'
import TagsInputFieldItem from '@/components/tags-input-field/parts/TagsInputFieldItem.vue'
import TagsInputFieldRoot from '@/components/tags-input-field/parts/TagsInputFieldRoot.vue'
import type {
  TagsInputFieldEmits,
  TagsInputFieldProps,
} from '@/components/tags-input-field/tagsInputField.props'

const props = defineProps<TagsInputFieldProps>()
const emit = defineEmits <TagsInputFieldEmits>()

const modelValue = defineModel<string[]>({
  required: true,
})

const id = props.id ?? useId()
</script>

<template>
  <FormField
    :error-message="props.errorMessage"
    :hint="props.hint"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :label="props.label"
    :for="id"
  >
    <template #label>
      <slot name="label" />
    </template>

    <template #error>
      <slot name="error" />
    </template>

    <template #hint>
      <slot name="hint" />
    </template>

    <TagsInputFieldRoot
      v-bind="props"
      :id="id"
      v-model="modelValue"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
    >
      <TagsInputFieldItem />
      <TagsInputFieldInput />
    </TagsInputFieldRoot>
  </FormField>
</template>
