<script setup lang="ts">
import { ref } from 'vue'

import AppSwitch from './components/switch/AppSwitch.vue'
import type { FormFieldErrors } from './types/formFieldErrors.type'

const checked = ref<boolean>(true)
const unchecked = ref<boolean>(false)

const errors = ref<FormFieldErrors | null>({
  _errors: [
    'This is an error message.',
  ],
})
</script>

<template>
  <div class="grid grid-cols-3 gap-12">
    <div>
      <AppSwitch
        v-model="unchecked"
        :is-disabled="false"
        :errors="errors"
        :is-required="true"
        size="sm"
        label="Checkbox"
        hint="This is a checkbox."
      />
    </div>
    <div>
      <AppSwitch
        v-model="unchecked"
        :is-disabled="false"
        :is-touched="true"
        :errors="errors"
        size="sm"
        label="Checkbox"
        hint="This is errored."
      />
    </div>
    <div>
      <AppSwitch
        v-model="unchecked"
        :is-disabled="true"
        :errors="errors"
        size="sm"
        label="Checkbox"
        hint="This is disabled."
      />
    </div>
    <div>
      <AppSwitch
        v-model="checked"
        :is-disabled="false"
        :is-touched="false"
        :errors="errors"
        size="default"
        label="Checkbox"
        hint="This is checked."
      />
    </div>
    <div>
      <AppSwitch
        v-model="checked"
        :is-disabled="false"
        :is-touched="true"
        :errors="errors"
        size="default"
        label="Checkbox"
        hint="This is a errored."
      />
    </div>
    <div>
      <AppSwitch
        v-model="checked"
        :is-disabled="true"
        :errors="errors"
        size="default"
        label="Checkbox"
        hint="This is disabled."
      />
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
