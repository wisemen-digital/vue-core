<script setup lang="ts">
import {
  ComboboxInput,
  ComboboxTrigger,
} from 'radix-vue'
import { computed, ref } from 'vue'

import { useComboboxStyle } from '@/components/combobox/combobox.style'
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

const comboboxStyle = useComboboxStyle()
const inputContainerClasses = computed<string>(() => comboboxStyle.inputContainer({
  isDisabled: props.isDisabled,
  isInvalid: props.isInvalid,
}))

const inputClasses = computed<string>(() => comboboxStyle.input({
  placeholderAsValue: props.showPlaceholderAsValue && !isFocused.value,
}))

const iconClasses = computed<string>(() => comboboxStyle.icon())
const loaderClasses = computed<string>(() => comboboxStyle.inputLoader())

function onFocus(): void {
  isFocused.value = true
}

function onBlur(): void {
  isFocused.value = false
  emit('blur')
}
</script>

<template>
  <label :class="inputContainerClasses">
    <slot name="left">
      <AppIcon
        v-if="props.iconLeft !== null && props.iconLeft !== undefined"
        :icon="props.iconLeft"
        :class="iconClasses"
      />
    </slot>

    <ComboboxInput
      :id="props.id"
      :placeholder="props.placeholder"
      :class="inputClasses"
      @blur="onBlur"
      @focus="onFocus"
      @keydown.enter.prevent
    />

    <AppLoader
      v-if="props.isLoading"
      :class="loaderClasses"
      class="mr-3"
    />

    <slot
      v-else
      name="right"
    >
      <AppIcon
        v-if="props.iconRight !== null && props.iconRight !== undefined"
        :icon="props.iconRight"
        :class="iconClasses"
        class="mr-3"
      />

      <ComboboxTrigger
        v-else-if="!props.isChevronHidden"
        class="mr-1 p-2"
      >
        <AppIcon
          :class="iconClasses"
          icon="chevronDown"
          size="sm"
        />
      </ComboboxTrigger>
    </slot>
  </label>
</template>
