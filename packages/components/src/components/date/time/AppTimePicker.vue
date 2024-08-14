<script setup lang="ts">
import { vMaska } from 'maska'
import {
  ComboboxAnchor,
  ComboboxInput,
  ComboboxPortal,
  ComboboxRoot,
} from 'radix-vue'
import { ref } from 'vue'

import AppComboboxContent from '@/components/combobox/AppComboboxContent.vue'
import AppComboboxTrigger from '@/components/combobox/AppComboboxTrigger.vue'
import AppComboboxViewport from '@/components/combobox/AppComboboxViewport.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppInput from '@/components/input/AppInput.vue'
import type { Icon } from '@/icons/icons.js'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * The test id of the input.
   * @default null
   */
  testId?: null | string
  /**
   * Add a clear icon to the input field where you can set the value to null.
   */
  hasClearButton?: boolean
  /**
   * Disables the input.
   */
  isDisabled?: boolean
  /**
   * Set an invalid state to the input.
   */
  isInvalid?: boolean
  /**
   * Sets the input in readonly state.
   */
  isReadonly?: boolean
  /**
   * The left icon of the input.
   * @default 'clock'
   */
  iconLeft?: Icon | null
  /**
   * The right icon of the input.
   * @default null
   */
  iconRight?: Icon | null
  /**
   * Placeholder of the input.
   *  @default null
   */
  placeholder?: null | string
}>(), {
  id: null,
  testId: null,
  hasClearButton: false,
  isDisabled: false,
  isInvalid: false,
  iconLeft: 'clock',
  iconRight: null,
  placeholder: null,
})

const modelValue = defineModel<null | string>({
  required: true,
})

const value = ref<null | string>(null)
const isOpen = ref<boolean>(false)

// const timeOptions: string[] = Array.from({ length: 24 }, (_, hour) =>
//   Array.from({ length: 4 }, (_, quarter) =>
//     `${hour.toString().padStart(2, '0')}:${(quarter * 15).toString().padStart(2, '0')}`)).flat()

function isValidTime(time: string): boolean {
  // HH:MM
  const timeRegex = /^(?:[01]?\d|2[0-3]):[0-5]\d$/

  return timeRegex.test(time)
}

function onInputBlur(): void {
  if (value.value === null) {
    return
  }

  const isValid = isValidTime(value.value)

  if (isValid) {
    return
  }

  value.value = null
}
</script>

<template>
  <ComboboxRoot
    v-model:open="isOpen"
    v-model="value"
    :is-disabled="props.isDisabled"
    :filter-function="(options) => options"
  >
    <ComboboxAnchor>
      <ComboboxInput :as-child="true">
        <AppInput
          :id="props.id"
          v-model="value"
          :test-id="props.testId"
          :is-invalid="props.isInvalid"
          :is-disabled="props.isDisabled"
          :is-loading="false"
          :is-touched="false"
          :placeholder="props.placeholder"
          :icon-left="props.iconLeft"
          :icon-right="props.iconRight"
          v-maska
          data-maska="##:##"
          @blur="onInputBlur"
        >
          <template
            v-if="false"
            #right
          >
            <AppComboboxTrigger
              :is-disabled="props.isDisabled"
              class="mr-1 flex flex-row gap-2 p-2"
            >
              <AppIcon
                icon="chevronDown"
                size="sm"
              />
            </AppComboboxTrigger>
          </template>
        </AppInput>
      </ComboboxInput>
    </ComboboxAnchor>

    <ComboboxPortal v-if="false">
      <Transition
        enter-active-class="duration-150"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="z-popover"
        >
          <AppComboboxContent
            :popover-props="{
              align: 'center',
              minWidth: 'min-content',
            }"
          >
            <AppComboboxViewport>
              <!--  -->
            </AppComboboxViewport>
          </AppComboboxContent>
        </div>
      </Transition>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
