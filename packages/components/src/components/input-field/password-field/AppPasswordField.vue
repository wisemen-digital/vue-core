<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
import AppTextField from '@/components/input-field/text-field/AppTextField.vue'
import type { AppTextFieldProps } from '@/components/input-field/text-field/textField.props.js'
import AppToggle from '@/components/toggle/AppToggle.vue'
import type { Icon } from '@/icons/icons.js'
import type { StyleConfig } from '@/types/style.type.js'

const props = withDefaults(defineProps<Omit<AppTextFieldProps, 'iconRight' | 'type'>>(), {
  id: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  autoComplete: 'off',
  errors: null,
  hint: null,
  iconLeft: null,
  label: null,
  placeholder: null,
})

const model = defineModel<null | string>({
  required: true,
})

const isPasswordVisible = ref<boolean>(false)

const { t } = useI18n()

const inputType = computed<'password' | 'text'>(
  () => isPasswordVisible.value ? 'text' : 'password',
)

const buttonIcon = computed<Icon>(() => isPasswordVisible.value ? 'eyeOff' : 'eye')

const buttonLabel = computed<string>(() => (
  isPasswordVisible.value
    ? t('components.password_input.hide_password')
    : t('components.password_input.show_password')
))

const textFieldStyleConfig = computed<Partial<StyleConfig<'textField'>>>(() => {
  if (isPasswordVisible.value) {
    return {}
  }

  // TODO: deze variabelen zouden ook in een style file moeten staan
  // Denk ik? Of enkel de variabelen aanpassen van # naar var()?
  return {
    '--text-field-text-color-default': '#667085',
    '--text-field-text-color-focus': '#667085',
    '--text-field-text-color-hover': '#667085',
  }
})
</script>

<template>
  <AppTextField
    v-bind="props"
    v-model="model"
    :type="inputType"
    :style-config="textFieldStyleConfig"
  >
    <template #right>
      <AppToggle v-model="isPasswordVisible">
        <AppIconButton
          :icon="buttonIcon"
          :label="buttonLabel"
          :style-config="{
            '--button-ring-color-focus': 'transparent',
          }"
          size="sm"
          class="mr-[3px]"
          variant="ghost"
        />
      </AppToggle>
    </template>
  </AppTextField>
</template>

<style>
input::-ms-reveal,
input::-ms-clear {
  display: none;
}
</style>
