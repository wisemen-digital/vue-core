<script setup lang="ts">
import { ref } from 'vue'

import AppCheckbox from './components/checkbox/AppCheckbox.vue'
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
      <AppCheckbox
        v-model="unchecked"
        :is-disabled="false"
        :errors="errors"
        :is-required="true"
        label="Checkbox"
        hint="This is a checkbox."
      />
    </div>
    <div>
      <AppCheckbox
        v-model="unchecked"
        :is-disabled="false"
        :is-touched="true"
        :errors="errors"
        label="Checkbox"
        hint="This is errored."
      />
    </div>
    <div>
      <AppCheckbox
        v-model="unchecked"
        :is-disabled="true"
        :errors="errors"
        label="Checkbox"
        hint="This is disabled."
      />
    </div>
    <div>
      <AppCheckbox
        v-model="checked"
        :is-disabled="false"
        :is-touched="false"
        :errors="errors"
        label="Checkbox"
        hint="This is checked."
      />
    </div>
    <div>
      <AppCheckbox
        v-model="checked"
        :is-disabled="false"
        :is-touched="true"
        :errors="errors"
        label="Checkbox"
        hint="This is a errored."
      />
    </div>
    <div>
      <AppCheckbox
        v-model="checked"
        :is-disabled="true"
        :errors="errors"
        label="Checkbox"
        hint="This is disabled."
      />
    </div>
    <div>
      <AppCheckbox
        v-model="checked"
        :is-disabled="false"
        :is-touched="false"
        :is-indeterminate="true"
        :errors="errors"
        label="Checkbox"
        hint="This is checked."
      />
    </div>
    <div>
      <AppCheckbox
        v-model="checked"
        :is-disabled="false"
        :is-touched="true"
        :is-indeterminate="true"
        :errors="errors"
        label="Checkbox"
        hint="This is a errored."
      />
    </div>
    <div>
      <AppCheckbox
        v-model="checked"
        :is-disabled="true"
        :is-indeterminate="true"
        :errors="errors"
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
