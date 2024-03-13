<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { Icon } from '@/icons/icons'

import AppIconButton from '../button/AppIconButton.vue'
import AppToggle from '../toggle/AppToggle.vue'
import AppInput from './AppInput.vue'

const props = withDefaults(defineProps<{
  iconLeft?: Icon | null
  id?: null | string
  isDisabled?: boolean
  isInvalid?: boolean
  placeholder?: null | string
}>(), {
  id: null,
  isDisabled: false,
  isInvalid: false,
  placeholder: null,
})

const model = defineModel<null | string>({
  required: true,
})

const isPasswordVisible = ref<boolean>(false)

const { t } = useI18n()

const inputType = computed<'password' | 'text'>(() => {
  return isPasswordVisible.value ? 'text' : 'password'
})
</script>

<template>
  <AppInput
    :id="props.id"
    v-model="model"
    :type="inputType"
    :is-disabled="props.isDisabled"
    :is-invalid="props.isInvalid"
    :placeholder="props.placeholder"
    :icon-left="props.iconLeft"
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
            variant="ghost"
          />
        </template>
      </AppToggle>
    </template>
  </AppInput>
</template>
