<script setup lang="ts">
import { ref } from 'vue'

import TagsInputField from '@/components/tags-input-field/TagsInputField.vue'
import TextField from '@/components/text-field/TextField.vue'

const modelValue = ref<string[]>([])
</script>

<template>
  <Story title="TagsInputField">
    <div class="grid grid-cols-2 gap-sm">
      <TextField
        label="jeroen"
        hint="jeroen"
      />
      <TagsInputField
        v-model="modelValue"
        :is-required="true"
        label="Users"
        placeholder="Add tags..."
        hint="Press enter to add a tag"
        class="w-100"
      />
    </div>
  </Story>
</template>
