<script setup lang="ts">
import {
  ComboboxInput,
  ComboboxTrigger,
} from 'radix-vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppUnstyledButton from '@/components/button/AppUnstyledButton.vue'
import { useComboboxStyle } from '@/components/combobox/combobox.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import type { Icon } from '@/icons/icons'

const props = withDefaults(defineProps<{
  id: null | string
  hasClearButton: boolean
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
  clear: []
}>()

const { t } = useI18n()

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

function onClearButtonClick(): void {
  emit('clear')
}
</script>

<template>
  <label :class="inputContainerClasses">
    <slot name="left">
      <AppIcon
        v-if="props.iconLeft !== null && props.iconLeft !== undefined"
        :icon="props.iconLeft"
        :class="iconClasses"
        class="ml-3"
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

    <AppUnstyledButton
      v-if="props.hasClearButton"
      :label="t('shared.clear')"
      @click.stop="onClearButtonClick"
    >
      <AppIcon icon="close" />
    </AppUnstyledButton>

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
        class="mr-1 flex flex-row gap-2 p-2"
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
