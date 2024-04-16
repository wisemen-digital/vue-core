<script setup lang="ts" generic="TValue extends string">
import {
  TagsInputInput,
  TagsInputRoot,
} from 'radix-vue'

import AppTagsInputItem from './AppTagsInputItem.vue'

const props = withDefaults(defineProps<{
  id?: null | string
  isDisabled?: boolean
  isInvalid?: boolean
  max?: null | number
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

const model = defineModel<TValue[]>({
  required: true,
})

function onFocus(): void {
  emit('focus')
}

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <TagsInputRoot
    v-model="model"
    :disabled="props.isDisabled"
    :add-on-paste="true"
    :max="props.max ?? undefined"
    :class="[
      model.length === 0 ? 'px-2' : 'px-1',
      {
        'border-input-border focus-within:ring-ring': !props.isInvalid,
        'border-destructive focus-within:ring-destructive': props.isInvalid,
      },
    ]"
    class="flex min-h-10 w-full flex-wrap items-center gap-1 rounded-input border border-solid bg-input py-1 transition-shadow duration-200 focus-within:ring-2 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
      :class="{
        'cursor-not-allowed opacity-50': props.isDisabled,
      }"
      class="flex-1 bg-transparent p-1 text-sm outline-none placeholder:text-input-placeholder"
      @focus="onFocus"
      @blur="onBlur"
    />
  </TagsInputRoot>
</template>
