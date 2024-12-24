<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import type { TextFieldProps } from '@/components/input-field/text-field/textField.props'
import TextField from '@/components/input-field/text-field/TextField.vue'
import Toggle from '@/components/toggle/Toggle.vue'
import type { Icon } from '@/icons/icons'

const props = withDefaults(defineProps<Omit<TextFieldProps, 'iconRight' | 'type'>>(), {
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

const model = defineModel<string | null>({
  required: true,
})

const isPasswordVisible = ref<boolean>(false)

const { t } = useI18n()

const inputType = computed<'password' | 'text'>(
  () => isPasswordVisible.value ? 'text' : 'password',
)

const buttonIcon = computed<Icon>(
  () => isPasswordVisible.value
    ? 'passwordFieldEyeOff'
    : 'passwordFieldEye',
)

const buttonLabel = computed<string>(() => (
  isPasswordVisible.value
    ? t('component.password_field.hide_password')
    : t('component.password_field.show_password')
))
</script>

<template>
  <TextField
    v-bind="props"
    v-model="model"
    :type="inputType"
  >
    <template #label="{ label }">
      <slot
        :label="label"
        name="label"
      />
    </template>

    <template #error="{ errors }">
      <slot
        :errors="errors"
        name="error"
      />
    </template>

    <template #hint="{ hint }">
      <slot
        :hint="hint"
        name="hint"
      />
    </template>

    <template #bottom="{ errors, hint }">
      <slot
        :errors="errors"
        :hint="hint"
        name="bottom"
      />
    </template>

    <template #right>
      <Toggle
        v-model="isPasswordVisible"
        :is-disabled="props.isDisabled"
      >
        <IconButton
          :icon="buttonIcon"
          :label="buttonLabel"
          :style-config="{
            '--icon-button-size-default': '2rem',
            '--icon-button-icon-size-default': '1rem',
            '--icon-button-ring-color-focus': 'transparent',
            '--icon-button-bg-color-focus': 'var(--bg-secondary-hover)',
            '--icon-button-bg-color-disabled': 'transparent',
            '--icon-button-border-color-disabled': 'transparent',
          }"
          :is-disabled="props.isDisabled"
          size="sm"
          class="mr-[0.1875rem] shrink-0"
          variant="tertiary"
        />
      </Toggle>
    </template>
  </TextField>
</template>

<style>
input::-ms-reveal,
input::-ms-clear {
  display: none;
}
</style>
