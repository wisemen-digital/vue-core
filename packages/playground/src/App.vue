<script setup lang="ts">
import { useForm } from 'formango'
import { z } from 'zod'

import AppButton from '../../components/src/components/button/AppButton.vue'
import AppInput from '../../components/src/components/input/AppInput.vue'
import FormPhoneNumberInput from '../../components/src/components/input/FormPhoneNumberInput.vue'

const { form } = useForm({
  schema: z.object({
    phone: z.string(),
  }),
})

const phoneNumber = form.register('phone')
</script>

<template>
  <div class="p-24">
    <AppInput
      :model-value="null"
      class="w-72"
    />

    <AppButton>Button</AppButton>

    <FormPhoneNumberInput
      v-bind="phoneNumber"
      label="Label"
      class="mt-24 w-52"
    />
  </div>
</template>
