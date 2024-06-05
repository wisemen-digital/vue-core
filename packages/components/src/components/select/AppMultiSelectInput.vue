<script setup lang="ts">
import {
  ComboboxInput,
  ComboboxTrigger,
} from 'radix-vue'
import { ref } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import type { Icon } from '@/icons/icons'

const props = withDefaults(defineProps<{
  id: null | string
  isDisabled: boolean
  isEmpty: boolean
  isInvalid: boolean
  isLoading: boolean
  iconLeft: Icon | null
  placeholder: null | string
}>(), {})

const emit = defineEmits<{
  blur: []
  open: []
}>()

const isFocused = ref<boolean>(false)

function onSpace(): void {
  emit('open')
}

function onFocus(): void {
  isFocused.value = true
}

function onBlur(): void {
  isFocused.value = false
  emit('blur')
}
</script>

<template>
  <label
    :class="{
      'border-input-border [&:has(:focus-visible)]:ring-ring': !props.isInvalid,
      'border-destructive [&:has(:focus-visible)]:border-input-border [&:has(:focus-visible)]:ring-destructive': props.isInvalid,
      'cursor-not-allowed opacity-50': props.isDisabled,
    }"
    class="relative flex h-10 items-center rounded-input border border-solid bg-input outline-none ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2"
  >
    <slot name="left">
      <AppIcon
        v-if="props.iconLeft !== null && props.iconLeft !== undefined"
        :icon="props.iconLeft"
        class="ml-3 text-muted-foreground"
      />
    </slot>

    <ComboboxInput
      :id="props.id"
      :placeholder="props.placeholder"
      :readonly="true"
      :class="[
        isEmpty ? 'placeholder:text-input-placeholder' : 'placeholder:text-input-foreground',
      ]"
      class="block size-full cursor-pointer truncate bg-transparent py-2 pl-3 pr-8 text-sm outline-none duration-200 placeholder:text-input-foreground disabled:cursor-not-allowed"
      @blur="onBlur"
      @focus="onFocus"
      @keydown.enter.prevent
      @keydown.space.prevent="onSpace"
    />

    <AppLoader
      v-if="props.isLoading"
      class="mr-3 size-4 text-muted-foreground"
    />

    <ComboboxTrigger
      :class="{
        'cursor-not-allowed': props.isDisabled,
      }"
      class="absolute right-0 top-0 mr-1 flex size-full items-center justify-end p-2"
    >
      <AppIcon
        v-if="!props.isLoading"
        icon="chevronDown"
        class="text-muted-foreground"
        size="sm"
      />
    </ComboboxTrigger>
  </label>
</template>
