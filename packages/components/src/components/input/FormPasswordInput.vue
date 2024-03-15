<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

import AppIconButton from '../button/AppIconButton.vue'
import FormInputContainer from '../form-input-container/FormInputContainer.vue'
import AppToggle from '../toggle/AppToggle.vue'
import AppInput from './AppInput.vue'

const props = withDefaults(
  defineProps<{
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
     * The label of the input.
     */
    label: string
    /**
     * The placeholder of the input.
     * @default null
     */
    placeholder?: null | string
  }>(),
  {
    iconLeft: undefined,
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
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
</script>

<template>
  <FormInputContainer
    v-slot="{ isInvalid, id }"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :placeholder="placeholder"
    :label="props.label"
  >
    <AppInput
      :id="id"
      v-model="model"
      :type="inputType"
      :is-disabled="props.isDisabled"
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
              icon-size="sm"
              variant="ghost"
              class="m-1 size-8"
            />
          </template>
        </AppToggle>
      </template>
    </AppInput>
  </FormInputContainer>
</template>
