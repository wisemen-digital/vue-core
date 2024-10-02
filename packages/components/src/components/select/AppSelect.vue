<script setup lang="ts" generic="TValue extends SelectValueType">
import {
  SelectContent,
  SelectPortal,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  useId,
} from 'radix-vue'
import { computed, ref } from 'vue'

import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppInputFieldError from '@/components/input-field-error/AppInputFieldError.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import AppSelectItem from '@/components/select/AppSelectItem.vue'
import AppSelectRoot from '@/components/select/AppSelectRoot.vue'
import {
  type AppSelectProps,
  appSelectPropsDefaultValues,
} from '@/components/select/select.props.js'
import { selectStyle } from '@/components/select/select.style.js'
import AppSpinner from '@/components/spinner/AppSpinner.vue'
import type { SelectValue as SelectValueType } from '@/types/select.type.js'

const props = withDefaults(defineProps<AppSelectProps<TValue>>(), appSelectPropsDefaultValues)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const isOpen = ref<boolean>(false)

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = selectStyle()

const inputId = computed<string>(() => props.id ?? useId())
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const triggerClasses = computed<string>(() => style.trigger({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const valueClasses = computed<string>(() => style.value())
const placeholderClasses = computed<string>(() => style.placeholder())

const iconLeftClasses = computed<string>(() => style.iconLeft({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const caretClasses = computed<string>(() => style.caret({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const inputLabelClasses = computed<string>(() => style.inputLabel({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => style.loaderBox())

const loaderClasses = computed<string>(() => style.loader({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => style.hint({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => style.error())
const dropdownClasses = computed<string>(() => style.dropdown())

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

function onFocus(): void {
  isFocused.value = true
  emit('focus')
}

function onBlur(): void {
  isFocused.value = false
  emit('blur')
}
</script>

<template>
  <div>
    <slot
      v-if="props.label !== null"
      :input-id="inputId"
      name="label"
    >
      <AppInputFieldLabel
        :for="inputId"
        :label="props.label"
        :is-required="props.isRequired"
        :class="inputLabelClasses"
      />
    </slot>

    <AppSelectRoot
      v-model="model"
      v-model:is-open="isOpen"
    >
      <SelectTrigger
        :id="inputId"
        :data-test-id="props.testId"
        :disabled="props.isDisabled"
        :class="triggerClasses"
        @focus="onFocus"
        @blur="onBlur"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <AppIcon
          v-if="props.iconLeft !== null"
          :icon="props.iconLeft"
          :class="iconLeftClasses"
        />

        <SelectValue
          :class="props.placeholder !== null && model === null ? placeholderClasses : valueClasses"
          :placeholder="props.placeholder ?? undefined"
        >
          <template v-if="props.placeholder && model === null">
            {{ props.placeholder }}
          </template>

          <template v-else>
            {{ model }}
          </template>
        </SelectValue>

        <slot
          :is-focused="isFocused"
          :is-hovered="isHovered"
          :is-disabled="props.isDisabled"
          :has-error="hasError"
          name="right"
        />

        <div
          v-if="props.isLoading"
          :class="loaderBoxClasses"
        >
          <slot name="loader">
            <AppSpinner :class="loaderClasses" />
          </slot>
        </div>

        <slot
          v-else
          name="icon-right"
        >
          <AppIcon
            :class="caretClasses"
            icon="chevronDown"
          />
        </slot>
      </SelectTrigger>

      <SelectPortal>
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
            class="relative z-popover"
          >
            <SelectContent
              v-if="isOpen"
              :force-mount="true"
              :align="props.dropdownAlign"
              :side="props.dropdownSide"
              :class="[
                dropdownClasses,
                {
                  'w-[--radix-select-trigger-width]': props.dropdownWidth === 'trigger-width',
                  'w-[--radix-select-content-available-width]': props.dropdownWidth === 'available-width',
                },
              ]"
              class="custom-popover-content"
              position="popper"
            >
              <SelectViewport class="max-h-80">
                <AppSelectItem
                  v-for="(item, itemIndex) of props.items"
                  :key="itemIndex"
                  :item="item"
                  :display-fn="props.displayFn"
                >
                  <template #option-content="{ item: selectItem }">
                    <slot
                      v-if="selectItem.type === 'option'"
                      :item="selectItem"
                      name="option-content"
                    />
                  </template>

                  <template #option-indicator="{ item: selectItem }">
                    <slot
                      v-if="selectItem.type === 'option'"
                      :item="selectItem"
                      name="option-indicator"
                    />
                  </template>

                  <template #group-label="{ label }">
                    <slot
                      :label="label"
                      name="group-label"
                    />
                  </template>

                  <template #separator>
                    <slot name="separator" />
                  </template>
                </AppSelectItem>
              </SelectViewport>
            </SelectContent>
          </div>
        </transition>
      </SelectPortal>
    </AppSelectRoot>

    <AppCollapsable>
      <div v-if="hasError">
        <slot
          name="error"
        >
          <AppInputFieldError
            :errors="props.errors"
            :class="errorClasses"
          />
        </slot>
      </div>

      <div v-else-if="props.hint !== null">
        <slot
          name="hint"
        >
          <AppInputFieldHint
            :hint="props.hint"
            :class="hintClasses"
          />
        </slot>
      </div>
    </AppCollapsable>
  </div>
</template>
