<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppIconButton from '@/components/button/AppIconButton.vue'
import FormElement from '@/components/form-element/FormElement.vue'
import AppInput from '@/components/input/AppInput.vue'
import { useInputStyle } from '@/components/input/input.style'
import AppToggle from '@/components/toggle/AppToggle.vue'
import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = withDefaults(
  defineProps<{
    /**
     * The test id of the input.
     * @default undefined
     */
    testId?: string
    /**
     * Whether the input is disabled.
     */
    isDisabled?: boolean
    /**
     * Whether the input is loading.
     * @default false
     */
    isLoading?: boolean
    /**
     *  Whether the input is required.
     */
    isRequired?: boolean
    /**
     * Whether the input is touched.
     */
    isTouched: boolean
    /**
     * The errors associated with the input.
     */
    errors: FormFieldErrors
    /**
     * The left icon of the input.
     * @default null
     */
    iconLeft?: Icon | null
    /**
     * The label of the input.
     */
    label: string
    /**
     * The placeholder of the input.
     * @default null
     */
    placeholder?: null | string
    /**
     * The tooltip of the input.
     */
    tooltip?: string
  }>(),
  {
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
    iconLeft: null,
    placeholder: null,
  },
)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<null | string>({
  required: true,
})

const isPasswordVisible = ref<boolean>(false)

const { t } = useI18n()

const inputType = computed<'password' | 'text'>(() => {
  return isPasswordVisible.value ? 'text' : 'password'
})

function onFocus(): void {
  emit('focus')
}

function onBlur(): void {
  emit('blur')
}

const inputStyle = useInputStyle()

const passwordIconClasses = computed<string>(() => inputStyle.passwordIcon())
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
    :tooltip="props.tooltip"
  >
    <AppInput
      :id="id"
      v-model="model"
      :type="inputType"
      :is-disabled="props.isDisabled"
      :test-id="props.testId"
      :is-invalid="isInvalid"
      :placeholder="props.placeholder"
      :icon-left="props.iconLeft"
      :is-loading="props.isLoading"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template #right>
        <AppToggle
          v-model:is-toggled="isPasswordVisible"
          :is-disabled="props.isDisabled"
        >
          <template #default="{ isToggled }">
            <AppIconButton
              :icon="isToggled
                ? 'eyeSlash'
                : 'eye'"
              :label="isToggled
                ? t('components.password_input.hide_password')
                : t('components.password_input.show_password')"
              :class="passwordIconClasses"
              tabindex="-1"
              size="sm"
              variant="ghost"
            />
          </template>
        </AppToggle>
      </template>
    </AppInput>
  </FormElement>
</template>
