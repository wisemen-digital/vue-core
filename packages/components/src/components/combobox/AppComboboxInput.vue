<script setup lang="ts">
import { ComboboxInput, ComboboxTrigger } from 'radix-vue'
import { ref } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import type { Icon } from '@/icons/icons'

const props = withDefaults(defineProps<{
  id: null | string
  isChevronHidden: boolean
  isDisabled: boolean
  isInvalid: boolean
  isLoading: boolean
  iconLeft: Icon | null
  iconRight: Icon | null
  placeholder: null | string
  showPlaceholderAsValue?: boolean
}>(), {
  showPlaceholderAsValue: false,
})

const emit = defineEmits<{
  blur: []
}>()

const isFocused = ref<boolean>(false)

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
      'border-destructive [&:has(:focus-visible)]:ring-destructive': props.isInvalid,
      'cursor-not-allowed opacity-50': props.isDisabled,
    }"
    class="flex h-10 items-center rounded-input border border-solid bg-input ring-offset-background duration-200 [&:has(:focus-visible)]:outline-none [&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-offset-1"
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
      :class="[
        props.showPlaceholderAsValue && !isFocused ? 'placeholder:text-input-foreground' : 'placeholder:text-input-placeholder',
      ]"
      class="block size-full truncate bg-transparent px-3 py-2 text-sm text-input-foreground outline-none duration-200 disabled:cursor-not-allowed"
      @blur="onBlur"
      @focus="onFocus"
      @keydown.enter.prevent
    />

    <AppLoader
      v-if="props.isLoading"
      class="mr-3 size-4 text-muted-foreground"
    />

    <slot
      v-else
      name="right"
    >
      <AppIcon
        v-if="props.iconRight !== null && props.iconRight !== undefined"
        :icon="props.iconRight"
        class="mr-3 text-muted-foreground"
      />

      <ComboboxTrigger
        v-else-if="!props.isChevronHidden"
        class="mr-1 p-2"
      >
        <AppIcon
          icon="chevronDown"
          class="text-muted-foreground"
          size="sm"
        />
      </ComboboxTrigger>
    </slot>
  </label>
</template>
