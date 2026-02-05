<script setup lang="ts">
import { ref } from 'vue'

import CheckboxGroup from '@/ui/checkbox-group/CheckboxGroup.vue'
import CheckboxGroupCheckbox from '@/ui/checkbox-group/CheckboxGroupCheckbox.vue'
import CheckboxGroupIndeterminateCheckbox from '@/ui/checkbox-group/CheckboxGroupIndeterminateCheckbox.vue'

const modelValue = ref<string[]>([])
</script>

<template>
  <div class="p-xl">
    <CheckboxGroup
      v-model="modelValue"
    >
      <template #indeterminate>
        <CheckboxGroupIndeterminateCheckbox
          label="Select All"
        />
      </template>
      <template #items>
        <CheckboxGroupCheckbox
          label="option 1"
          value="option1"
        />
        <CheckboxGroupCheckbox
          label="option 2"
          value="option2"
        />
        <CheckboxGroupCheckbox
          label="option 3"
          value="option3"
        />
      </template>
    </CheckboxGroup>
  </div>
</template>
