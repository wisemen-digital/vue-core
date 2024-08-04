<script setup lang="ts">
import {
  TagsInputInput,
  TagsInputRoot,
} from 'radix-vue'
import { computed } from 'vue'

import AppTagsInputItem from '@/components/tags-input/AppTagsInputItem.vue'
import { useTagsInputStyle } from '@/components/tags-input/tagsInput.style'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   */
  id?: null | string
  /**
   * Whether the input is disabled.
   */
  isDisabled?: boolean
  /**
   * Whether the input is invalid.
   */
  isInvalid?: boolean
  /**
   * The maximum amount of tags allowed.
   */
  max?: null | number
  /**
   * The placeholder of the input.
   */
  placeholder?: null | string
}>(), {
  id: null,
  isDisabled: false,
  isInvalid: false,
  max: null,
  placeholder: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

defineSlots<{
  /** Override the tag rendering */
  tag: (props: {
    value: string
  }) => any
}>()

const model = defineModel<string[]>({
  required: true,
})

function onFocus(): void {
  emit('focus')
}

function onBlur(): void {
  emit('blur')
}

const tagsInputStyle = useTagsInputStyle()

const containerClasses = computed<string>(() => tagsInputStyle.container({
  isInvalid: props.isInvalid,
  isModelEmpty: model.value.length === 0,
}))

const inputClasses = computed<string>(() => tagsInputStyle.input({
  isDisabled: props.isDisabled,
}))
</script>

<template>
  <TagsInputRoot
    v-model="model"
    :disabled="props.isDisabled"
    :add-on-paste="true"
    :max="props.max ?? undefined"
    :class="containerClasses"
  >
    <template
      v-for="tag of model"
      :key="tag"
    >
      <slot
        :value="tag"
        name="tag"
      >
        <AppTagsInputItem
          :value="tag"
          :display-fn="(tag) => tag"
          :is-disabled="props.isDisabled"
        />
      </slot>
    </template>

    <TagsInputInput
      :id="id"
      :placeholder="props.placeholder ?? undefined"
      :class="inputClasses"
      @focus="onFocus"
      @blur="onBlur"
    />
  </TagsInputRoot>
</template>
