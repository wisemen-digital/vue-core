<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { FormGroup, FormInput } from '@wisemen/vue-core'
import { ref } from 'vue'

const firstName = ref<null | string>(null)
const lastName = ref<null | string>(null)
</script>

<template>
  <ComponentPlayground :controls="null">
    <template #default="{ values }">
      <FormGroup v-bind="values">
        <FormInput
          v-model="firstName"
          :errors="null"
          :is-touched="false"
          label="First name"
        />
        <FormInput
          v-model="lastName"
          :errors="null"
          :is-touched="false"
          label="Last name"
        />
      </FormGroup>
    </template>
  </ComponentPlayground>
</template>
