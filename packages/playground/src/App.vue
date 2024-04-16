<script setup lang="ts">
import { useForm } from 'formango'
import { z } from 'zod'

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
    <FormPhoneNumberInput
      v-bind="phoneNumber"
      label="Label"
    />
  </div>
</template>
