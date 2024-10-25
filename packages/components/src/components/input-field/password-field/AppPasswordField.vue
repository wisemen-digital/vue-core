<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
import AppTextField from '@/components/input-field/text-field/AppTextField.vue'
import type { AppTextFieldProps } from '@/components/input-field/text-field/textField.props'
import AppToggle from '@/components/toggle/AppToggle.vue'
import type { Icon } from '@/icons/icons'

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
</script>

<template>
  <AppTextField
    v-bind="props"
    v-model="model"
    :type="inputType"
  >
    <template #right>
      <AppToggle
        v-model="isPasswordVisible"
        :is-disabled="props.isDisabled"
      >
        <AppIconButton
          :icon="buttonIcon"
          :label="buttonLabel"
          :style-config="{
            '--icon-button-size-default': '32px',
            '--icon-button-icon-size-default': '16px',
            '--button-ring-color-focus': 'transparent',
            '--button-bg-color-focus': 'var(--bg-secondary-hover)',
            '--button-bg-color-disabled': 'transparent',
            '--button-border-color-disabled': 'transparent',
          }"
          :is-disabled="props.isDisabled"
          size="sm"
          class="mr-[3px]"
          variant="tertiary"
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
